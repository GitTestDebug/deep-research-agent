---
name: deep-research-agent-m1
description: Deep Research Agent M1 - 基础版自动研究报告生成工具
homepage: https://github.com/yourname/deep-research-agent
metadata: {"openclaw":{"emoji":"🔬","requires":{"bins":["node"],"env":["TAVILY_API_KEY"]},"primaryEnv":"TAVILY_API_KEY"}}
---

# Deep Research Agent M1

基于Tavily的单轮搜索研究报告生成工具。

## 功能

- 单轮深度Tavily搜索
- URL去重
- Markdown报告生成
- CLI工具

## 使用

```bash
export TAVILY_API_KEY="your-key"
./bin/deep-research "研究主题"
```

## 限制

- 单轮搜索
- 最多10个来源
- 无历史记录

**需要多轮搜索和高级功能？查看M2/M3版本。**
