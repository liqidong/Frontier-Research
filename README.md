# Frontier Research: AI 构建者追踪与深度动态库

本项目是一个专注于 AI 行业核心动态的自动化研究库。其核心理念是 **"Follow Builders, Not Influencers"** —— 过滤掉信息噪音，直接追踪那些正在构建 AI 未来的研究员、创始人、PM 和工程师。

本项目通过自动化工具抓取、提取并分类汇总了 AI 领域最前沿的洞察。

## 🚀 核心价值

- **深度追踪**: 实时/历史追踪 25 位顶级 AI 构建者的 X (Twitter) 动态。
- **播客摘要**: 自动获取并总结《Latent Space》、《No Priors》等顶级 AI 播客的完整转录与 AI 摘要。
- **官方技术动态**: 深度集成 Anthropic Engineering 和 Claude Blog 的深度技术公告。
- **历史研究库**: 已聚合自 2026 年 3 月中旬起的 **767 条** 构建者原始动态和 **10 场** 核心播客的深度研究报告。

## 📂 目录导航

- [**ai_research_reports/**](./ai_research_reports/): **核心研究报告库**。按来源分类的 Markdown 报告。
  - [**index.md**](./ai_research_reports/index.md): **全局导航索引**（推荐从此开始阅读）。
- `follow-builders/`: 底层数据获取与处理引擎（基于 Node.js）。
- `all_historical_data.json`: 聚合去重后的 1.2MB 历史原始数据集（JSON 格式）。
- `extract_history.js`: 用于从 Git 历史提交中回溯并挖掘数据的提取脚本。
- `generate_multi_reports.js`: 将原始 JSON 数据转换为精美分类 Markdown 报告的生成脚本。

## 🎙️ 数据源概览

### 追踪播客 (Podcasts)
- **Latent Space**: AI 开发者与 chief scientists 的深度对话。
- **No Priors**: 顶级 AI 投资者与创始人的对话。
- **Training Data**: 关注 AI 训练底层的技术播客。
- **Unsupervised Learning**: Redpoint AI 制作的前沿动态。

### 核心构建者 (X/Twitter)
包括但不限于：
- **Andrej Karpathy** (@karpathy)
- **Sam Altman** (@sama)
- **Guillermo Rauch** (@rauchg) - Vercel CEO
- **Swyx** (@swyx) - Latent Space
- **Peter Yang** (@petergyang)

## 🛠️ 如何更新数据

如果你想本地运行并更新报告库：

1. **环境准备**:
   ```bash
   cd follow-builders/scripts
   npm install
   ```

2. **更新原始数据**:
   ```bash
   # 仅更新不需要 API Key 的官方博客部分
   node generate-feed.js --blogs-only 
   ```

3. **重新生成报告库**:
   ```bash
   # 运行提取脚本更新全量数据集
   node extract_history.js
   # 运行生成脚本更新 Markdown 报告
   node generate_multi_reports.js
   ```

## 📄 许可证

MIT

---
*Created and maintained by [liqidong](https://github.com/liqidong)*
