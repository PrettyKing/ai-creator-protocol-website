# AI Creator Protocol 官网

基于 Story Protocol 构建的创作者版权保护与变现平台官方网站

## 🚀 技术栈

- **React 18** - 现代化前端框架
- **Webpack 5** - 模块打包工具
- **TailwindCSS 3** - 原子化CSS框架  
- **Lucide React** - 现代化图标库
- **React Router** - 客户端路由

## 📦 项目结构

```
src/
├── components/          # React组件
│   ├── Navbar.js       # 导航栏
│   ├── Hero.js         # 英雄区块
│   ├── Features.js     # 功能特性
│   ├── HowItWorks.js   # 工作流程
│   ├── Pricing.js      # 价格方案
│   └── Footer.js       # 页脚
├── App.js              # 主应用组件
├── index.js            # 应用入口
└── index.css           # 全局样式

public/
├── index.html          # HTML模板
└── favicon.ico         # 网站图标

webpack配置文件:
├── webpack.common.js   # 通用配置
├── webpack.dev.js      # 开发环境配置
└── webpack.prod.js     # 生产环境配置
```

## 🛠 本地开发

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
# 或
npm start
```

项目将在 http://localhost:3000 启动

### 3. 构建生产版本
```bash
npm run build
```

构建文件将输出到 `dist/` 目录

## 🌐 部署到 Cloudflare Pages

### 方法一：通过 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 "Pages" 选项卡
3. 点击 "Create a project"
4. 连接 GitHub 仓库：`PrettyKing/ai-creator-protocol-website`
5. 配置构建设置：
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. 点击 "Save and Deploy"

### 方法二：使用 Wrangler CLI

1. 安装 Wrangler
```bash
npm install -g wrangler
```

2. 登录 Cloudflare
```bash
wrangler login
```

3. 创建 Pages 项目
```bash
wrangler pages project create ai-creator-protocol-website
```

4. 部署
```bash
npm run build
wrangler pages publish dist --project-name=ai-creator-protocol-website
```

## 📝 网站特性

### 🎨 设计特点
- **现代化设计** - 参考 Aladdin.build 的简洁风格
- **响应式布局** - 完美适配各种设备
- **流畅动画** - TailwindCSS 动画和过渡效果
- **品牌一致性** - 统一的颜色和字体规范

### 📱 核心页面
- **英雄区块** - 主要价值主张展示
- **功能特性** - 8大核心功能介绍
- **工作流程** - 4步简单操作流程
- **价格方案** - 免费版/专业版/企业版
- **页脚信息** - 完整的网站导航和联系信息

### ⚡ 性能优化
- **代码分割** - Webpack 自动优化
- **资源压缩** - 生产环境自动压缩
- **缓存策略** - Cloudflare CDN 加速
- **SEO 优化** - 完整的 meta 标签

## 🎯 品牌元素

### 🎨 色彩方案
- **主色调**: Blue (`#3B82F6`) - 代表技术和信任
- **辅助色**: Purple (`#8B5CF6`) - 代表创新和创意
- **中性色**: Gray 系列 - 用于文本和背景

### 🔤 字体规范
- **主字体**: Inter - 现代化无衬线字体
- **标题**: Bold (700)
- **正文**: Regular (400) 和 Medium (500)

### 🎭 动画效果
- `fade-in` - 渐现效果
- `slide-up` - 上滑进入
- `float` - 浮动动画
- `card-hover` - 卡片悬停效果

## 🔧 Cloudflare 配置

### 自动部署设置
创建 `wrangler.toml` 配置文件：

```toml
name = "ai-creator-protocol-website"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"

[env.production]
route = "aicp.dev/*"
```

### 环境变量
如需配置环境变量，在 Cloudflare Pages 设置中添加：
- `NODE_ENV=production`
- 其他必要的配置项

## 📊 网站统计

集成 Cloudflare Analytics 进行网站访问统计：
- 页面浏览量
- 访客来源
- 设备类型统计
- 性能指标监控

## 🤝 贡献指南

1. Fork 本项目
2. 创建功能分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'Add some AmazingFeature'`
4. 推送到分支: `git push origin feature/amazing-feature`
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Aladdin.build](https://aladdin.build/) - 设计灵感来源
- [Story Protocol](https://storyprotocol.xyz/) - 核心技术支持
- [TailwindCSS](https://tailwindcss.com/) - 样式框架
- [Lucide](https://lucide.dev/) - 图标库
- [Cloudflare Pages](https://pages.cloudflare.com/) - 部署平台

---

**🌟 如果这个项目对你有帮助，请给个 Star 支持一下！**

**🚀 在线访问**: [https://ai-creator-protocol-website.pages.dev](https://ai-creator-protocol-website.pages.dev)