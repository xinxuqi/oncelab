/* ============================================================
   国际化字典（zh / en）
   ============================================================ */
const I18N = {
  zh: {
    title: "Once Lab-我们让app产品体验轻松愉悦",
    brandSub: "",
    navHome: "首页",
    navProducts: "产品",
    navAbout: "关于",
    homeEyebrow: "独立 App 产品体验专家",
    homeLead: "我是一位独立的 App 产品用户体验专家，与 AI 紧密协作，从体验设计到工程实现，打造 macOS 与网页产品，我希望尽可能的减少在日常工作与学习中的产品使用摩擦，让产品使用的过程更加轻松愉悦。我们会逐步将这段时间共同完成的所有作品发布在Once Lab。",
    btnBrowse: "浏览全部产品 →",
    btnAbout: "了解我",
    statProducts: "合作产品",
    statMac: "macOS 应用",
    statWeb: "网页项目",
    statStart: "起始月份",
    featuredEyebrow: "精选",
    featuredTitle: "近期作品",
    productsEyebrow: "产品",
    productsTitle: "全部产品",
    productsLead: "以下为我与 AI 协作开发的产品，点击任意卡片查看功能介绍与版本迭代。已发布的产品可获取下载，开发中产品暂未开放下载。",
    filterAll: "全部",
    filterMac: "macOS",
    filterWeb: "网页",
    detailBack: "← 返回产品列表",
    detailFuncTitle: "功能介绍",
    detailInfoTitle: "基本信息",
    detailVerTitle: "版本迭代",
    kvType: "类型",
    kvVersion: "当前版本",
    kvStatus: "状态",
    kvStart: "开始时间",
    kvEnd: "最后版本",
    statusDev: "开发中",
    statusPub: "已发布",
    devNoDownload: "开发中 · 暂未提供下载",
    reqMac: "macOS 12 或更新版本 · 兼容 Apple 芯片与 Intel 处理器（通用架构）",
    reqWeb: "支持主流现代浏览器（Chrome / Safari / Edge）",
    aboutEyebrow: "关于",
    aboutTitle: "我是 Sean Xin",
    aboutLead: "一位独立的 App 产品用户体验专家。我负责从用户研究、交互与视觉设计，到产品定义的全过程，并与 AI 协作把想法落地为真正能用的产品。",
    aboutCards: [
      { title: "我的工作方式", body: "体验先行：先想清楚「为谁解决什么问题」，再谈实现。与 AI 的协作让我能把设计稿快速变成可运行的产品，缩短从概念到验证的距离——每个产品都经历需求定义、原型、实现、迭代的闭环。" },
      { title: "技术栈", body: "macOS 原生（Swift / SwiftUI / AppKit），以及纯前端网页（HTML / CSS / 原生 JS）。所有 macOS 应用均产出 Universal Binary，可在 Intel 与 Apple 芯片上原生运行。" },
      { title: "设计理念", body: "克制、清晰、顺手。菜单栏常驻、一键呼出、本地优先——让工具在需要时刚好出现，不需要时完全不打扰。" },
      { title: "联系", body: "邮箱：xinxuqi@126.com。所有产品均由 Sean Xin 与 AI 协作设计与开发。" }
    ],
    footerNote: "本站点所有产品均由 Sean Xin 与 AI 协作设计与开发。"
  },
  en: {
    title: "Once Lab — We make app experiences light and pleasant",
    brandSub: "",
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About",
    homeEyebrow: "Independent App Product Experience Specialist",
    homeLead: "I am an independent App UX specialist, working closely with AI—from experience design to engineering—to build macOS and web products. I want to reduce the friction of using products in daily work and study, and make the experience lighter and more pleasant. We will gradually publish all the works we have built together on Once Lab.",
    btnBrowse: "Browse all products →",
    btnAbout: "About me",
    statProducts: "Products",
    statMac: "macOS apps",
    statWeb: "Web projects",
    statStart: "Since",
    featuredEyebrow: "Featured",
    featuredTitle: "Recent work",
    productsEyebrow: "Products",
    productsTitle: "All products",
    productsLead: "Products I have built with AI. Tap any card to see features and changelog. Released products can be downloaded; those in development are not yet available.",
    filterAll: "All",
    filterMac: "macOS",
    filterWeb: "Web",
    detailBack: "← Back to products",
    detailFuncTitle: "Features",
    detailInfoTitle: "Overview",
    detailVerTitle: "Changelog",
    kvType: "Type",
    kvVersion: "Current version",
    kvStatus: "Status",
    kvStart: "Started",
    kvEnd: "Latest",
    statusDev: "In development",
    statusPub: "Released",
    devNoDownload: "In development · download not available yet",
    reqMac: "macOS 12 or later · Universal build for Apple silicon and Intel",
    reqWeb: "Modern browsers (Chrome / Safari / Edge)",
    aboutEyebrow: "About",
    aboutTitle: "About Sean Xin",
    aboutLead: "An independent App product experience specialist. I own the full process from user research, interaction and visual design, to product definition—and work with AI to turn ideas into products people can actually use.",
    aboutCards: [
      { title: "How I work", body: "Experience first: clarify who and what problem before implementation. Working with AI lets me turn designs into runnable products fast, shortening the path from concept to validation—every product goes through a loop of definition, prototype, build, and iteration." },
      { title: "Tech stack", body: "Native macOS (Swift / SwiftUI / AppKit) and pure-frontend web (HTML / CSS / vanilla JS). Every macOS app ships as a Universal Binary that runs natively on both Intel and Apple silicon." },
      { title: "Design principles", body: "Restrained, clear, handy. Menu-bar resident, one-key summon, local-first—tools appear exactly when needed and stay out of the way when not." },
      { title: "Contact", body: "Email: xinxuqi@126.com. All products are designed and developed by Sean Xin with AI." }
    ],
    footerNote: "All products on this site are designed and developed by Sean Xin with AI."
  }
};

