import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/Tmux使用技巧.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/Tmux使用技巧.html",
    'title': "Tmux使用技巧",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Tmux使用技巧</h1>\n<h2 id="%E5%BF%AB%E6%8D%B7%E9%94%AE">快捷键<a class="anchor" href="#%E5%BF%AB%E6%8D%B7%E9%94%AE">§</a></h2>\n<p>一般情况下 tmux 中所有的快捷键都需要和前缀快捷键 ⌃b 来组合使用（注：⌃ 为 Mac 的 control 键），以下是常用的窗格（pane）快捷键列表，大家可以依次尝试下：</p>\n<h2 id="%E7%AA%97%E6%A0%BC%E6%93%8D%E4%BD%9C">窗格操作<a class="anchor" href="#%E7%AA%97%E6%A0%BC%E6%93%8D%E4%BD%9C">§</a></h2>\n<ul>\n<li>\n<p>% 左右平分出两个窗格  （试用频率：★★★★★）</p>\n</li>\n<li>\n<p>&quot; 上下平分出两个窗格 （试用频率：★★★★）</p>\n</li>\n<li>\n<p>x 关闭当前窗格</p>\n</li>\n<li>\n<p>{ 当前窗格前移</p>\n</li>\n<li>\n<p>} 当前窗格后移</p>\n</li>\n<li>\n<p>; 选择上次使用的窗格</p>\n</li>\n<li>\n<p>o 选择下一个窗格，也可以使用上下左右方向键来选择</p>\n</li>\n<li>\n<p>space 切换窗格布局，tmux 内置了五种窗格布局，也可以通过 ⌥1 至 ⌥5来切换</p>\n</li>\n<li>\n<p>z 最大化当前窗格，再次执行可恢复原来大小</p>\n</li>\n<li>\n<p>q 显示所有窗格的序号，在序号出现期间按下对应的数字，即可跳转至对应的窗格</p>\n</li>\n</ul>\n<h2 id="%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C">窗口操作<a class="anchor" href="#%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C">§</a></h2>\n<p>tmux 除了窗格以外，还有窗口（window） 的概念。依次使用以下快捷键来熟悉 tmux 的窗口操作：</p>\n<ul>\n<li>c 新建窗口，此时当前窗口会切换至新窗口，不影响原有窗口的状态</li>\n<li>p 切换至上一窗口</li>\n<li>n 切换至下一窗口</li>\n<li>w 窗口列表选择，注意 macOS 下使用 ⌃p 和 ⌃n 进行上下选择</li>\n<li>&amp; 关闭当前窗口</li>\n<li>, 重命名窗口，可以使用中文，重命名后能在 tmux 状态栏更快速的识别窗口 id</li>\n<li>0 切换至 0 号窗口，使用其他数字 id 切换至对应窗口</li>\n<li>f 根据窗口名搜索选择窗口，可模糊匹配</li>\n</ul>\n<h2 id="%E4%BC%9A%E8%AF%9D%E6%93%8D%E4%BD%9C">会话操作<a class="anchor" href="#%E4%BC%9A%E8%AF%9D%E6%93%8D%E4%BD%9C">§</a></h2>\n<p>如果运行了多次 tmux 命令则会开启多个 tmux 会话（session）。在 tmux 会话中，使用前缀快捷键 ⌃b 配合以下快捷键可操作会话：</p>\n<ul>\n<li>$ 重命名当前会话</li>\n<li>s 选择会话列表</li>\n<li>d detach 当前会话，运行后将会退出 tmux 进程，返回至 shell 主进程</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Tmux\u4F7F\u7528\u6280\u5DE7"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%BF%AB%E6%8D%B7%E9%94%AE">快捷键<a class="anchor" href="#%E5%BF%AB%E6%8D%B7%E9%94%AE">§</a></h2>\n<p>一般情况下 tmux 中所有的快捷键都需要和前缀快捷键 ⌃b 来组合使用（注：⌃ 为 Mac 的 control 键），以下是常用的窗格（pane）快捷键列表，大家可以依次尝试下：</p>\n<h2 id="%E7%AA%97%E6%A0%BC%E6%93%8D%E4%BD%9C">窗格操作<a class="anchor" href="#%E7%AA%97%E6%A0%BC%E6%93%8D%E4%BD%9C">§</a></h2>\n<ul>\n<li>\n<p>% 左右平分出两个窗格  （试用频率：★★★★★）</p>\n</li>\n<li>\n<p>&quot; 上下平分出两个窗格 （试用频率：★★★★）</p>\n</li>\n<li>\n<p>x 关闭当前窗格</p>\n</li>\n<li>\n<p>{ 当前窗格前移</p>\n</li>\n<li>\n<p>} 当前窗格后移</p>\n</li>\n<li>\n<p>; 选择上次使用的窗格</p>\n</li>\n<li>\n<p>o 选择下一个窗格，也可以使用上下左右方向键来选择</p>\n</li>\n<li>\n<p>space 切换窗格布局，tmux 内置了五种窗格布局，也可以通过 ⌥1 至 ⌥5来切换</p>\n</li>\n<li>\n<p>z 最大化当前窗格，再次执行可恢复原来大小</p>\n</li>\n<li>\n<p>q 显示所有窗格的序号，在序号出现期间按下对应的数字，即可跳转至对应的窗格</p>\n</li>\n</ul>\n<h2 id="%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C">窗口操作<a class="anchor" href="#%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C">§</a></h2>\n<p>tmux 除了窗格以外，还有窗口（window） 的概念。依次使用以下快捷键来熟悉 tmux 的窗口操作：</p>\n<ul>\n<li>c 新建窗口，此时当前窗口会切换至新窗口，不影响原有窗口的状态</li>\n<li>p 切换至上一窗口</li>\n<li>n 切换至下一窗口</li>\n<li>w 窗口列表选择，注意 macOS 下使用 ⌃p 和 ⌃n 进行上下选择</li>\n<li>&amp; 关闭当前窗口</li>\n<li>, 重命名窗口，可以使用中文，重命名后能在 tmux 状态栏更快速的识别窗口 id</li>\n<li>0 切换至 0 号窗口，使用其他数字 id 切换至对应窗口</li>\n<li>f 根据窗口名搜索选择窗口，可模糊匹配</li>\n</ul>\n<h2 id="%E4%BC%9A%E8%AF%9D%E6%93%8D%E4%BD%9C">会话操作<a class="anchor" href="#%E4%BC%9A%E8%AF%9D%E6%93%8D%E4%BD%9C">§</a></h2>\n<p>如果运行了多次 tmux 命令则会开启多个 tmux 会话（session）。在 tmux 会话中，使用前缀快捷键 ⌃b 配合以下快捷键可操作会话：</p>\n<ul>\n<li>$ 重命名当前会话</li>\n<li>s 选择会话列表</li>\n<li>d detach 当前会话，运行后将会退出 tmux 进程，返回至 shell 主进程</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%BF%AB%E6%8D%B7%E9%94%AE">快捷键</a></li><li><a href="#%E7%AA%97%E6%A0%BC%E6%93%8D%E4%BD%9C">窗格操作</a></li><li><a href="#%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C">窗口操作</a></li><li><a href="#%E4%BC%9A%E8%AF%9D%E6%93%8D%E4%BD%9C">会话操作</a></li></ol></nav>'
        } }),
    'author': "YNlwys",
    'contributors': [
        "YNlwys"
    ],
    'date': "2021-01-08T02:47:15.000Z",
    'updated': null,
    'excerpt': "快捷键 一般情况下 tmux 中所有的快捷键都需要和前缀快捷键 ⌃b 来组合使用（注：⌃ 为 Mac 的 control 键），以下是常用的窗格（pane）快捷键列表，大家可以依次尝试下： 窗格操作 - % 左右平分出两个窗格 （试用频率：★★★...",
    'cover': undefined,
    'categories': [
        "技术"
    ],
    'tags': [
        "Mac",
        "快捷键"
    ],
    'blog': {
        "isPost": true,
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
            },
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
