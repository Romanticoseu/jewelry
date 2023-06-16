<template>
    <div class="header-nav">
        <div class="content-nav">
            <div class="logo">
                <a href="#/home">
                    <img src="../assets/img/logo.png" alt="希望玉雕坊" width="350">
                </a>
            </div>
            <ul class="nav-list" clearfix>
                <li class="nav-item">
                    <a href="#/home">网站首页</a>
                </li>
                <li class="nav-item">
                    <a href="#/center">关于我们</a>
                </li>
                <li class="nav-item">
                    <a href="#/story">产品展示</a>
                </li>
                <li class="nav-item">
                    <a href="#/news">荣誉证书</a>
                </li>
                <li class="nav-item">
                    <a href="#/about">联系我们</a>
                </li>
            <li class="nav-item">
                    <a href="#/verify">证书查验</a>
            </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
       
    }
</script>
<style scode>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.header-nav {
    width: 100%;
    height: 130px;
    background: url(../assets/img/index_01.jpg) repeat-x;
}
.content-nav{
    width: 1200px;
    height: 130px;
    margin: 0 auto;
} 
.logo {
    float: left;
}
.nav-list {
    float: right;
    margin: 50px;
}
.header-nav ul {
    height: 100px;
}
.header-nav ul li{
    float:  left;
    height: 130px;
    width: 108px;
    list-style: none;
}
.header-nav ul a{
    text-decoration: none;
    color: white;
} 
.clearfix{
    content:" ";
    display: block;
    clear:both;
    height:0;
    visibility: hidden;
}
 .header-nav ul  a:hover{
            color: orchid;
    }
</style>