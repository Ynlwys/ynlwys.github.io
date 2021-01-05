import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "folder/foo.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "folder/foo.html",
    'title': "Foo",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Foo</h1>\n<p>The foo page.</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Foo"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>The foo page.</p>'
        } }),
    'toc': null,
    'author': "Ynlwys",
    'contributors': [
        "Ynlwys"
    ],
    'date': "2020-12-31T03:19:40.000Z",
    'updated': null,
    'excerpt': "The foo page.",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
