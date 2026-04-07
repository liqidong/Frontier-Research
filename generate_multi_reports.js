import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const DATA_PATH = 'all_historical_data.json';
const OUTPUT_DIR = 'ai_research_reports';

async function generateReports() {
  const rawData = await readFile(DATA_PATH, 'utf-8');
  const data = JSON.parse(rawData);

  // Grouping by source
  const xByHandle = {};
  const podcastsByName = {};

  // Group tweets by handle
  for (const tweet of data.x) {
    const handle = tweet.handle.toLowerCase();
    if (!xByHandle[handle]) {
      xByHandle[handle] = {
        author: tweet.author,
        handle: tweet.handle,
        tweets: []
      };
    }
    xByHandle[handle].tweets.push(tweet);
  }

  // Group podcasts by name
  for (const podcast of data.podcasts) {
    const name = podcast.name;
    if (!podcastsByName[name]) {
      podcastsByName[name] = {
        name: podcast.name,
        episodes: []
      };
    }
    podcastsByName[name].episodes.push(podcast);
  }

  // Helper function to format dates
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Unknown Date';
    return new Date(dateStr).toLocaleString('zh-CN', { timeZone: 'UTC' });
  };

  // Generate X (Twitter) reports
  const xFiles = [];
  for (const [handle, group] of Object.entries(xByHandle)) {
    const filename = `x_${handle}.md`;
    let content = `# AI Builder: ${group.author} (@${group.handle})\n\n`;
    content += `> 共收集 ${group.tweets.length} 条动态内容。\n\n---\n\n`;

    for (const tweet of group.tweets) {
      content += `### [${formatDate(tweet.createdAt)}](${tweet.url})\n\n`;
      content += `${tweet.text}\n\n`;
      content += `📈 **互动**: ❤️ ${tweet.likes} | 🔁 ${tweet.retweets} | 💬 ${tweet.replies}\n\n---\n\n`;
    }

    await writeFile(join(OUTPUT_DIR, filename), content);
    xFiles.push({ name: group.author, handle: group.handle, count: group.tweets.length, filename });
  }

  // Generate Podcast reports
  const podcastFiles = [];
  for (const [name, group] of Object.entries(podcastsByName)) {
    // Sanitize filename for podcasts
    const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filename = `podcast_${safeName}.md`;
    let content = `# AI Podcast: ${group.name}\n\n`;
    content += `> 共收集 ${group.episodes.length} 期节目摘要。\n\n---\n\n`;

    for (const episode of group.episodes) {
      content += `## ${episode.title}\n\n`;
      content += `- **发布时间**: ${formatDate(episode.publishedAt)}\n`;
      content += `- **原始链接**: [点击查看](${episode.url})\n\n`;
      content += `### 📜 内容摘要与转录\n\n`;
      content += `${episode.transcript}\n\n`;
      content += `---\n\n`;
    }

    await writeFile(join(OUTPUT_DIR, filename), content);
    podcastFiles.push({ name: group.name, count: group.episodes.length, filename });
  }

  // Generate Navigation Index
  let indexContent = `# AI 行业动态研究库 (历史汇总报告)\n\n`;
  indexContent += `> 生成时间: ${new Date().toLocaleString('zh-CN')}\n`;
  indexContent += `> 数据源: Follow Builders (X, Podcasts)\n\n---\n\n`;

  indexContent += `## 🎙️ AI 播客 (Podcasts)\n\n`;
  indexContent += `| 节目名称 | 内容数量 | 链接报告 |\n`;
  indexContent += `| :--- | :--- | :--- |\n`;
  for (const p of podcastFiles.sort((a,b) => b.count - a.count)) {
    indexContent += `| ${p.name} | ${p.count} 期 | [查看报告](./${p.filename}) |\n`;
  }

  indexContent += `\n## 🐦 AI 构建者 (X/Twitter)\n\n`;
  indexContent += `| 构建者姓名 | 账号 | 内容数量 | 链接报告 |\n`;
  indexContent += `| :--- | :--- | :--- | :--- |\n`;
  for (const x of xFiles.sort((a,b) => b.count - a.count)) {
    indexContent += `| ${x.name} | @${x.handle} | ${x.count} 条 | [查看报告](./${x.filename}) |\n`;
  }

  await writeFile(join(OUTPUT_DIR, 'index.md'), indexContent);
  console.log(`Successfully generated ${xFiles.length + podcastFiles.length} reports plus an index.`);
}

generateReports().catch(err => {
  console.error('Report generation failed:', err);
  process.exit(1);
});
