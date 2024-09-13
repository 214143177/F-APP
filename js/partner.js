document.getElementById("partner").addEventListener("click", function () {
    // 弹出一个div窗口,作者信息及联系方式
    var div = document.createElement("div");
    div.style.display = "block";
    div.style.position = "fixed";
    div.style.width = "50%";
    div.style.height = "60%";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.backgroundColor = "white";
    div.style.padding = "20px";
    div.style.borderRadius = "10px";
    div.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    div.style.zIndex = "999";
    div.innerHTML = `
        <h2>感谢以下开发者的贡献</h2>
        <h3>姓名：周先生</h3>
        <p>QQ：214143177</p>
        <p>电话：13943046060</p>
        <p>邮箱：214143177@qq.com</p>
        <p>贡献：整体项目web开发，前端页面设计、后端接口设计、数据库管理、文档编写、测试、部署、运维等。</p><hr>
        <h3>姓名：李先生</h3>
        <p>QQ：123456789</p>
        <p>电话：13866688888</p>
        <p>邮箱：123456789@qq.com</p>
        <p>贡献：项目围护工程钢支撑设计模块数学公式整理和编写、维护等。</p><hr>
        <h3>姓名：王先生</h3>
        <p>QQ：123456789</p>
        <p>电话：13866688888</p>
        <p>邮箱：123456789@qq.com</p>
        <p>贡献：项目主体工程框架设计模块数学公式整理和编写、维护等。</p><hr>
        `;
    document.body.appendChild(div);
    // 创建一个 子元素 关闭按钮
    var closeBtn = div.appendChild(document.createElement("button"));
    closeBtn.innerHTML = "关闭";
    closeBtn.style.width = "100px";
    closeBtn.style.height = "30px";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "10px";
    closeBtn.style.backgroundColor = "#1e90ff";
    closeBtn.style.color = "white";
    closeBtn.style.borderRadius = "5px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.border = "none";
    closeBtn.style.outline = "none";
    closeBtn.addEventListener("click", function () {
        div.style.display = "none";
    });
});