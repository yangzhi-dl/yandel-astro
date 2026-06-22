# Yandel Lab 首页视觉重构任务

## 目标

在保留当前页面结构、文案内容、卡片内容、导航栏、按钮功能完全不变的前提下，对首页 Hero 区和整体背景进行重构。

不要修改：

* Yandel Lab Logo
* 首页 / 项目 / 笔记 / 关于 导航
* 标题文案
* 项目卡片内容
* 关于站点内容
* 按钮文案
* 页面信息架构

仅修改：

* 背景视觉
* 氛围设计
* 动效
* 配色细节
* Hero区高级感

---

## 设计风格

参考：

* Linear
* Vercel
* OpenAI
* Anthropic
* Raycast

关键词：

* Premium
* Minimal
* Futuristic
* Elegant
* Professional
* Engineering
* Long-term Building

禁止：

* 宇航员
* 机器人
* 星空图片
* 科幻插画
* 二次元
* 赛博朋克霓虹
* 廉价粒子特效

目标效果：

让用户感觉：

"这是一个长期维护的技术实验室，而不是一个普通程序员博客。"

---

## 背景设计

删除当前背景图。

改为纯代码实现的动态背景。

### 第一层

深色渐变背景

```css
background:
radial-gradient(
circle at 50% 20%,
rgba(34,211,238,0.12),
transparent 45%
),
linear-gradient(
180deg,
#020617 0%,
#030712 50%,
#000000 100%
);
```

---

### 第二层

添加超淡科技网格

要求：

* 透明度极低
* 不影响阅读
* 类似 Linear 官网

效果：

* 横向纵向网格
* 80px~120px间距
* opacity 0.03~0.05

---

### 第三层

动态光晕

页面顶部生成：

* 蓝色光晕
* 紫色光晕

缓慢移动。

要求：

* 20秒以上循环
* 不明显
* 用户能感知高级感但不抢内容

---

### 第四层

噪点纹理

添加极弱 Noise Texture。

要求：

* 透明度 < 2%
* 提高质感
* 避免背景过于平滑

---

## Hero区域升级

保持现有布局：

左侧文字
右侧视觉元素

不要改变结构。

---

### 主标题

保留现有标题：

Yandel Lab

记录技术、AI与个人项目的长期实验

不要改文案。

---

### 标题动效

增加：

* 渐显
* 上浮
* blur消散

类似：

Framer Motion

持续时间：

0.8~1.2秒

---

## 右侧视觉重构

删除宇航员图片。

改为：

### 动态技术图谱

类似：

Agent Workflow

节点内容示例：

SmartPAI

Video Agent

RAG

OCR

Fabric

Redis

Spring Boot

Docker

AI

节点之间使用细线连接。

要求：

* 半透明
* 发光极弱
* 缓慢漂浮
* 鼠标经过产生轻微视差

不要做成流程图。

更像：

知识图谱

技术网络

数字实验室

---

## 卡片区域升级

保留原有卡片内容。

不要修改文字。

只升级视觉。

要求：

### Glass Morphism

```css
background:
rgba(255,255,255,0.04);

backdrop-filter:
blur(12px);
```

---

边框：

```css
border:
1px solid rgba(255,255,255,0.08);
```

---

Hover效果：

```css
translateY(-6px)

box-shadow:
0 10px 40px rgba(34,211,238,0.15)
```

动画时间：

300ms

---

## 导航栏升级

保持内容不变。

改为：

毛玻璃悬浮导航。

滚动后：

```css
backdrop-filter: blur(20px);
```

并增加：

```css
border-bottom:
1px solid rgba(255,255,255,0.05);
```

---

## 滚动体验

增加：

Scroll Reveal

进入视口：

* opacity 0 → 1
* translateY(30px) → 0

持续：

0.6s

---

## 鼠标交互

实现：

Light Follow Effect

鼠标附近出现极弱光晕。

要求：

* 半径200px左右
* 透明度极低
* 不影响阅读

类似：

Linear 官网

---

## 配色方案

主色：

```css
#22d3ee
```

辅助色：

```css
#7c3aed
```

文字：

```css
#ffffff
```

次级文字：

```css
#94a3b8
```

背景：

```css
#020617
#030712
#000000
```

---

## 最终目标

不要让页面看起来像：

* 程序员博客
* WordPress主题
* 科幻壁纸网站

而是看起来像：

一家正在构建 AI 产品的小型技术实验室官网。

整体气质参考：

Linear × Vercel × OpenAI 的融合风格。

重点：

删除宇航员和背景图片，使用纯CSS + SVG + Canvas实现高级动态背景，让内容成为主角，背景只负责营造氛围。


最后强调：优先使用 TailwindCSS + Framer Motion + SVG，不要引入 heavy 3D 库（Three.js、Babylon.js），保证 Lighthouse Performance ≥ 90。