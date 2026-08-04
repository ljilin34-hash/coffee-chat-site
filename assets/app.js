// Coffee Chat 数据与交互逻辑 v3.0

// ===== 品牌信息 =====
const brandInfo = {
  name: 'Coffee Chat',
  tagline: '行业跨界交流沙龙',
  description: '邀请不同行业背景的参与者，以平等分享、互鉴经验为核心，通过线下咖啡场景，实现真实连接与共同成长。',
  hostName: '郭仔',
  hostLocation: '浙江 · 杭州',
  wechatQR: 'wechat-qr.jpeg',
  posterImage: 'promo-poster.jpg',
};

// ===== 主题 =====
const themes = [
  { slug: 'solo', name: '🙋🏻 一人公司专场', tagline: '聊一个人如何把事做成', description: '围绕一人创业，聊怎么一个人搞定产品、运营、获客的全链路。不只是聊方法论，更聊一个人做事的真实困境——时间怎么分配、精力怎么管理、怎么在没有团队的情况下跑通闭环。', accentColor: '#C97B3F', suitableFor: '想自己干但还在犹豫的人，或已经在一个人创业的路上' },
  { slug: 'ai', name: '📍 AI 专场', tagline: '聊 Agent 怎么落地到业务里', description: '聊 AI Agent 在实际业务中的应用，从概念到落地。不聊概念炒作，聊真实场景里 AI 能解决什么问题、不能解决什么、怎么和现有业务流程结合。', accentColor: '#3B4F7A', suitableFor: '想把 AI 用起来但不知道从哪下手的人' },
  { slug: 'media', name: '💻 自媒体专场', tagline: '聊内容、聊人设、聊变现', description: '聊怎么持续产出内容、怎么找到自己的表达风格、怎么面对数据焦虑、怎么从内容到变现。不聊虚的，聊真实踩过的坑和找到的路。', accentColor: '#355C7D', suitableFor: '在做或想做自媒体的人' },
  { slug: 'women', name: '全女专场', tagline: '面向女性从业者的专属交流空间', description: '为女性参与者提供安全、温暖的交流空间。', accentColor: '#D4869A', suitableFor: '想要女性同频交流环境的从业者', hidden: true },
];

// ===== 活动数据（真实往期记录）=====
const activities = [
  { id: '001', dateLabel: '6月29日', themeSlug: 'solo', themeName: '一人公司专场', highlight: '一个人怎么跑通闭环', attendees: 12, photo: '0629-solo.jpeg', quote: '最大的收获是发现我不是一个人在想这些事，大家的卡点其实都差不多。', quoteAuthor: '阿May' },
  { id: '002', dateLabel: '7月5日', themeSlug: 'media', themeName: '自媒体专场', highlight: '内容创作的方法论与心法', attendees: 14, photo: '0705-media.jpeg', quote: '最大的启发是：不用等想清楚了再写，写本身就是想清楚的过程。', quoteAuthor: '大周' },
  { id: '003', dateLabel: '7月9日', themeSlug: 'solo', themeName: '一人公司专场', highlight: '从想法到行动的距离', attendees: 13, photo: '0709-solo.jpeg', quote: '上次来是观望，这次来已经在做了，中间隔了三个月。', quoteAuthor: '阿May' },
  { id: '004', dateLabel: '7月16日', themeSlug: 'women', themeName: '全女专场', highlight: '女性在职场与生活中的关系网', attendees: 10, photo: '0716-women.jpeg', quote: '在一个全是女生的环境里说话，感觉完全不一样，更放松也更真实。', quoteAuthor: '晓雯' },
  { id: '005', dateLabel: '7月19日', themeSlug: 'solo', themeName: '一人公司专场', highlight: '一人创业的获客与变现', attendees: 12, photo: '0719-solo.jpeg', quote: '聊完发现自己一直在闭门造车，其实有很多现成的渠道可以试。', quoteAuthor: 'Kevin' },
  { id: '006', dateLabel: '7月25日', themeSlug: 'media', themeName: '自媒体专场', highlight: 'IP 和网红的壁垒在哪里', attendees: 12, photo: '0725-media.jpeg', quote: 'IP和网红有很大的壁垒——网红有影响力但不专精，IP是别人需要这样东西能想到这个人。', quoteAuthor: '郭仔', takeaways: ['公域搞流量，私域做转化', '核心内容必须自己写，AI 只做辅助', '别让他觉得你东西很廉价，定价才会让你东西有价值', '先发 100 个视频，90% 的问题都不是问题'] },
  { id: '007', dateLabel: '8月1日', themeSlug: 'ai', themeName: 'AI 专场', highlight: 'AI 时代的护城河', attendees: 16, photo: '0801-solo.jpeg', quote: 'AI 时代的护城河，不是 AI。就像互联网时代没人会说"我会用互联网"是壁垒。真正的壁垒是私有数据、行业理解、商业关系、审美和判断力。', quoteAuthor: '参与者共识', takeaways: ['当所有人都会用 AI，"会用 AI"就不再是护城河了', 'AI 放大的是你的能力，不是你的精力', '问问题的能力，比答问题的能力值钱得多', '150 个粉丝也能一周变现 5000 元——粉丝量不重要，商业关系和私有数据才是关键'] },
  { id: '008', dateLabel: '8月2日', themeSlug: 'media', themeName: '自媒体专场', highlight: '有流量但赚不到钱', attendees: 13, photo: '0802-media.jpeg', quote: '公域搞流量，私域做转化。这句话听过的人很多，做到的人很少。', quoteAuthor: '参与者共识', takeaways: ['150 个粉丝变现 5000+——粉丝体量跟变现是两个概念，关键是粉丝精不精准', 'AI 写的稿子平台能识别并限流，核心内容必须自己写', '定价才会让你的东西有价值，别让别人觉得你东西很廉价', '去年的视频今年混剪再发——每一次刷到都是不同的人'] },
];