/* ============================================================
   产品数据（中英双语；requirement 按类型从 I18N 取）
   字段：type "macOS" | "web"；version 双语；zh / en 各含 tagline / overview / features / versions
   ============================================================ */
const PRODUCTS = [
  {
    slug: "slidescribe", name: "SlideScribe", type: "macOS", icon: "slidescribe.png",
    version: { zh: "v1.0.0", en: "v1.0.0" },
    start: "2026-05-21", end: "2026-05-22", status: "published", download: "",
    zh: {
      tagline: "PPTX / DOCX / PDF 一键转 Markdown",
      overview: "SlideScribe 把演示文稿、Word 文档与 PDF 一键转换为结构化的 Markdown 文本。它解析文档的标题层级、有序 / 无序列表、表格与图片引用，尽量保留原结构与阅读顺序，转换结果可直接进入笔记或写作工具继续加工。全部转换在本地完成，文档不会上传到任何服务器，适合处理含敏感或私有内容的材料。",
      features: ["拖拽文件即转，无需打开应用窗口", "支持 PPTX / DOCX / PDF 三种输入格式", "保留标题层级、列表、表格与图片引用", "转换后可一键在默认 Markdown 编辑器打开", "本地转换，文档不出本机", "Universal Binary，Intel 与 Apple 芯片原生运行"],
      versions: [
        { v: "0.9.0", d: "2026-05-21", n: "内测版：PPTX 转 Markdown，基础标题与列表识别。" },
        { v: "0.9.5", d: "2026-05-21", n: "新增 DOCX 支持；修复中文标点丢失问题。" },
        { v: "1.0.0", d: "2026-05-22", n: "正式发布：稳定标题层级与图片引用，拖拽即转，可指定外部编辑器打开。" }
      ]
    },
    en: {
      tagline: "One-click PPTX / DOCX / PDF to Markdown",
      overview: "SlideScribe converts presentations, Word documents and PDFs into structured Markdown in one step. It parses heading levels, ordered/unordered lists, tables and image references, preserving the original structure and reading order as much as possible. The result drops straight into your note-taking or writing tool. Everything runs locally—your documents are never uploaded—making it safe for sensitive or private material.",
      features: ["Drag a file to convert—no app window needed", "PPTX / DOCX / PDF input supported", "Keeps heading levels, lists, tables and image refs", "Open the result in your default Markdown editor with one click", "Local conversion; documents never leave your Mac", "Universal Binary, native on Intel and Apple silicon"],
      versions: [
        { v: "0.9.0", d: "2026-05-21", n: "Beta: PPTX to Markdown with basic heading and list detection." },
        { v: "0.9.5", d: "2026-05-21", n: "Added DOCX support; fixed missing Chinese punctuation." },
        { v: "1.0.0", d: "2026-05-22", n: "Release: stable heading levels and image references, drag-to-convert, open with external editor." }
      ]
    }
  },
  {
    slug: "quicknote", name: "QuickNote", type: "macOS", icon: "quicknote.png",
    version: { zh: "v1.0", en: "v1.0" },
    start: "2026-05-22", end: "2026-05-25", status: "published", download: "",
    zh: {
      tagline: "菜单栏极速新建文本 / Markdown",
      overview: "QuickNote 是一个常驻菜单栏的轻量笔记入口。任何时候想记一句话、列个要点或起草一篇 Markdown，都可以在不离开当前窗口的情况下一键新建文档并直接写入指定目录。它把「记录一个想法」的阻力降到最低，所有内容以纯文本 / Markdown 落盘，方便后续在任何编辑器或笔记工具中继续加工。无账户、无云端同步，本地优先。",
      features: ["菜单栏常驻，全局快捷键呼出", "支持 .txt 与 .md 两种格式", "可自定义默认保存目录与模板", "极速新建，无需选择应用", "本地优先，无云端依赖，隐私可控"],
      versions: [
        { v: "0.8.0", d: "2026-05-22", n: "内测：菜单栏图标 + 新建 .txt 基础流程。" },
        { v: "0.9.0", d: "2026-05-24", n: "新增 Markdown 格式与默认保存目录设置；修复首次启动目录权限提示。" },
        { v: "1.0", d: "2026-05-25", n: "正式版：自定义模板、全局快捷键，稳定性优化。" }
      ]
    },
    en: {
      tagline: "Menu-bar quick new text / Markdown",
      overview: "QuickNote is a lightweight note entry that lives in your menu bar. Whenever you want to jot a line, list a few points, or draft some Markdown, you can create a file and write it to a chosen folder without leaving your current window. It lowers the friction of capturing an idea to almost nothing; everything lands as plain text or Markdown for further editing anywhere. No account, no cloud sync—local first.",
      features: ["Resident in menu bar, summoned by global shortcut", "Supports .txt and .md", "Custom default save folder and template", "Instant new file—no app picker", "Local-first, no cloud dependency, privacy in your hands"],
      versions: [
        { v: "0.8.0", d: "2026-05-22", n: "Beta: menu-bar icon + basic .txt creation." },
        { v: "0.9.0", d: "2026-05-24", n: "Added Markdown format and default folder setting; fixed first-launch permission prompt." },
        { v: "1.0", d: "2026-05-25", n: "Release: custom templates, global shortcut, stability improvements." }
      ]
    }
  },
  {
    slug: "snapmark", name: "SnapMark", type: "macOS", icon: "snapmark.png",
    version: { zh: "v1.0.0", en: "v1.0.0" },
    start: "2026-05-25", end: "2026-05-26", status: "published", download: "",
    zh: {
      tagline: "本地收藏夹，把网页变成视觉书签",
      overview: "SnapMark 是一个菜单栏本地收藏夹。你可以截图收藏，或把网址拖进去，由内嵌的网页视图抓取页面主图、favicon 与文字摘要，建立「图片 → URL」的视觉关联，让收藏比一串纯链接更好认、更好找。所有数据保存在本机，不上传、不追踪，隐私优先。适合收集设计灵感、文章与参考资料。",
      features: ["截图即收藏，或拖入网址自动抓取", "内嵌 WebView 抓取主图 / favicon / 摘要", "菜单栏常驻，一键呼出浏览", "本地存储，隐私优先，无账户", "支持分组与关键词搜索"],
      versions: [
        { v: "0.9.0", d: "2026-05-25", n: "内测：截图收藏 + 本地缩略图展示。" },
        { v: "0.9.5", d: "2026-05-26", n: "新增拖入 URL 自动抓取主图与 favicon；修复部分页面抓取超时。" },
        { v: "1.0.0", d: "2026-05-26", n: "正式版：分组与搜索，稳定性与抓取成功率优化。" }
      ]
    },
    en: {
      tagline: "Local collection that turns pages into visual bookmarks",
      overview: "SnapMark is a menu-bar local collection. Save a screenshot, or drop in a URL—its built-in web view fetches the page's hero image, favicon and text summary, building a visual link between image and URL so items are easier to recognize and find than a list of plain links. All data stays on your machine: nothing uploaded, nothing tracked, privacy first. Great for gathering design inspiration, articles and references.",
      features: ["Save a screenshot, or drop a URL to auto-fetch", "Built-in WebView grabs hero image / favicon / summary", "Resident in menu bar, one-key to browse", "Local storage, privacy first, no account", "Groups and keyword search"],
      versions: [
        { v: "0.9.0", d: "2026-05-25", n: "Beta: screenshot collection + local thumbnails." },
        { v: "0.9.5", d: "2026-05-26", n: "Added drag-in URL auto-fetch of hero image and favicon; fixed timeouts on some pages." },
        { v: "1.0.0", d: "2026-05-26", n: "Release: groups and search, improved stability and fetch success." }
      ]
    }
  },
  {
    slug: "bilingualreader", name: "BilingualReader", type: "macOS", icon: "bilingualreader.png",
    version: { zh: "v0.4.1", en: "v0.4.1" },
    start: "2026-06-02", end: "2026-06-03", status: "published", download: "",
    zh: {
      tagline: "中英文双栏对照阅读器",
      overview: "BilingualReader 用 WebKit + marked.js 渲染 Markdown 与纯文本，把原文与译文并排对照呈现，适合精读技术文档、论文与外语文档。你可以在一侧放原文、一侧放自己的译文或参考翻译，滚动时两侧保持同步，专注阅读不被打断。适合语言学习者、译者与需要啃英文资料的工程师。",
      features: ["双栏对照，原文 / 译文并排", "Markdown 实时渲染（marked.js）", "两侧滚动同步", "本地文件打开，支持 .md / .txt", "可切换对照 / 单栏模式"],
      versions: [
        { v: "0.3.1", d: "2026-06-02", n: "初始可用版：双栏布局与基础 Markdown 渲染。" },
        { v: "0.3.2", d: "2026-06-02", n: "修复长文档滚动不同步；优化中文字体回退。" },
        { v: "0.3.5", d: "2026-06-02", n: "新增单栏 / 对照模式切换；改进代码块高亮。" },
        { v: "0.4.0", d: "2026-06-03", n: "新增拖入文件直接打开；修复特殊字符导致的渲染崩溃。" },
        { v: "0.4.1", d: "2026-06-03", n: "当前版本：性能优化，大文件加载更流畅。" }
      ]
    },
    en: {
      tagline: "Side-by-side bilingual reader",
      overview: "BilingualReader renders Markdown and plain text with WebKit + marked.js, showing source and translation side by side—ideal for close reading of technical docs, papers and foreign-language texts. Put the original on one side and your own translation or a reference on the other; scrolling stays in sync so you can focus without losing your place. Useful for language learners, translators and engineers working through English material.",
      features: ["Side-by-side source / translation", "Live Markdown rendering (marked.js)", "Synced scrolling on both sides", "Open local files, .md / .txt", "Toggle compare / single-column mode"],
      versions: [
        { v: "0.3.1", d: "2026-06-02", n: "First usable build: two-column layout and basic Markdown." },
        { v: "0.3.2", d: "2026-06-02", n: "Fixed scroll desync on long docs; improved CJK font fallback." },
        { v: "0.3.5", d: "2026-06-02", n: "Added single / compare mode toggle; better code highlighting." },
        { v: "0.4.0", d: "2026-06-03", n: "Open files by dropping in; fixed render crash on special chars." },
        { v: "0.4.1", d: "2026-06-03", n: "Current: performance tuning, smoother loading of large files." }
      ]
    }
  },
  {
    slug: "pictools", name: "PicTools", type: "macOS", icon: "pictools.png",
    version: { zh: "v0.5.9", en: "v0.5.9" },
    start: "2026-06-09", end: "2026-06-10", status: "published", download: "",
    zh: {
      tagline: "图片批处理工具箱",
      overview: "PicTools 是一个常驻菜单栏的图片批处理工具箱，覆盖日常最高频的图片操作：批量缩放与压缩、格式转换（PNG / JPEG / WebP 等）、裁剪、加水印、重命名。它面向需要反复处理截图、素材与导出图的场景，把一系列繁琐的手动操作收敛成一个清晰的批量流程，处理在本地完成，原图可选择保留。",
      features: ["批量缩放 / 压缩，控制体积", "多种格式互转（PNG / JPEG / WebP）", "裁剪与加水印", "批量重命名（含日期 / 序号规则）", "本地处理，可保留原图", "Universal Binary 双架构运行"],
      versions: [
        { v: "0.3.0", d: "2026-06-09", n: "内测：批量缩放与格式转换。" },
        { v: "0.4.0", d: "2026-06-09", n: "新增裁剪与水印；修复大图内存占用过高。" },
        { v: "0.5.0", d: "2026-06-10", n: "新增批量重命名规则；压缩质量可调。" },
        { v: "0.5.9", d: "2026-06-10", n: "当前版本：修复部分 WebP 导出异常，提升批量稳定性。" }
      ]
    },
    en: {
      tagline: "Batch image toolbox",
      overview: "PicTools is a menu-bar batch image toolbox covering the most common daily operations: bulk resize and compress, format conversion (PNG / JPEG / WebP and more), crop, watermark and rename. It is built for anyone who repeatedly processes screenshots, assets and exports, turning a string of tedious manual steps into one clear batch flow. Processing is local, and originals can be kept.",
      features: ["Batch resize / compress to control size", "Convert between formats (PNG / JPEG / WebP)", "Crop and watermark", "Batch rename (date / index rules)", "Local processing, originals can be kept", "Universal Binary, dual-architecture"],
      versions: [
        { v: "0.3.0", d: "2026-06-09", n: "Beta: batch resize and format conversion." },
        { v: "0.4.0", d: "2026-06-09", n: "Added crop and watermark; fixed high memory on large images." },
        { v: "0.5.0", d: "2026-06-10", n: "Added batch rename rules; adjustable compression quality." },
        { v: "0.5.9", d: "2026-06-10", n: "Current: fixed some WebP export glitches, better batch stability." }
      ]
    }
  },
  {
    slug: "quickpick", name: "QuickPick", type: "macOS", icon: "quickpick.png",
    version: { zh: "v1.3.6", en: "v1.3.6" },
    start: "2026-07-21", end: "2026-07-22", status: "published", download: "",
    zh: {
      tagline: "菜单栏收藏夹快速选择器",
      overview: "QuickPick 把常用链接、文件与代码片段按分组网格组织在菜单栏，一键呼出、点击即打开。它把高频入口固定在手边，支持分组、搜索与自定义图标，本地优先、启动极快，让常用内容随手可达。",
      features: ["分组网格管理收藏项", "菜单栏一键呼出，⌘ 快捷键直达", "点击即打开链接 / 文件", "支持搜索与自定义图标", "本地优先，无云端账户", "Universal Binary 双架构运行"],
      versions: [
        { v: "1.0.0", d: "2026-07-21", n: "首发：菜单栏分组网格 + 点击打开。" },
        { v: "1.2.0", d: "2026-07-22", n: "新增搜索与自定义图标；修复高分屏下图标模糊。" },
        { v: "1.3.0", d: "2026-07-22", n: "新增键盘导航与置顶常用项；优化呼出动画。" },
        { v: "1.3.6", d: "2026-07-22", n: "当前版本（build 16）：修复大量条目下的滚动性能，稳定性提升。" }
      ]
    },
    en: {
      tagline: "Menu-bar quick picker for your collection",
      overview: "QuickPick organizes your frequent links, files and code snippets into grouped grids in the menu bar—summon with one key, click to open. It keeps high-frequency entries within reach, with groups, search and custom icons. Local-first and instant to launch, so the things you use often are always at your fingertips.",
      features: ["Grouped grids for your items", "One-key summon from menu bar, ⌘ shortcut", "Click to open link / file", "Search and custom icons", "Local-first, no cloud account", "Universal Binary, dual-architecture"],
      versions: [
        { v: "1.0.0", d: "2026-07-21", n: "First release: menu-bar grouped grid + click to open." },
        { v: "1.2.0", d: "2026-07-22", n: "Added search and custom icons; fixed blurry icons on retina." },
        { v: "1.3.0", d: "2026-07-22", n: "Added keyboard navigation and pinning; smoother summon animation." },
        { v: "1.3.6", d: "2026-07-22", n: "Current (build 16): fixed scroll performance with many items, more stable." }
      ]
    }
  },
  {
    slug: "tenwords", name: "TenWords", type: "macOS", icon: "tenwords.png",
    version: { zh: "v1.1.1", en: "v1.1.1" },
    start: "2026-07-22", end: "2026-07-23", status: "published", download: "",
    zh: {
      tagline: "菜单栏背单词 / 生词本",
      overview: "TenWords 是一个常驻菜单栏的轻量背单词工具。你可以随时添加单词、查看词典释义、点击发音朗读，还能用截屏取词把屏幕上遇到的生词一键收入生词本。它用连续打卡（🔥）鼓励每天积累一点点，适合在工作和阅读间隙利用碎片时间记词，不追求海量词库，而追求「遇到就记下、每天看一眼」的轻习惯。",
      features: ["词典查询与释义展示", "点击发音朗读（系统语音）", "截屏取词，快速入册", "连续打卡 🔥 激励", "生词本分组管理", "Universal Binary 双架构运行"],
      versions: [
        { v: "1.0.0", d: "2026-07-22", n: "首发：添加单词、词典查询、发音。" },
        { v: "1.1.0", d: "2026-07-23", n: "新增截屏取词与生词本分组；修复发音在某些机型静音的问题。" },
        { v: "1.1.1", d: "2026-07-23", n: "当前版本（build 3）：打卡数据持久化修复，UI 细节打磨。" }
      ]
    },
    en: {
      tagline: "Menu-bar vocabulary & word book",
      overview: "TenWords is a lightweight menu-bar vocabulary tool. Add words anytime, view dictionary definitions, tap to hear pronunciation, and capture new words from the screen with snap-to-capture straight into your word book. A daily streak (🔥) encourages a little progress each day—built for picking up words in the gaps of work and reading, favoring a light habit of \"spot it, save it, glance daily\" over a huge library.",
      features: ["Dictionary lookup with definitions", "Tap to hear pronunciation (system voice)", "Snap-to-capture for quick saving", "Daily streak 🔥 motivation", "Grouped word book", "Universal Binary, dual-architecture"],
      versions: [
        { v: "1.0.0", d: "2026-07-22", n: "First release: add words, dictionary, pronunciation." },
        { v: "1.1.0", d: "2026-07-23", n: "Added snap-to-capture and word-book groups; fixed silent pronunciation on some models." },
        { v: "1.1.1", d: "2026-07-23", n: "Current (build 3): streak persistence fix, UI polish." }
      ]
    }
  },
  {
    slug: "quickpaste", name: "QuickPaste", type: "macOS", icon: "quickpaste.png",
    version: { zh: "v0.4.0", en: "v0.4.0" },
    start: "2026-07-24", end: "2026-07-27", status: "published", download: "",
    zh: {
      tagline: "菜单栏快捷粘贴内容库",
      overview: "QuickPaste 是一个手工维护的常用文字、图片与 RTF 内容库。用 ⌘⇧V 呼出浮动面板，点击条目即「粘贴并匹配样式」，把常用话术、地址、代码片段、图片顺手贴到当前光标处。它解决的是「同一段文字每天要手打好几遍」的重复劳动，内容存在本机，分组与搜索随手可查。",
      features: ["⌘⇧V 呼出浮动面板", "文本 / 图片 / RTF 内容库", "「粘贴并匹配样式」一键贴入", "分组与搜索", "本地存储，隐私可控", "Universal Binary 双架构运行"],
      versions: [
        { v: "0.1.0", d: "2026-07-24", n: "内测：浮动面板 + 文本条目粘贴。" },
        { v: "0.2.0", d: "2026-07-25", n: "新增图片 / RTF 支持；修复面板失焦问题。" },
        { v: "0.3.0", d: "2026-07-26", n: "新增分组与搜索；支持「粘贴并匹配样式」。" },
        { v: "0.4.0", d: "2026-07-27", n: "当前版本：多条目批量管理，启动与呼出性能优化。" }
      ]
    },
    en: {
      tagline: "Menu-bar snippet paste library",
      overview: "QuickPaste is a hand-curated library of frequently used text, images and RTF. Press ⌘⇧V to summon a floating panel; click an item to paste it and match the style, dropping common phrases, addresses, code snippets or images right at your cursor. It removes the repeated labor of retyping the same text every day, with everything stored locally and findable via groups and search.",
      features: ["⌘⇧V summons a floating panel", "Library of text / images / RTF", "Paste and Match Style with one click", "Groups and search", "Local storage, privacy in your hands", "Universal Binary, dual-architecture"],
      versions: [
        { v: "0.1.0", d: "2026-07-24", n: "Beta: floating panel + text item paste." },
        { v: "0.2.0", d: "2026-07-25", n: "Added image / RTF support; fixed panel losing focus." },
        { v: "0.3.0", d: "2026-07-26", n: "Added groups and search; Paste and Match Style." },
        { v: "0.4.0", d: "2026-07-27", n: "Current: batch management of items, faster launch and summon." }
      ]
    }
  },
  {
    slug: "wordmemo", name: "WordMemo", type: "web", icon: "wordmemo.png",
    version: { zh: "单文件 PWA", en: "Single-file PWA" },
    start: "2026-07-07", end: "2026-07-08", status: "published", download: "",
    zh: {
      tagline: "单词卡 / 词包学习（可离线）",
      overview: "WordMemo 是一个纯前端的单词卡学习页，内置多个词包（含释义与例句），带 service worker，可安装到手机主屏离线使用。它把背单词这件事做得极简：打开即学，左右滑动或按键翻卡，标记熟悉 / 生疏，进度保存在本地。适合在手机上利用碎片时间复习。",
      features: ["内置多个词包（释义 + 例句）", "卡片式学习，标记熟悉 / 生疏", "可安装到主屏（PWA）", "离线可用，进度本地保存", "纯前端，单文件可分享", "支持键盘 / 触控操作"],
      versions: [
        { v: "1.0", d: "2026-07-07", n: "初版：单文件 HTML + 内置词包，卡片式学习。" },
        { v: "1.1", d: "2026-07-08", n: "当前版本：新增 service worker 可安装到主屏离线使用；进度本地保存。" }
      ]
    },
    en: {
      tagline: "Word cards & packs (offline-ready)",
      overview: "WordMemo is a pure front-end flashcard page with built-in packs (definitions and example sentences) and a service worker, so it can be installed to your phone's home screen and used offline. It keeps studying deliberately simple: open and learn, swipe or use keys to flip cards, mark familiar or unfamiliar, and progress is saved locally. Great for quick review in spare moments on your phone.",
      features: ["Built-in packs (definitions + examples)", "Card-based study, mark familiar / unfamiliar", "Installable to home screen (PWA)", "Works offline, progress saved locally", "Pure front-end, shareable as a single file", "Keyboard and touch supported"],
      versions: [
        { v: "1.0", d: "2026-07-07", n: "Initial: single-file HTML + built-in packs, card study." },
        { v: "1.1", d: "2026-07-08", n: "Current: service worker to install and use offline; progress saved locally." }
      ]
    }
  },
  {
    slug: "hollow-knight-match", name: "Hollow Knight Match", type: "web", icon: "hollow-knight-match.svg",
    version: { zh: "单文件网页", en: "Single-file web" },
    start: "2026-07-24", end: "2026-07-24", status: "published", download: "",
    zh: {
      tagline: "空洞骑士 · 消消乐",
      overview: "Hollow Knight Match 是以《空洞骑士》为主题的纯前端配对 / 消除小游戏，单文件即可运行，无需安装、无需联网。它用游戏中熟悉的角色与场景美术做成配对卡牌，适合在碎片时间放松一下。整个游戏逻辑与素材打包在一个 HTML 文件里，打开即玩，也方便分享。",
      features: ["空洞骑士主题美术卡牌", "配对 / 消除玩法", "单文件，打开即玩", "纯前端，无需联网", "轻量，碎片时间放松"],
      versions: [
        { v: "1.0", d: "2026-07-24", n: "当前版本：完整配对玩法与主题美术，单文件发布。" }
      ]
    },
    en: {
      tagline: "Hollow Knight · match game",
      overview: "Hollow Knight Match is a pure front-end matching game themed on Hollow Knight. It runs as a single file—no install, no internet needed. Familiar characters and scenes from the game become matching cards, perfect for a quick relax in spare moments. The whole game logic and art are packed into one HTML file: open and play, easy to share.",
      features: ["Hollow Knight themed cards", "Match / clear gameplay", "Single file, open and play", "Pure front-end, no internet needed", "Light, for quick breaks"],
      versions: [
        { v: "1.0", d: "2026-07-24", n: "Current: full matching gameplay and themed art, single-file release." }
      ]
    }
  }
];

