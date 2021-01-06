import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "folder/bar.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "folder/bar.html",
    'title': "Bar",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Bar</h1>\n<p>The bar page.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Bar"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>The bar page.</p>'
        } }),
    'toc': null,
    'author': "Ynlwys",
    'contributors': [
        "Ynlwys"
    ],
    'date': "2020-12-31T03:19:40.000Z",
    'updated': null,
    'excerpt': "The bar page.",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
