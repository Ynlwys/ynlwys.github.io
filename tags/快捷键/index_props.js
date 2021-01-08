import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/快捷键/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/快捷键/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "快捷键",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/Tmux使用技巧.md",
                "title": "Tmux使用技巧",
                "link": "posts/Tmux使用技巧.html",
                "date": "2021-01-08T02:47:15.000Z",
                "updated": null,
                "author": "YNlwys",
                "contributors": [
                    "YNlwys"
                ],
                "categories": [
                    "技术"
                ],
                "tags": [
                    "Mac",
                    "快捷键"
                ],
                "excerpt": "快捷键 一般情况下 tmux 中所有的快捷键都需要和前缀快捷键 ⌃b 来组合使用（注：⌃ 为 Mac 的 control 键），以下是常用的窗格（pane）快捷键列表，大家可以依次尝试下： 窗格操作 - % 左右平分出两个窗格 （试用频率：★★★..."
            }
        ],
        "categories": [
            {
                "name": "技术",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "Mac",
                "count": 1
            },
            {
                "name": "快捷键",
                "count": 1
            }
        ]
    }
};
