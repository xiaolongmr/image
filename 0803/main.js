// Details
// Author:  星河城野
// Created at: 2022/6/24 20:03
// Updated at：2022/7/24 20:49
// 以后主要靠修改这个

// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// ==========✨公共区✨✨==========✨==========✨==========✨==========✨==========✨==========✨==========✨==========✨==========

// 其实这是一个json文件
var txt1 = '{ "sites" : [' +
    '{ "hello":"(｡･∀･)ﾉﾞ嗨，欢迎发现新大陆，夏dj导航站取名来自我的室友，本站是方便自己和朋友而存在的" , "url":"www.1nav.ml" },' +
    '{ "hello":"备用网站1" , "url":"www.1nav.cf" },' +
    '{ "hello":"备用网站2" , "url":"xiaolongmr.github.io" } ]}';
var obj = eval("(" + txt1 + ")");

// 引入的用户离开本站标题的变化
var OriginTitile = document.title,
    titleTime;
document.addEventListener("visibilitychange", function() {
    document.hidden ? (document.title = "(つェ⊂)我藏好了哦~ " + OriginTitile, clearTimeout(titleTime)) : (document.title = "(*´∇｀*) 被你发现啦~ " + OriginTitile, titleTime = setTimeout(function() {
        document.title = OriginTitile
    }, 2e3))
});
//

// 弹窗部分
function displayAlert(type, data, time) {

    var lunbo = document.createElement("div");

    if (type == "success") {
        lunbo.style.backgroundImage = "linear-gradient(90deg, #74EBD590 0%, #9FACE6 100%)";
    } else if (type == "error") {
        lunbo.style.backgroundImage = "linear-gradient(147deg, #FFE53B 0%, #FF252590 74%)";
    } else if (type == "info") {
        lunbo.style.backgroundImage = "linear-gradient(90deg, #FEE14090 0%, #FA709A 100%)";
    } else if (type == "dark") {
        lunbo.style.backgroundImage = "linear-gradient(180deg, #7a9edc 0%, #b980a990 100%)";

    } else {
        console.log("入参type错误");
        return;
    }
    lunbo.id = "lunbo";
    lunbo.style.position = "fixed";
    // lunbo.style.position = "absolute";
    // lunbo.style.width = "200px";
    // lunbo.style.height = "60px";
    // lunbo.style.marginLeft = "-100px";
    lunbo.style.transform = "translate(-50%)";
    // lunbo.style.marginTop = "-10px";
    // lunbo.style.backgroundAttachment = "fixed";
    lunbo.style.backdropFilter = "blur(.1rem)";
    // lunbo.style.webkitFilter = "blur(.1rem)";
    lunbo.style.webkitBackdropFilter = "blur(.1rem)";
    lunbo.style.left = "50%";
    lunbo.style.top = "20%";
    lunbo.style.color = "white";
    lunbo.style.fontSize = "15px";
    lunbo.style.borderRadius = "15px";
    lunbo.style.textAlign = "center";
    lunbo.style.lineHeight = "25px";
    lunbo.style.alignItems = "center";
    lunbo.style.padding = "10px 30px";
    lunbo.style.zIndex = "999";
    if (document.getElementById("lunbo") == null) {
        document.body.appendChild(lunbo);
        lunbo.innerHTML = data;
        setTimeout(function() {
            document.body.removeChild(lunbo);
        }, time);
    }
}

function test0() {
    displayAlert("success", "账号：1nav\n密码：1nav", 1500);
}

function test1() {
    displayAlert("error", "暂无权限", 1500);
}

function test2() {
    displayAlert("info", "网易云id缺失", 1500);
}

function test3() {
    displayAlert("dark", "<p style='text-align: start'>Alt+Z:打开夜间模式;<br>Alt+X:关闭;<br>Alt+↑:增加亮度;<br>Alt+↓:降低亮度</p>", 3000);
}

function test4() {
    displayAlert("success", "<img style='width: 100px;' src='https://p.qlogo.cn/hy_personal/3e28f14aa05168421bd439e7b002fdc3119da81188c90c7ce58c5b5baef7880b/0.png' alt='视传人' title='视传人' referrerpolicy='no-referrer' />视传人 , 视传魂 , 视传都是人上人!", 1500);
}

