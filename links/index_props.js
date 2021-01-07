import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "links/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "links/index.html",
    'title': "友情链接",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>友情链接</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u53CB\u60C5\u94FE\u63A5"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "Ynlwys",
    'contributors': [
        "Ynlwys",
        "YNlwys"
    ],
    'date': "2020-12-31T03:19:40.000Z",
    'updated': "2021-01-07T07:56:12.000Z",
    'excerpt': "",
    'cover': undefined,
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
                "name": "界",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "度",
                "count": 1
            },
            {
                "name": "量",
                "count": 1
            }
        ]
    }
};
