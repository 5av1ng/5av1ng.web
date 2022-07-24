<template>
    <n-carousel
        direction="vertical"
        dot-placement="right"
        mousewheel
        draggable
        style="width: 100%; height: 92.7vh; margin-top: -25px;"
    >
        <div class="MainPagePic">
            <div style="background-color: rgba(0,0,0,0.1);width: 100%; height:100%">
                <h1 class="TextMiddle">-Saving- 的小站-</h1>
                <p class="TextSubMiddle">这里咱应该写点什么介绍自己，但是咱没想好(。﹏。)</p>
                <n-space justify="center" style="padding-top: 1vh;">
                    <router-link to="/BLOG"><n-button color="#4E566B">或许你可以看看我的BLOG</n-button></router-link>
                    <a href="https://space.bilibili.com/288706305/"><n-button color="#4E566B">或许你可以看看我的 B 站</n-button></a>
                    <router-link to="/WebInfo"><n-button color="#4E566B">或许你可以看看这里的广告</n-button></router-link>
                </n-space>
            </div>
        </div>
        <div class="MainPagePic2">
            <div style="background-color: rgba(0,0,0,0.2);width: 100%; height:100%">
                <h1 class="TextMiddle">-Saving- 的BLOG-</h1>
                <p class="TextSubMiddle">放一个普通学生的各种奇思妙想，也只有我会看吧…… (ˉ▽ˉ；)</p>
                <n-space justify="center" style="padding-top: 1vh;">
                    <router-link to="/BLOG">
                        <n-button color="#5D4141">或许你可以看看我的BLOG</n-button>
                    </router-link>
                </n-space>
            </div>
        </div>
        <div class="MainPagePic3">
            <div style="background-color: rgba(0,0,0,0.2);width: 100%; height:100%">
                <h1 class="TextMiddle">这里我也不知道写啥了</h1>
                <p class="TextSubMiddle">但是欸，三个真的比两个要好看一点！</p>
                <n-space justify="center" style="padding-top: 1vh;">
                    <router-link to="/WebInfo">
                        <n-button color="#8D8480">或许你可以看看这里的广告</n-button>
                    </router-link>
                </n-space>
            </div>
        </div>
    </n-carousel>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    #app{
        text-align: center;
    }
    .MainPagePic,.MainPagePic2,.MainPagePic3{
        min-width: 1250px;
        width: 100%;
        height: 92.7vh;
        background-repeat: no-repeat;
        background-position: 0% 25%;
        background-attachment:fixed;
        background-size: 100%;
    }
    .MainPagePic {
        background-image: url("../assets/imgs/MainPagePic.jpg");
    }
    .MainPagePic2 {
        background-image: url("../assets/imgs/MainPagePic2.jpg");
    }
    .MainPagePic3 {
        background-image: url("../assets/imgs/MainPagePic3.jpg");
    }
    .TextMiddle,.TextSubMiddle{
        color: #FFFFFE;
        text-shadow:0.5vh 0.5vh 0.9vh #4C545E;
        text-align: center;
    }
    .TextMiddle{
        font-size: 8vh;
        padding-top: 28vh;
        /*padding-right: 123vh;*/
    }
    .TextSubMiddle{
        font-size: 2.3vh;
        padding-top: 0.3vh;
        /*padding-right: 122.5vh;*/
    }
    .MainPageInfo{
        padding-top: 10vh;
        text-align: left;
    }
</style>