// ===== FAQ =====
const faqParticipate = [
  { q: 'Coffee Chat 和普通社交活动有什么不同？', a: '普通社交活动像赶场，加一堆微信，回家一看一个都不熟。Coffee Chat 是小范围、有主题、有深度的对话。十几个人坐在一起，围绕一个话题聊两小时，每个人都能说上话、都能被听到。不只是换名片，是交换真实想法。' },
  { q: '为什么是付费参加？', a: '第一，筛选人。免费活动来的人五花八门，有人是来学习的，有人是来蹭咖啡的。付费门槛能挡掉「随便来看看」的人，留下来的都是真正想聊、愿意投入时间的人。活动质量靠的不是主理人，是坐在你旁边的人。第二，覆盖成本。虽不以盈利为目的，但场地、咖啡、前期沟通、嘉宾对接，这些都是实打实的投入。' },
  { q: '一场多少人？为什么控制人数？', a: '一场 10-15 人。原因很简单：人多了，就变成「几个人在讲，大部分人在听」。Coffee Chat 的核心是每个人都能参与对话。控制人数能让每个人都有充分的时间分享自己的经历、提问、被回应。人一多，场面就散了，深度就没了。' },
  { q: '没有相关背景能参加吗？', a: '能，但有前提。每场活动我会标注「适合谁」，但这个标准不是「你必须是这个行业的人」，而是「你对这个话题有真实的困惑或经历」。比如自媒体专场，你不一定得是大博主——刚开始做号或者单纯好奇自媒体怎么变现都欢迎。但你得带着问题来，而不是抱着「听听看」的心态坐着不动。Coffee Chat 最珍贵的不是嘉宾多牛，是每个人都愿意开口。你只要愿意分享你的视角，哪怕是完全外行的视角，对话就有了新的角度。' },
];

const faqConcept = [
  { q: '为什么不做成大型活动？', a: '因为我们相信深度交流比规模更重要。大型活动容易变成"去了认识了谁"的社交，而 Coffee Chat 想做的是"去了聊明白了什么"的交流。规模小，才能保证每个人都参与。' },
  { q: '为什么不在网上做？', a: '线上交流有它的便利，但线下面对面有一种线上替代不了的氛围。坐在一张桌前喝着咖啡聊天，人会更放松，聊的也更真实。我们想做的是那种"在场感"。' },
  { q: '主理人会持续做吗？', a: '会。从第一场到现在，频率在稳定提升。这件事对我来说不是一次性活动，是一个持续在生长的项目。只要还有人愿意来聊，就会继续做下去。' },
  { q: '三大主题专场分别是什么？', a: '一人公司专场聚焦个人创业和一人商业模式；AI 专场聊 Agent 怎么落地到业务里；自媒体专场聊内容、聊人设、聊变现。每个主题都在持续迭代，围绕参与者真实关心的问题展开。' },
];

const flowSteps = [
  { step: '01', name: '签到破冰', desc: '到场签到，拿杯咖啡，和身边的人先聊两句。' },
  { step: '02', name: '自我介绍', desc: '每人一两分钟：你是谁、在做什么、为什么来。' },
  { step: '03', name: '主题引导', desc: '主持人抛出话题方向，大家开始交流。' },
  { step: '04', name: '自由交流', desc: '围绕话题展开讨论，主持人负责拉回跑偏的节奏。' },
  { step: '05', name: '收尾总结', desc: '每人说一个今天的收获或 takeaway，带着"来值了"离开。' },
];

const principles = [
  { keyword: '质量比数量重要', desc: '10-15 人不是随意定的，是保证每个人都能参与的最佳规模。' },
  { keyword: '去中心化的交流', desc: '没有主讲人，没有课堂。每个人都是输出者，也是倾听者。' },
  { keyword: '付费是筛选机制', desc: '一点费用，筛掉凑热闹的人，留下真正想聊的人。' },
  { keyword: '温和真实的分享', desc: '不夸大、不焦虑营销。聊的是真实经验，不是画饼。' },
];

