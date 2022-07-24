<template>
	<n-space vertical size="large">
		<n-layout has-sider style="height: 88vh;">
			<n-layout-sider
				collapse-mode="width"
				:collapsed-width="0"
				:width="240"
				:native-scrollbar="false"
				:show-collapsed-content="false"
				show-trigger="arrow-circle"
				content-style="padding-left: 30px;padding-right: 24px;"
				bordered
			>
				<h3>文档列表: </h3>
				<br>
				<div style="width: 175px;">
					<!--<span v-html="MarkdownsInside" @click="Change0"></span>-->
					<a class="Marklink"  @click = "Change0">BLOG 主页文档</a><br>
					<!-- <a class="Marklink"  @click = "Change1">Readme</a><br> -->
				</div>
			</n-layout-sider>
			<n-layout-content content-style="padding-left: 24px; padding-right: 50px;" :native-scrollbar="false">
				<div class="markdown-body">
					<!--<markdown />-->
					<component v-bind:is = "Mark" :key = "key"></component>
					<!--<components />-->
				</div>
			</n-layout-content>
		</n-layout>
	</n-space>
	
</template>

<script>
	import WebInfo from '@/components/WebInfo.md'
	import markdown from '@/components/Markdowns/a0Readme.md'
	import markdown2 from '@/components/Markdowns/a1Readme.md'
	import 'highlight.js/styles/github.css'
	import 'github-markdown-css'
	import Vue from 'vue'

	/*const files = require.context('@/components/Markdowns', false, /.md$/) //寻找 md 文件
	const components = {};
	files.keys().forEach(key => {
		components[key.replace(/(\.\/|\.md)/g, '')] = files(key).default
	});
	console.log(components);//返回一下 module有啥

	var MarkFiles = "";
	for (var i=0;i<files.keys().length;i++){
		MarkFiles = MarkFiles + 
		"<a class=\"Marklink\" " +  
		" id = \"mark" +
		i +
		"\">" +
		files.keys()[i].substring(4,files.keys()[i].length - 3) + 
		"</a>" +
		"<br>"
	}//输出列表
	console.log(MarkFiles);*/

	export default {
		components: {
			markdown,
			markdown2,
			WebInfo,
			//components,
		},
		data(){
			return{
				//MarkdownsInside: MarkFiles,
				Mark : "WebInfo",
				key : 0,
			}
		},
		methods:{
			Change0(){
				this.Mark = "markdown";
				this.key += 1;
			},
			Change1(){
				this.Mark = "markdown2";
				this.key += 1;
			}
		},
	}
</script>

<style>
	.markdown-body{
		margin-top:-24px;
		padding-left: 24px;
	}
	.SideTool{
		z-index: 1;
		font-size: 15px;
		padding-right: 50px;
		color: #000000;
		position: -webkit-sticky;
		position: sticky;
	}
	.Marklink{
		font-size: 15px;
		padding-right: 50px;
		color: #6E6E6E;
	}
	.Marklink:hover{
		/*color: #7B00E6;*/
		color: #8491A3;
	}
</style>