import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/度/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/度/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "度",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/序.md",
                "title": "博",
                "link": "posts/序.html",
                "date": "2021-01-07T02:39:01.000Z",
                "updated": null,
                "author": "YNlwys",
                "contributors": [
                    "YNlwys"
                ],
                "categories": [
                    "界"
                ],
                "tags": [
                    "量",
                    "度"
                ],
                "excerpt": "序"
            }
        ],
        "categories": [
            {
                "name": "技术",
                "count": 1
            },
            {
                "name": "界",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "Mac",
                "count": 1
            },
            {
                "name": "度",
                "count": 1
            },
            {
                "name": "快捷键",
                "count": 1
            },
            {
                "name": "量",
                "count": 1
            }
        ]
    }
};
