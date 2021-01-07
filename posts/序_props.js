import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/序.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/序.html",
    'title': "博",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>博</h1>\n<p>序</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u535A"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>序</p>'
        } }),
    'toc': null,
    'author': "YNlwys",
    'contributors': [
        "YNlwys"
    ],
    'date': "2021-01-07T02:39:01.000Z",
    'updated': null,
    'excerpt': "序",
    'cover': undefined,
    'categories': [
        "界"
    ],
    'tags': [
        "量",
        "度"
    ],
    'blog': {
        "isPost": true,
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
