# 红楼梦讲解视频 · 汇报网页

作业一成品。八个栏目：**选题 / 策划 / 文案 / 素材 / 方法 / 工具 / 视频 / 总结**

## 直接打开

双击 `index.html` 即可，无需服务器。

## 部署到 GitHub Pages

```bash
cd web
git init && git add . && git commit -m "Assignment1"
git branch -M main
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

然后在仓库 Settings → Pages → Source 选 `main` / `root`。
访问 `https://<用户名>.github.io/<仓库名>/`

## 目录

```
web/
├── index.html              单文件页面（45KB，无外部依赖）
└── assets/
    ├── img/     7 张配图 JPG（1536×1024，共 2.6MB）
    ├── audio/   7 段配音 mp3（共 2.6MB，可逐段试听）
    ├── video/   成片 hlm.mp4（32MB，含烧录字幕）
    ├── subtitles.srt
    └── *.md / storyboard.json   原始文档，供查阅
```

## 页面交互

| 功能 | 说明 |
|---|---|
| 顶部导航 | 八个栏目的吸顶跳转 |
| 文案区标签页 | 「全片 / 开场钩子 / 冲突 / 高潮 / 点题 / 留白」六种视角切换 |
| 音频 | 文案区每段下方可单独试听配音 |
| 配图 | 点击任意配图全屏放大 |
| 视频 | 内嵌播放器，可下载；下方 7 个场次卡片点击跳转对应时间点 |
| 滚动 | 各区块进入视口时淡入上浮 |

## 设计

- 水墨宣纸质感的浅色主题，配色取自成片画风（宣纸米白 / 墨褐 / 朱砂红）
- 字体：标题与正文用宋体系（`Songti SC` / `Noto Serif SC`），数据用等宽体
- 全站暗色纹理叠加，纯 CSS 实现，无图片依赖
- 响应式：≥1080px 宽屏三栏，窄屏自动降为单栏
- 无框架、无 CDN 依赖，离线可用

## 注意

- `assets/video/hlm.mp4` 有 32MB。若托管平台有单文件大小限制（GitHub 建议 <100MB，通常没问题），可改用外部链接或压缩到 720P。
- 视频为**横版 16:9**。若要发抖音/视频号，需另做竖版素材，**不要直接裁切**。