# Deep Research Agent M1

> 🔬 AI-powered research report generator | Input a topic, get a professional research report with citations

[中文](#中文文档) | [English](#english-documentation)

---

## English Documentation

### What is Deep Research Agent?

Deep Research Agent is an AI-powered tool that automatically generates professional research reports. Unlike simple search aggregators, it performs deep research and outputs structured, traceable reports.

**Key Features:**
- 🔍 Single-round deep Tavily search
- 🧹 URL-based deduplication
- 📄 Structured Markdown reports with citations
- ⚡ Command-line interface for easy use

### Quick Start

#### Prerequisites

- Node.js ≥ 18
- Tavily API Key (get one free at [tavily.com](https://tavily.com))

#### Installation

```bash
# Clone the repository
git clone https://github.com/yourname/deep-research-agent.git
cd deep-research-agent

# Install dependencies
npm install

# Set up your API key
export TAVILY_API_KEY="your-api-key-here"
```

#### Usage

```bash
# Basic research
./bin/deep-research "Your research topic"

# Save to specific file
./bin/deep-research "Your research topic" -o my-report.md

# Show help
./bin/deep-research --help
```

#### Example

```bash
./bin/deep-research "AI Agent monetization trends 2026"
```

Output:
```markdown
# AI Agent monetization trends 2026 - Research Report

> Generated: 2026/02/14 10:30:15
> Data source: Tavily AI Search
> Sources: 10

## Summary
This report is based on research on "AI Agent monetization trends 2026"...

## Key Findings
...

## Data Sources
1. [Source Title](URL)
2. [Source Title](URL)
...
```

### Limitations of M1

M1 is the **basic free version** with the following limitations:
- Single-round search only
- Maximum 10 sources
- Markdown output only
- No history tracking
- No scheduled tasks

**Need more features?** Check out our [Professional Version (M2)](https://afdian.net/@yourname) with multi-round search, semantic deduplication, and credibility scoring!

### Tech Stack

- Node.js ES Modules
- Tavily Search API
- Native Fetch API

### License

MIT License - See [LICENSE](LICENSE) for details

### Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

### Support

- GitHub Issues
- Email: your@email.com
- [Sponsor on 爱发电](https://afdian.net/@yourname)

---

## 中文文档

### 什么是 Deep Research Agent？

Deep Research Agent 是一个基于AI的自动研究报告生成工具。不同于简单的搜索聚合，它能生成结构化、可追溯的专业研究报告。

**核心功能：**
- 🔍 单轮深度 Tavily 搜索
- 🧹 URL级别去重
- 📄 结构化 Markdown 报告（带引用）
- ⚡ 简单易用的命令行界面

### 快速开始

#### 环境要求

- Node.js ≥ 18
- Tavily API Key（免费获取：[tavily.com](https://tavily.com)）

#### 安装

```bash
# 克隆仓库
git clone https://github.com/yourname/deep-research-agent.git
cd deep-research-agent

# 安装依赖
npm install

# 设置 API Key
export TAVILY_API_KEY="your-api-key-here"
```

#### 使用

```bash
# 基础研究
./bin/deep-research "你的研究主题"

# 指定输出文件
./bin/deep-research "你的研究主题" -o my-report.md

# 查看帮助
./bin/deep-research --help
```

#### 示例

```bash
./bin/deep-research "AI Agent变现趋势2026"
```

### M1 版本限制

M1 是**基础免费版**，有以下限制：
- 仅支持单轮搜索
- 最多10个信息源
- 仅支持 Markdown 输出
- 无历史记录功能
- 无定时任务功能

**需要更多功能？** 查看我们的 [专业版 (M2)](https://afdian.net/@yourname)，支持多轮搜索、语义去重和可信度评估！

### 技术栈

- Node.js ES Modules
- Tavily Search API
- Native Fetch API

### 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE)

### 贡献

欢迎贡献！请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

### 支持

- GitHub Issues
- 邮箱: your@email.com
- [在爱发电赞助](https://afdian.net/@yourname)

---

## ⭐ Star History

If you find this project helpful, please give it a star! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=yourname/deep-research-agent&type=Date)](https://star-history.com/#yourname/deep-research-agent&Date)

---

**Made with ❤️ by Jarvis**
