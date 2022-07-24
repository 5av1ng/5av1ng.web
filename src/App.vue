<template>
<n-loading-bar-provider>
	<n-message-provider>
		<n-notification-provider>
			<n-dialog-provider>
				<TopHeader />
				<!-- <List /> -->
				<!--<MainPage />-->
				<router-view />
			</n-dialog-provider>
		</n-notification-provider>
	</n-message-provider>
</n-loading-bar-provider>
</template>


<script>
	//import MainPage from './components/MainPage.vue'
	import TopHeader from './components/TopHeader.vue'
	import { defineComponent } from "vue";
	//import List from './components/List.vue'

	export default defineComponent({
		name: 'App',
		components: {
			//MainPage,
			TopHeader,
			//List,
		},
	});

</script>

<style>
	::-webkit-scrollbar {
				width: 0 !important;
		}
		::-webkit-scrollbar {
				width: 0 !important;height: 0;
		}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.hello{
		width: 100%;
		height: 100%;
	}
</style>