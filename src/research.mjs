#!/usr/bin/env node
/**
 * Deep Research Agent M1 - 基础版
 * 基于Tavily搜索的自动研究报告生成工具
 */

import { writeFileSync } from 'fs';

// 配置
const CONFIG = {
  maxResults: 10,
  searchDepth: 'advanced'
};

/**
 * 主研究函数
 * @param {string} query - 研究主题
 * @param {Object} options - 选项
 */
async function research(query, options = {}) {
  console.log(`🔬 Deep Research Agent M1 - 基础版`);
  console.log(`研究主题: ${query}`);
  console.log('');

  // 1. 执行Tavily搜索
  const searchResults = await performSearch(query);
  
  // 2. 去重处理
  const uniqueResults = deduplicateResults(searchResults);
  
  // 3. 生成报告
  const report = generateReport(query, uniqueResults);
  
  return {
    query,
    report,
    sources: uniqueResults.length,
    timestamp: new Date().toISOString()
  };
}

/**
 * 执行Tavily搜索
 */
async function performSearch(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  
  if (!apiKey) {
    throw new Error('TAVILY_API_KEY 环境变量未设置');
  }

  console.log('🔍 执行深度搜索...');
  
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      query: query,
      max_results: CONFIG.maxResults,
      search_depth: CONFIG.searchDepth,
      include_answer: true,
      include_raw_content: true
    })
  });

  if (!response.ok) {
    throw new Error(`搜索失败: ${response.status}`);
  }

  const data = await response.json();
  console.log(`✅ 找到 ${data.results?.length || 0} 个结果`);
  return data.results || [];
}

/**
 * 去重处理
 */
function deduplicateResults(results) {
  const seen = new Set();
  const unique = [];
  
  for (const result of results) {
    if (!seen.has(result.url)) {
      seen.add(result.url);
      unique.push(result);
    }
  }
  
  console.log(`🧹 去重后: ${unique.length} 个唯一来源`);
  return unique;
}

/**
 * 生成报告
 */
function generateReport(query, results) {
  const timestamp = new Date().toLocaleString('zh-CN');
  
  let report = `# ${query} - 研究报告\n\n`;
  report += `> 生成时间: ${timestamp}\n`;
  report += `> 数据来源: Tavily AI Search\n`;
  report += `> 信息源数量: ${results.length}\n\n`;
  
  report += `## 📋 研究摘要\n\n`;
  report += `本报告基于对「${query}」的研究，收集了${results.length}个相关信息源。\n\n`;
  
  report += `## 🔍 关键发现\n\n`;
  
  for (let i = 0; i < Math.min(results.length, 5); i++) {
    const result = results[i];
    report += `### ${i + 1}. ${result.title}\n\n`;
    report += `${result.content || result.snippet || '无详细内容'}\n\n`;
    report += `**来源**: [${new URL(result.url).hostname}](${result.url})\n\n`;
    report += `---\n\n`;
  }
  
  report += `## 📚 数据来源\n\n`;
  results.forEach((result, index) => {
    report += `${index + 1}. **[${result.title}](${result.url})**\n`;
  });
  
  report += `\n---\n\n`;
  report += `*本报告由AI自动生成，仅供参考。*\n`;
  
  return report;
}

// CLI入口
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h') || args.length === 0) {
    console.log(`
🔬 Deep Research Agent M1 - 基础版

用法:
  deep-research <查询主题> [选项]

选项:
  -o, --output <文件>   指定输出文件名 (默认: report.md)
  -h, --help           显示帮助信息

示例:
  deep-research "新能源汽车2026年趋势"
  deep-research "AI行业最新发展" -o ai-report.md

限制:
  - 仅支持单轮搜索
  - 最多10个信息源
  - 无历史记录功能

升级到专业版:
  https://afdian.net/@yourname
`);
    process.exit(0);
  }
  
  let query = '';
  let outputFile = 'report.md';
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-o' || args[i] === '--output') {
      outputFile = args[i + 1];
      i++;
    } else if (!query) {
      query = args[i];
    }
  }
  
  if (!query) {
    console.error('❌ 错误: 请提供研究主题');
    process.exit(1);
  }
  
  try {
    const result = await research(query);
    writeFileSync(outputFile, result.report, 'utf-8');
    
    console.log('');
    console.log('✅ 研究完成!');
    console.log(`📊 信息源: ${result.sources}`);
    console.log(`📄 报告: ${outputFile}`);
    console.log('');
    console.log('💡 提示: 需要多轮搜索和高级功能？升级到专业版！');
    
  } catch (error) {
    console.error('❌ 研究失败:', error.message);
    process.exit(1);
  }
}

main();
