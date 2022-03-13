# 反馈

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
    <script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
    <div id="gitalk-container"></div>
    <script>
    var gitalk = new Gitalk({
    clientID: '72b18499edac6dd7c3cb', //Client ID
    clientSecret: '471940708d40069de045f0305aa5a0008ed984d6', //Client Secret
    repo: 'nstar-tools-docs',//仓库名称
    owner: 'nstarmc',//仓库拥有者
    admin: ['nstarmc'],
    id: location.href, // Ensure uniqueness and length less than 50
    distractionFreeMode: false // Facebook-like distraction free mode
    })
    
    gitalk.render('gitalk-container')
    </script>