// ===== 渲染函数 =====
function getTheme(slug) {
  return themes.find(t => t.slug === slug);
}
function getActivitiesByTheme(slug) {
  return activities.filter(a => a.themeSlug === slug);
}

function renderTimeline(items, container, basePath = '', simplified = false) {
  const photoPath = basePath + 'assets/photos/';
  const themePath = basePath + 'themes/';
  container.innerHTML = items.map((item, i) => {
    const theme = getTheme(item.themeSlug);
    const accent = theme ? theme.accentColor : '#2E5C8A';
    const themeHref = theme && !theme.hidden ? `${themePath}${theme.slug}.html` : '#';
    const takeawaysHtml = (!simplified && item.takeaways)
      ? `<div class="timeline-takeaways"><ul>${item.takeaways.map(t => `<li>${t}</li>`).join('')}</ul></div>`
      : '';
    const highlightHtml = !simplified ? `<p class="timeline-highlight">${item.highlight}</p>` : '';
    const quoteAuthorHtml = !simplified && item.quoteAuthor ? ` — <cite>${item.quoteAuthor}</cite>` : '';
    return `
    <div class="timeline-item reveal" style="transition-delay:${i*100}ms">
      <div class="timeline-rail">
        <div class="timeline-dot" style="background:${accent}"></div>
        ${i < items.length - 1 ? '<div class="timeline-line"></div>' : ''}
      </div>
      <div class="timeline-card">
        ${item.photo ? `<div class="timeline-photo" style="background-image:url('${photoPath}${item.photo}')"></div>` : ''}
        <div class="timeline-card-body">
          <div class="timeline-date">${item.dateLabel}</div>
          <a href="${themeHref}" class="timeline-tag" style="background:${accent}1a;color:${accent}">${item.themeName}</a>
          ${highlightHtml}
          <span class="timeline-meta">${item.attendees} 人参与</span>
          ${item.quote ? `<blockquote class="timeline-quote">"${item.quote}"${quoteAuthorHtml}</blockquote>` : ''}
          ${takeawaysHtml}
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderGallery(photos, container, basePath = '') {
  const photoPath = basePath + 'assets/photos/';
  container.innerHTML = photos.map((item, i) => {
    const theme = getTheme(item.themeSlug);
    const accent = theme ? theme.accentColor : '#2E5C8A';
    return `
    <div class="gallery-card reveal" style="transition-delay:${i*60}ms" data-photo="${photoPath}${item.photo}">
      <div class="gallery-photo" style="background-image:url('${photoPath}${item.photo}')"></div>
      <div class="gallery-overlay">
        <span class="gallery-date">${item.dateLabel}</span>
        <span class="gallery-theme" style="color:${accent}">${item.themeName}</span>
      </div>
    </div>`;
  }).join('');

  // 点击打开灯箱
  container.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      openLightbox(card.dataset.photo);
    });
  });
}

function openLightbox(src) {
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <img class="lightbox-img" src="" alt="活动照片">
      <button class="lightbox-close" aria-label="关闭">&times;</button>
    `;
    document.body.appendChild(lb);
    lb.querySelector('.lightbox-backdrop').addEventListener('click', () => lb.classList.remove('show'));
    lb.querySelector('.lightbox-close').addEventListener('click', () => lb.classList.remove('show'));
  }
  lb.querySelector('.lightbox-img').src = src;
  lb.classList.add('show');
  document.body.style.overflow = 'hidden';
  // 按ESC关闭
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      lb.classList.remove('show');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
  // 点击关闭时恢复滚动
  lb.querySelector('.lightbox-backdrop').onclick = () => {
    document.body.style.overflow = '';
  };
}

function renderFAQItems(items, container) {
  container.innerHTML = items.map((item, i) => `
    <div class="faq-item" data-faq-index="${i}">
      <div class="faq-question"><span>${item.q}</span><span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>${item.a}</p></div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      container.querySelectorAll('.faq-item.open').forEach(other => {
        other.classList.remove('open');
      });
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== 全局初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  // 1. 滚动进度条
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // 2. 导航栏滚动效果
  const nav = document.querySelector('.nav');
  if (nav) {
    const updateNav = () => {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // 3. 汉堡菜单
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  if (navToggle && navLinks) {
    const toggleMenu = (open) => {
      navToggle.classList.toggle('open', open);
      navLinks.classList.toggle('open', open);
      if (navOverlay) navOverlay.classList.toggle('show', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    navToggle.addEventListener('click', () => {
      toggleMenu(!navLinks.classList.contains('open'));
    });
    if (navOverlay) navOverlay.addEventListener('click', () => toggleMenu(false));
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // 4. IntersectionObserver for reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
