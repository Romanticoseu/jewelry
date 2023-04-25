<template>
    <div class="container">
        <div class="header-nav">
            <div class="tou">
                <div class="logo">
                    <a href="#/home">
                        <img src="../assets/img/logo.png" alt="希望玉雕坊" width="350">
                    </a>
                </div>
                <div class="content-nav">
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
.container{
    width: 100%;
}
.logo {
    margin-left: 500px;
    position: absolute;
    z-index: 9999;
}
.tou{
    margin: 0px auto;
}
.header-nav {
    height: 120px;
    line-height: 100px;
    background: url(../assets/img/index_01.jpg) repeat-x;
}
.content-nav{
    margin: 0 auto;
    clear: both;
    padding-left: 900px;
    overflow: hidden;
    
} 
.header-nav ul {
    list-style: none;
}
.header-nav ul li{
    float:  left;
    margin-right: 60px; 
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