function test5() {
    displayAlert("success", "<img onclick=window.location.reload(); style='width: 20px; position:absolute; margin:-5px 0px 0px 50%; transform:translate(-25px)' src='https://1nav.ml/img/clear.svg'><div class='card-widget card-info'><div class=item-headline><span>恋爱清单</span></div><div style='text-align: center; color: #888; font-size: 15px; padding: 10px'><div style='width: 220px; margin: 0 auto'><img class='love'src='https://thirdqq.qlogo.cn/g?b=sdk&k=yqjbmdENrko19T7mjIc3vg&s=640&t=1655292317'alt='love'title='小张'style='width: 60px; border-radius: 50%; transition: all .5s;'/><img src='https://m.360buyimg.com/babel/jfs/t1/28239/30/18086/3736/62d530cbE02974f98/e57f9bf1e0ce61c8.gif'alt='love'style='width: 60px; border-radius: 50%'/><img class='love'src='https://thirdqq.qlogo.cn/g?b=sdk&k=Bev4kt2qt6ZBMfNLYbGtSw&s=640&t=1657859177'alt='love'title='小陈'style='width: 60px; border-radius: 50%;transition: all .5s;'/></div><p id='lovepyqSitetime2' style='font-size:0.8rem;margin-top:16px;background:linear-gradient(to right,red,blue);-webkit-background-clip:text;color:transparent;' ></p><div class=author-info__description>If the moon smiled,she would resemble you.</div ></div>", 2500);
};

function test6() {
    displayAlert("info", "网易云id缺失", 1500);
};

function test7() {
    displayAlert("info", "<img onclick=window.location.reload(); style='width: 20px; position:absolute; margin:-5px 0px 0px 50%; transform:translate(-25px)' src='https://1nav.ml/img/clear.svg'></p><p style='text-align: start'>抱歉，您所使用的浏览器无法完成此操作<br>请使用 Ctrl + D 将本页加入收藏夹！<br>其实是我不会写😅 </p>", 2000);
};

function test8() {
    displayAlert("info", "<img onclick=window.location.reload(); style='width: 20px; position:absolute; margin:-5px 0px 0px 50%; transform:translate(-25px)' src='https://1nav.ml/img/clear.svg'><p>开发中,玩会游戏吧...</p><iframe  src=https://game.crisp.chat style='transform: translate(-50%); border-radius: 20px' height=600 width=1200 scrolling='no' frameborder='0' ></iframe>", 1000000);
}
// 弹窗结束

// 收藏本站
function addFavorite(e, t) {
    var n, i;
    "object" != typeof t ? (n = document.title, i = location.href) : (n = t.title || document.title, i = t.url || location.href);
    try {
        window.external.addFavorite(i, n)
    } catch (o) {
        window.sidebar ? (e.href = i, e.title = n, e.rel = "sidebar") : onclick = test7()
    }
};
//

// 天气模块
! function(e, t, n, i, o, a, c, d) {
    d = function() { a = t.createElement(n), c = t.getElementsByTagName(n)[0], a.src = o, a.charset = "utf-8", a.async = 1, c.parentNode.insertBefore(a, c) }, e.SeniverseWeatherWidgetObject = i, e[i] || (e[i] = function() {
        (e[i].q = e[i].q || []).push(arguments)
    }), e[i].l = +new Date, e.attachEvent ? e.attachEvent("onload", d) : e.addEventListener("load", d, !1)
}(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt(((new Date).getTime() / 1e8).toString(), 10)), window.SeniverseWeatherWidget("show", { flavor: "slim", location: "WW3M6GBCXPV8", geolocation: !0, language: "zh-Hans", unit: "c", theme: "auto", token: "8df27f18-9e77-492e-b2bc-e704b089a8b0", hover: "disabled", container: "tp-weather-widget" });
//

// 更换更新的一些样式a
var css = document.getElementsByTagName('link')[1]; //这里是替换里面的图标文件，不更改源文件直接替换
css.href = '//fastly.jsdelivr.net/gh/xiaolongmr/test@main/css/icon220412.css';
// 


// 🌞🌚夜间模式的公用部分放在这里了，其余部分在右键菜单的cyy_menu.js里面
var brightness;
// 显示遮罩

function container(brightness) {
    if (typeof(div) == 'undefined') {
        div = document.createElement('div');
        div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid;z-index:998;');
        document.body.appendChild(div);
    } else {
        div.style.display = '';
    }
    div.style.outlineColor = 'rgba(0,0,0,' + brightness + ')';
}
// 🌞🌚夜间模式end



// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// ==========🏡index.html🏡==========================🏡==========================🏡==========================🏡===================================================================







// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// ==========🎉comments.html🎉=====================🎉=================🎉=================🎉=================🎉========================================================
// tips的文案

// function gxzh() { //共享账号的函数 gxzh 现在用不到了
//     window.alert("请记住以下账号密码\n\n  账号：1nav \n  密码：1nav");
// }
// gxzh();  //不能立即调用，得手动点击调用

// 共享账号
function tips() {
    document.getElementById("dome").innerHTML = "<code><font color="hotpink">使用的国际版账号，数据库拉取可能会慢，留言可以在匿名聊天室或者右下角网站客服</font></code><br><strong>1</strong> (未开放注册) 可使用 <font onclick=test0() color=hotpink> 👉共享账号👈 </font> 进行登录留言<br> <strong>2</strong> 右下角客服（站长）头像点击对话";
};


