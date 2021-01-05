import projectConfig from '/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/react_hooks_test.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/react_hooks_test.html",
    'title': "React hooks test",
    'content': React.createElement(ReactHooksTest, { config: {
            blog: {
                root: '/posts/',
                social: {
                    email: 'Ynlwys@gmail.com',
                    github: 'Ynlwys',
                    twitter: 'Ynlwys'
                }
            },
            branch: 'main',
            description: '',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            include: undefined,
            nav: [
                {
                    icon: 'czs-home-l',
                    link: '/index.html',
                    text: '首页'
                },
                {
                    icon: 'czs-category-l',
                    link: '/categories/index.html',
                    text: '分类'
                },
                {
                    icon: 'czs-tag-l',
                    link: '/tags/index.html',
                    text: '标签'
                },
                {
                    icon: 'czs-about-l',
                    link: '/about/index.html',
                    text: '关于'
                },
                {
                    icon: 'czs-box-l',
                    link: '/archives/index.html',
                    text: '归档'
                },
                {
                    icon: 'czs-link-l',
                    link: '/links/index.html',
                    text: '友情链接'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'blog'
            ],
            port: 8000,
            root: '/',
            serve: false,
            srcDir: '.',
            theme: 'docs',
            title: 'YNlwys的博客',
            watch: false
        }, content: null, head: null, layoutPath: "_layout.tsx", outputPath: "test_pages/react_hooks_test.html", pagePath: "test_pages/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