/* ============================================================
   语言状态
   ============================================================ */
let lang = localStorage.getItem("siteLang") || "zh";
function t(key) { return (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : (I18N.zh[key] != null ? I18N.zh[key] : key); }
function pt(p, key) { return (p[lang] && p[lang][key] != null) ? p[lang][key] : (p.zh[key] != null ? p.zh[key] : ""); }
function pver(p) { return (p.version && p.version[lang]) ? p.version[lang] : p.version.zh; }

const app = document.getElementById("app");
const navLinks = document.querySelectorAll(".nav-links a");
const brandLink = document.querySelector(".brand");

function setLang(l) {
  lang = l;
  localStorage.setItem("siteLang", l);
  document.documentElement.lang = (l === "zh") ? "zh-CN" : "en";
  document.title = t("title");
  applyStaticI18n();
  updateLangUI();
  router();
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (I18N[lang][k] != null) el.textContent = I18N[lang][k];
  });
}

function updateLangUI() {
  document.querySelectorAll(".lang-opt").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
}

function typePill(p) {
  const label = p.type === "macOS" ? "macOS" : t("filterWeb");
  return p.type === "macOS"
    ? '<span class="pill pill-mac">macOS</span>'
    : '<span class="pill pill-web">' + label + "</span>";
}

function statusPill(p) {
  if (p.status === "dev") return '<span class="pill pill-dev">' + t("statusDev") + "</span>";
  return '<span class="pill pill-pub">' + t("statusPub") + "</span>";
}