// 恋爱时间部分
function lovepyqSitetime2() {
    window.setTimeout("lovepyqSitetime2()", 1000);
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    // 时间设置
    var t1 = Date.UTC(2022, 6, 3, 24, 00, 00); //年，月，日，时，分，秒
    var t2 = Date.UTC(
        todayYear,
        todayMonth,
        todayDate,
        todayHour,
        todayMinute,
        todaySecond
    );
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor(diff / days - diffYears * 365);
    var diffHours = Math.floor(
        (diff - (diffYears * 365 + diffDays) * days) / hours
    );
    var diffMinutes = Math.floor(
        (diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
        minutes
    );
    var diffSeconds = Math.floor(
        (diff -
            (diffYears * 365 + diffDays) * days -
            diffHours * hours -
            diffMinutes * minutes) /
        seconds
    );
    document.getElementById("lovepyqSitetime2").innerHTML = "我们相<img class='heartgit' style='width: 20px; vertical-align: middle;' src='https://p.qlogo.cn/hy_personal/3e28f14aa051684243963d5396c2a938078a85c23f2eed887938535a772e251e/0.png'>了：</br>" + diffYears + "年" + diffDays + "天" + diffHours + "时" + diffMinutes + "分" + diffSeconds + "秒啦";

};
lovepyqSitetime2();

// 恋爱时间end

// 右键菜单 html转JavaScript
document.write("<ul id=\"cyy_menu\">");
document.write("    <li id=\"cyy_t1\">⟰ &nbsp;首页<\/li>");
document.write("    <li class=\"hr_break\"><\/li>");
document.write("    <li id=\"cyy_t2\">◀ &nbsp;返回<\/li>");
document.write("    <li id=\"cyy_t3\">⇨ &nbsp;前进<\/li>");
document.write("    <li id=\"cyy_t4\">⟳ &nbsp;刷新<\/li>");
document.write("    <li id=\"cyy_t5\">✐ &nbsp;日志<\/li>");
document.write("    <li class=\"hr_break\"><\/li>");
document.write("    <li id=\"cyy_t6\">👁 &nbsp;护眼模式 <\/li>");
document.write("    <li id=\"cyy_t7\">▣ &nbsp;更换背景<\/li>");
document.write("    <li id=\"cyy_t8\">♬ &nbsp;暂停/播放音乐 <\/li>");
document.write("    <li class=\"hr_break\"><\/li>");
// 下面是测试的
document.write("    <li id=\"cyy_t9\">&nbsp;小张&nbsp;<img class='heartgit' style='width: 15px; vertical-align: middle;' src='https://p.qlogo.cn/hy_personal/3e28f14aa051684243963d5396c2a938078a85c23f2eed887938535a772e251e/0.png'>&nbsp;小陈 <\/li>");
document.write("    <li id=\"cyy_t10\">☘ &nbsp;开发中... <\/li>");
document.write("<\/ul>");
document.write("<!-- 右键菜单js -->");


window.addEventListener('contextmenu', RightClickMenu);
const rightMenu = document.querySelector('#cyy_menu');

function RightClickMenu(e) {
    e.preventDefault();
    rightMenu.style.display = 'block';
    let x = e.clientX,
        y = e.clientY,
        menuWidth = rightMenu.offsetWidth,
        menuHeight = rightMenu.offsetHeight,
        htmlWidth = document.body.clientWidth,
        htmlHeight = document.body.clientHeight;
    if (x + menuWidth < htmlWidth) rightMenu.style.left = x + 'px';
    else rightMenu.style.left = htmlWidth - menuWidth + 'px';
    if (y + menuHeight < htmlHeight) rightMenu.style.top = y + 'px';
    else rightMenu.style.top = htmlHeight - menuHeight + "px";
}
document.body.addEventListener('click', function() {
    rightMenu.style.display = 'none';
});
document.querySelector('#cyy_menu').addEventListener('click', function(e) {
    switch (e.target.id) {
        case "cyy_t1":
            // 首页
            window.location.href = "/index.html";
            break;
        case "cyy_t2":
            // 返回
            window.history.back(-1);
            break;
        case "cyy_t3":
            // 前进
            window.history.forward(1);
            break;
        case "cyy_t4":
            // 刷新
            window.location.reload();
            break;
        case "cyy_t5":
            // 日志
            window.open("https://www.mgtv.ml/archives/1nav.html", "", "height=1000,width=500,location=0,left=200,top=100");
            break;
        case "cyy_t6":
            // 护眼模式
            // 默认右键护眼模式为0.5
            onclick = test3();
            container(0.5);
            break;
        case "cyy_t7":
            // 7
            onclick = test1();
            // window.alert("请记住以下账号密码\n\n  账号：1nav \n  密码：1nav");
            break;
        case "cyy_t8":
            // 8
            onclick = test2();

            break;
        case "cyy_t9":
            // 9 是恋爱清单
            onclick = test5();
            break;
        case "cyy_t10":
            // 10 开发中
            onclick = test8();
            break;
        default:
            console.error(e.target.id);
            break;
    }
});
