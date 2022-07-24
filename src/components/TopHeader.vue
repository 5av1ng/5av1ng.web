<template>
    <div class="sticky">
        <n-page-header subtitle="或许明天就更新了"><!--头部副标题-->
            <template #title><!--头部标题-->
                <n-space>
                    <router-link to='/'>
                        <a style="padding-left: 30px;text-decoration: none; color: #000000">-Saving-</a>
                    </router-link>
                </n-space>
            </template>
            <template #extra><!--头部按钮-->
                <n-space>
                    <router-link class="link" to='/'>主页</router-link>
                    <router-link class="link" to='/BLOG'>BLOG</router-link>
                    <router-link class="link" to='/WebInfo'>友情链接</router-link>
                    <a class="link">我不知道写啥了所以这个是占位置的</a>
                </n-space>
            </template>
        </n-page-header>
        <n-divider />
    </div>
</template>

<script>
    export default {
        data () {
            return {
                theme: 'light'
            }
        }
    }
</script>

<style>
    /*头部条粘性定位和背景*/
    .sticky{
        position: -webkit-sticky;
        position: sticky;
        padding-top: 20px;
        top: 0;
        background-color:#FFFFFF;
        min-width: 1250px;
        z-index: 114514;
    }
    /*头部条按钮样式*/
    .link{
        font-size: 15px;
        padding-right: 50px;
        color: #000000;
    }
    .link:hover{
        /*color: #7B00E6;*/
        color: #8491A3;
    }
</style>