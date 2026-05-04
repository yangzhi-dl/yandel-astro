export interface NavItem {
  label: string;
  href: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface EntryLink {
  title: string;
  description: string;
  href: string;
  meta: string;
}

export interface ProjectItem {
  title: string;
  summary: string;
  status: string;
  year: string;
  tags: string[];
  highlights: string[];
  href?: string;
  featured?: boolean;
}

export interface NoteItem {
  title: string;
  summary: string;
  platform: string;
  category: string;
  status: string;
  href?: string;
  featured?: boolean;
}

export interface NoteSource {
  label: string;
  description: string;
  status: string;
  href?: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export const siteConfig = {
  brand: "Yandel Lab",
  navItems: [
    { label: "首页", href: "/" },
    { label: "项目", href: "/projects" },
    { label: "笔记", href: "/notes" },
    { label: "关于", href: "/about" },
  ] satisfies NavItem[],
  footer: {
    description: "长期记录技术实践、AI 工具和个人作品。",
    copyright: "© 2026 Yandel Lab",
    domain: "https://yandel.top",
  },
};

export const projects: ProjectItem[] = [
  {
    title: "PKG-RAG毕设项目",
    summary:
      "围绕RAG索引增强和SpringBoot实现的毕设项目。",
    status: "已完成",
    year: "2025",
    tags: ["RAG", "SpringBoot","DeepSeek","WebSocket"],
    highlights: ["面向真实使用场景沉淀功能", "保留后续接入账号和数据源的空间"],
    href: "/projects",
    featured: true,
  },
  {
    title: "个人网站",
    summary:
      "当前站点本身，用 Astro 承接静态内容、作品展示和后续 Markdown 文章。",
    status: "迭代中",
    year: "2026",
    tags: ["Astro", "Vue", "TailwindCSS"],
    highlights: ["页面内容数据化", "组件边界清晰，方便追加栏目"],
    href: "/projects",
    featured: true,
  },
  {
    title: "AI 工具集合",
    summary:
      "整理日常开发和内容生产中可复用的小工具，优先做轻量、直接、可维护的版本。",
    status: "规划中",
    year: "2026",
    tags: ["Tools", "Automation", "AI"],
    highlights: ["以小功能验证想法", "适合逐步拆成独立产品页"],
    href: "/projects",
    featured: true,
  },
];

export const notes: NoteItem[] = [
  {
    title: "Astro 个人站搭建记录",
    summary:
      "记录从页面结构、组件拆分到部署流程的关键决策，后续可沉淀成系列文章。",
    platform: "Markdown",
    category: "前端工程",
    status: "准备中",
    featured: true,
  },
  {
    title: "AI 工具如何进入日常开发流",
    summary:
      "关注 AI 辅助编码、资料整理和个人知识库之间的边界，不追热点，先看实际收益。",
    platform: "CSDN / 掘金",
    category: "AI 实践",
    status: "待发布",
    featured: true,
  },
  {
    title: "服务器部署与踩坑清单",
    summary:
      "整理 Nginx、Docker、域名、证书和静态站点发布时容易忘掉的小细节。",
    platform: "公众号 / Markdown",
    category: "部署运维",
    status: "整理中",
    featured: true,
  },
];

export const noteSources: NoteSource[] = [
  {
    label: "CSDN",
    description: "偏实践记录和问题复盘，适合放排查过程较完整的文章。",
    status: "待接入链接",
  },
  {
    label: "掘金",
    description: "偏前端、工程化和工具链内容，后续可同步精选文章。",
    status: "待接入链接",
  },
  {
    label: "公众号",
    description: "偏长期整理和个人观察，适合发布更完整的总结。",
    status: "待接入链接",
  },
  {
    label: "站内 Markdown",
    description: "后续接入本项目的 Markdown/MDX，形成可归档的文章列表。",
    status: "规划中",
  },
];

export const homePage = {
  seo: {
    title: "Yandel Lab",
    description: "Yandel 的个人博客，记录技术实践、AI 工具、项目作品和长期兴趣。",
  },
  hero: {
    title: "记录技术、AI与个人项目的长期实验",
    highlight: "Yandel Lab",
    description:
      "这里是Yandel的个人主页。存放一些技术笔记、项目展示、AI工具、开发踩坑记录，以及正在构建中的个人作品。",
    actions: [
      { label: "看精选项目", href: "/projects", variant: "primary" },
      { label: "读精选文章", href: "/notes", variant: "secondary" },
    ] satisfies HeroAction[],
    metaItems: ["Astro + Vue", "AI 工具", "技术笔记", "长期作品集"],
  },
  intro: {
    title: "关于这个站点",
    description:
      "它不是一次性搭出来的展示页，而是一个长期维护的个人空间。首页负责快速了解我，项目页放作品，笔记页沉淀文章，关于页保留更完整的个人信息和联系方式。",
  },
  entryLinks: [
    {
      title: "项目",
      description: "SmartPAI、个人网站、AI 工具，以及后续更完整的作品页。",
      href: "/projects",
      meta: "Projects",
    },
    {
      title: "笔记",
      description: "精选文章入口，先承接外部平台，后续接入 Markdown/MDX。",
      href: "/notes",
      meta: "Notes",
    },
    {
      title: "关于",
      description: "个人介绍、技术栈、摄影、汽车和联系方式。",
      href: "/about",
      meta: "About",
    },
  ] satisfies EntryLink[],
};

export const projectsPage = {
  seo: {
    title: "项目 | Yandel Lab",
    description: "Yandel 的项目列表，包括 SmartPAI、个人网站和 AI 工具。",
  },
  header: {
    eyebrow: "Projects",
    title: "项目列表",
    description:
      "正在构建的产品、个人站点本身，以及能解决具体问题的小工具。",
  },
};

export const notesPage = {
  seo: {
    title: "笔记 | Yandel Lab",
    description: "Yandel 的精选文章入口，包含 CSDN、掘金、公众号和站内 Markdown 规划。",
  },
  header: {
    eyebrow: "Notes",
    title: "精选文章入口",
    description:
      "先把值得继续整理的主题放在这里，外部平台链接接入后可以直接跳转；站内 Markdown 会作为长期归档逐步补上。",
  },
};

export const aboutPage = {
  seo: {
    title: "关于 | Yandel Lab",
    description: "关于 Yandel：个人介绍、技术栈、摄影、汽车和联系方式。",
  },
  header: {
    eyebrow: "About",
    title: "关于 Yandel",
    description:
      "我喜欢把想法拆成能运行、能维护、能复盘的东西。这个站点会持续记录技术、项目和一些生活里的长期兴趣。",
  },
  profile: [
    "主要关注 Java 后端、前端工程、AI 工具和个人产品构建。",
    "喜欢把学习过程整理成可复用的笔记，也会把小想法逐步做成可访问的项目。",
    "技术之外，会长期记录摄影、汽车和一些日常观察。",
  ],
  stacks: [
    {
      title: "后端",
      items: ["Java", "Spring Boot", "MySQL", "Redis", "REST API"],
    },
    {
      title: "前端",
      items: ["Astro", "Vue 3", "TypeScript", "TailwindCSS"],
    },
    {
      title: "工程化",
      items: ["Docker", "Nginx", "Linux", "GitHub Actions"],
    },
    {
      title: "AI 与工具",
      items: ["Prompt 工作流", "知识整理", "自动化脚本", "效率工具"],
    },
  ] satisfies StackGroup[],
  interests: [
    {
      title: "摄影",
      description: "用照片记录场景、光线和旅行中的细节，慢慢形成自己的视觉档案。",
    },
    {
      title: "汽车",
      description: "关注设计、机械、驾驶体验和汽车文化，也会记录一些个人观察。",
    },
  ],
  contacts: [
    { label: "Website", value: "yandel.top" },
    { label: "Email", value: "待补充" },
  ],
};
