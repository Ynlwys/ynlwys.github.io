export default {
  theme: 'docs',
  sidebar: {
    '/categories/': [
      'categories/introduction.md',
      'categories/usage.md',
      'categories/config.md',
      'categories/content.md',
      'categories/layout.md',
      'categories/themes.md',
      'categories/plugins.md',
      'categories/blog.md',
      'categories/i18n.md',
      'categories/deployment.md',
      'categories/README.md',
      'categories/limitations.md',
    ],
  },  
  plugins: ['blog','sidebar'],
  title: 'YNlwys的博客',
  description: '',
  blog: {
    root: '/posts/',
    social: {
      github: 'Ynlwys',
      email: 'Ynlwys@gmail.com',
      twitter: 'Ynlwys',
    },
  },
  nav: [
    {
      text: '首页',
      link: '/index.html',
      icon: 'czs-home-l',
    },
    {
      text: '分类',
      link: '/categories/index.html',
      icon: 'czs-category-l',
    },
    {
      text: '标签',
      link: '/tags/index.html',
      icon: 'czs-tag-l',
    },
    {
      text: '关于',
      link: '/about/index.html',
      icon: 'czs-about-l',
    },
    {
      text: '归档',
      link: '/archives/index.html',
      icon: 'czs-box-l',
    },
    {
      text: '友情链接',
      link: '/links/index.html',
      icon: 'czs-link-l',
    },
  ],
};