function cardHTML(p) {
  const badge = p.status === "dev" ? '<span class="card-badge">' + t("statusDev") + "</span>" : "";
  return `
    <article class="card" data-slug="${p.slug}">
      <div class="card-icon-wrap">
        <img class="card-icon" src="assets/icons/${p.icon}" alt="${p.name}" loading="lazy" />
        ${badge}
      </div>
      <div class="card-title">${p.name}</div>
      <div class="card-tag">${pt(p, "tagline")}</div>
      <div class="card-meta">
        ${typePill(p)}
        <span class="ver">${pver(p)}</span>
      </div>
    </article>`;
}

function renderHome() {
  const mac = PRODUCTS.filter(p => p.type === "macOS").length;
  const web = PRODUCTS.length - mac;
  const dates = PRODUCTS.flatMap(p => [p.start, p.end]).sort();
  const span = dates[0] + " ～ " + dates[dates.length - 1];
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">${t("homeEyebrow")}</p>
      <h1>Sean Xin + AI</h1>
      <p class="lead">${t("homeLead")}</p>
      <div class="hero-badges">
        <a class="btn btn-primary" href="#/products">${t("btnBrowse")}</a>
        <a class="btn btn-ghost" href="#/about">${t("btnAbout")}</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><b>${PRODUCTS.length}</b><span>${t("statProducts")}</span></div>
        <div class="stat"><b>${mac}</b><span>${t("statMac")}</span></div>
        <div class="stat"><b>${web}</b><span>${t("statWeb")}</span></div>
        <div class="stat"><b>${span.split(" ～ ")[0].slice(0, 7)}</b><span>${t("statStart")}</span></div>
      </div>
    </section>

    <section class="section">
      <p class="eyebrow">${t("featuredEyebrow")}</p>
      <h2>${t("featuredTitle")}</h2>
      <div class="grid">
        ${PRODUCTS.slice(-6).reverse().map(cardHTML).join("")}
      </div>
    </section>`;
  bindCards();
}

function renderProducts(filter = "all") {
  const list = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.type === filter);
  app.innerHTML = `
    <section class="section">
      <p class="eyebrow">${t("productsEyebrow")}</p>
      <h2>${t("productsTitle")}</h2>
      <p class="lead">${t("productsLead")}</p>
      <div class="filters">
        <button class="chip ${filter === "all" ? "active" : ""}" data-f="all">${t("filterAll")}</button>
        <button class="chip ${filter === "macOS" ? "active" : ""}" data-f="macOS">${t("filterMac")}</button>
        <button class="chip ${filter === "web" ? "active" : ""}" data-f="web">${t("filterWeb")}</button>
      </div>
      <div class="grid">
        ${list.map(cardHTML).join("")}
      </div>
    </section>`;
  bindCards();
  app.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => renderProducts(c.dataset.f)));
}

function renderDetail(slug) {
  const p = PRODUCTS.find(x => x.slug === slug);
  if (!p) { renderHome(); return; }
  const fhtml = pt(p, "features").map(f => `<li>${f}</li>`).join("");
  const vhtml = pt(p, "versions").slice().reverse().map(v => `<li><span class="v">${v.v}</span><span class="d">${v.d}</span><span class="n">${v.n}</span></li>`).join("");
  const reqHTML = `<div class="req"><span class="req-ico">⚙</span>${p.type === "macOS" ? t("reqMac") : t("reqWeb")}</div>`;
  let actionHTML = "";
  if (p.status === "dev") {
    actionHTML = `<span class="pill pill-dev">${t("devNoDownload")}</span>`;
  } else if (p.download) {
    const label = p.type === "web" ? t("btnBrowse") : (t("statusPub") + " · " + p.name);
    actionHTML = `<a class="btn btn-primary" href="${p.download}" target="_blank" rel="noopener">↓ ${label}</a>`;
  } else {
    actionHTML = `<span class="pill pill-pub">${t("statusPub")}</span>`;
  }
  app.innerHTML = `
    <a class="back" href="#/products">${t("detailBack")}</a>
    <div class="detail-head">
      <img class="detail-icon" src="assets/icons/${p.icon}" alt="${p.name}" />
      <div class="detail-head-info">
        <h1 class="detail-title">${p.name}</h1>
        <div class="detail-sub">${pt(p, "tagline")}</div>
        <div class="detail-tags">${typePill(p)}<span class="ver">${pver(p)}</span>${statusPill(p)}</div>
        ${reqHTML}
        <div class="detail-actions">${actionHTML}</div>
      </div>
    </div>
    <div class="detail-body">
      <div class="block">
        <h3>${t("detailFuncTitle")}</h3>
        <p>${pt(p, "overview")}</p>
        <ul class="feature-list">${fhtml}</ul>
      </div>
      <div class="block">
        <h3>${t("detailInfoTitle")}</h3>
        <div class="kv"><span>${t("kvType")}</span><span>${p.type === "macOS" ? "macOS" : t("filterWeb")}</span></div>
        <div class="kv"><span>${t("kvVersion")}</span><span>${pver(p)}</span></div>
        <div class="kv"><span>${t("kvStatus")}</span><span>${p.status === "dev" ? t("statusDev") : t("statusPub")}</span></div>
        <div class="kv"><span>${t("kvStart")}</span><span>${p.start}</span></div>
        <div class="kv"><span>${t("kvEnd")}</span><span>${p.end}</span></div>
        <h3 style="margin-top:26px;">${t("detailVerTitle")}</h3>
        <ul class="timeline">${vhtml}</ul>
      </div>
    </div>`;
}

function renderAbout() {
  const cards = t("aboutCards").map(c => `
    <div class="about-card">
      <h3>${c.title}</h3>
      <p>${c.body}</p>
    </div>`).join("");
  app.innerHTML = `
    <section class="section">
      <p class="eyebrow">${t("aboutEyebrow")}</p>
      <h2>${t("aboutTitle")}</h2>
      <p class="lead">${t("aboutLead")}</p>
      <div class="about-grid">
        ${cards}
      </div>
    </section>`;
}

function bindCards() {
  app.querySelectorAll(".card").forEach(c => c.addEventListener("click", () => {
    location.hash = "#/product/" + c.dataset.slug;
  }));
}

/* ============================================================
   路由
   ============================================================ */
function setActive(route) {
  navLinks.forEach(a => a.classList.toggle("active", a.dataset.route === route));
}

function router() {
  const hash = location.hash.replace(/^#/, "") || "/";
  if (hash.startsWith("/product/")) {
    setActive("/products");
    renderDetail(hash.slice("/product/".length));
  } else if (hash === "/products") {
    setActive("/products");
    renderProducts("all");
  } else if (hash === "/about") {
    setActive("/about");
    renderAbout();
  } else {
    setActive("/");
    renderHome();
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

brandLink.addEventListener("click", e => { location.hash = "#/"; });
document.getElementById("langSwitch").addEventListener("click", e => {
  const btn = e.target.closest(".lang-opt");
  if (btn) setLang(btn.dataset.lang);
});
window.addEventListener("hashchange", router);

/* 初始化 */
setLang(lang);
