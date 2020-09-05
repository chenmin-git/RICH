<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
	export default{
		mounted() {
		      if (this._isMobile()) {
		        alert("手机端");
		        // this.$router.replace('/m_index');
		      } else {
		        alert("pc端");
		        // this.$router.replace('/pc_index');
		      }
		    },
		    methods: {
		      //App.vue
		      _isMobile() {
		        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
		        return flag;
		      }
		  }
	}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
