<script>
	import {saveAs} from 'file-saver';
	const files = require.context('@/components/Markdowns', false, /.md$/) //寻找 md 文件
	const components = {};
	files.keys().forEach(key => {
		components[key.replace(/(\.\/|\.md)/g, '')] = files(key).default
	});
	console.log(components);//返回一下 module有啥

	var MarkFiles = "";
	for (var i=0;i<files.keys().length;i++){
		MarkFiles = MarkFiles + 
		"<a class=\"Marklink\" " +  
		" @click = \"Change" +
		i +
		"\">" +
		files.keys()[i].substring(4,files.keys()[i].length) + 
		"</a>" +
		"<br>"
	}//输出列表
	console.log(MarkFiles);
	let str = new Blob([MarkFiles], {type: 'text/plain;charset=utf-8'});
	saveAs(str, 'Marklist.vue');
</script>