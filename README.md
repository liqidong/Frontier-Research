# Frontier Research: AI 构建者追踪与深度动态库

本项目是一个专注于 AI 行业核心动态的自动化研究库。其核心理念是 **"Follow Builders, Not Influencers"** —— 过滤掉信息噪音，直接追踪那些正在构建 AI 未来的研究员、创始人、PM 和工程师。

本项目通过自动化工具抓取、提取并分类汇总了 AI 领域最前沿的洞察。

## 🚀 核心价值

- **深度追踪**: 实时/历史追踪 25 位顶级 AI 构建者的 X (Twitter) 动态。
- **播客摘要**: 自动获取并总结顶级 AI 播客的完整转录与 AI 摘要。
- **官方技术动态**: 深度集成 Anthropic Engineering 和 Claude Blog。
- **历史研究库**: 聚合自 2026 年 3 月中旬起的 **767 条** 构建者原始动态和 **10 场** 核心播客。

## 📂 快速导航 (研究报告)

> 点击以下链接直接查看特定构建者或播客的详细历史研究报告。

### 🎙️ AI 播客 (Podcasts)

| 节目名称 | 内容数量 | 链接报告 |
| :--- | :--- | :--- |
| Latent Space | 4 期 | [查看报告](./ai_research_reports/podcast_latent_space.md) |
| AI & I by Every | 2 期 | [查看报告](./ai_research_reports/podcast_ai___i_by_every.md) |
| No Priors | 1 期 | [查看报告](./ai_research_reports/podcast_no_priors.md) |
| Unsupervised Learning | 1 期 | [查看报告](./ai_research_reports/podcast_unsupervised_learning.md) |
| The MAD Podcast with Matt Turck | 1 期 | [查看报告](./ai_research_reports/podcast_the_mad_podcast_with_matt_turck.md) |
| Training Data | 1 期 | [查看报告](./ai_research_reports/podcast_training_data.md) |

### 🐦 AI 构建者 (X/Twitter)

| 构建者姓名 | 账号 | 内容数量 | 链接报告 |
| :--- | :--- | :--- | :--- |
| Garry Tan | @garrytan | 89 条 | [查看报告](./ai_research_reports/x_garrytan.md) |
| Peter Yang | @petergyang | 72 条 | [查看报告](./ai_research_reports/x_petergyang.md) |
| Dan Shipper | @danshipper | 64 条 | [查看报告](./ai_research_reports/x_danshipper.md) |
| Nan Yu | @thenanyu | 63 条 | [查看报告](./ai_research_reports/x_thenanyu.md) |
| Swyx | @swyx | 59 条 | [查看报告](./ai_research_reports/x_swyx.md) |
| Peter Steinberger | @steipete | 52 条 | [查看报告](./ai_research_reports/x_steipete.md) |
| Zara Zhang | @zarazhangrui | 44 条 | [查看报告](./ai_research_reports/x_zarazhangrui.md) |
| Thariq | @trq212 | 43 条 | [查看报告](./ai_research_reports/x_trq212.md) |
| Nikunj Kothari | @nikunj | 43 条 | [查看报告](./ai_research_reports/x_nikunj.md) |
| Amjad Masad | @amasad | 39 条 | [查看报告](./ai_research_reports/x_amasad.md) |
| Aaron Levie | @levie | 28 条 | [查看报告](./ai_research_reports/x_levie.md) |
| Guillermo Rauch | @rauchg | 25 条 | [查看报告](./ai_research_reports/x_rauchg.md) |
| Aditya Agarwal | @adityaag | 22 条 | [查看报告](./ai_research_reports/x_adityaag.md) |
| Andrej Karpathy | @karpathy | 18 条 | [查看报告](./ai_research_reports/x_karpathy.md) |
| Claude | @claudeai | 17 条 | [查看报告](./ai_research_reports/x_claudeai.md) |
| Matt Turck | @mattturck | 17 条 | [查看报告](./ai_research_reports/x_mattturck.md) |
| Josh Woodward | @joshwoodward | 14 条 | [查看报告](./ai_research_reports/x_joshwoodward.md) |
| Ryo Lu | @ryolu_ | 13 条 | [查看报告](./ai_research_reports/x_ryolu_.md) |
| Sam Altman | @sama | 12 条 | [查看报告](./ai_research_reports/x_sama.md) |
| Cat Wu | @_catwu | 10 条 | [查看报告](./ai_research_reports/x__catwu.md) |
| Kevin Weil | @kevinweil | 8 条 | [查看报告](./ai_research_reports/x_kevinweil.md) |
| Alex Albert | @alexalbert__ | 5 条 | [查看报告](./ai_research_reports/x_alexalbert__.md) |
| Lenny Rachitsky | @lennysan | 4 条 | [查看报告](./ai_research_reports/x_lennysan.md) |
| Amanda Askell | @AmandaAskell | 3 条 | [查看报告](./ai_research_reports/x_amandaaskell.md) |
| Google Labs | @GoogleLabs | 2 条 | [查看报告](./ai_research_reports/x_googlelabs.md) |
| Steven Johnson | @stevenbjohnson | 1 条 | [查看报告](./ai_research_reports/x_stevenbjohnson.md) |

## 🛠️ 如何更新数据

如果你想本地运行并更新报告库：

1. **环境准备**:
   ```bash
   cd follow-builders/scripts
   npm install
   ```

2. **更新原始数据**:
   ```bash
   node generate-feed.js --blogs-only 
   ```

3. **同步报告库**:
   ```bash
   node extract_history.js
   node generate_multi_reports.js
   ```

## 📄 许可证

MIT

---
*Created and maintained by [liqidong](https://github.com/liqidong)*
