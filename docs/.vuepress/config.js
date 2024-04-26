module.exports = {
  title: 'oulong的博客',
  description: 'oulong的博客',
  // theme: 'reco',
  base: '/blog/',
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 是否折叠
        children: [{ title: '博客简介', path: '/' }],
      },
      {
        title: 'vue2源码',
        path: '/vue2/init/',
        collapsable: true,
        children: [
          { title: '初始化', path: '/vue2/init' },
          { title: '响应式原理', path: '/vue2/reactive' },
          { title: '组件挂载流程', path: '/vue2/mount' },
          { title: '组件更新流程', path: '/vue2/update' },
          { title: 'vnode Diff', path: '/vue2/diff' },
        ],
      },
    ],
  },
};
