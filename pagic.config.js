export default {
    theme: 'docs',
    sidebar: {
        '/categories/': [
            'docs/introduction.md',
            'docs/usage.md',
            'docs/config.md',
            'docs/content.md',
            'docs/layout.md',
            'docs/themes.md',
            'docs/plugins.md',
            'docs/blog.md',
            'docs/i18n.md',
            'docs/deployment.md',
            'docs/demos.md',
            'docs/limitations.md',
        ],
    },
    plugins: ['blog', 'sidebar'],
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
