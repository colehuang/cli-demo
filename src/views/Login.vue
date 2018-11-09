<template>
  <div class="login">
    <h1>This is Login page</h1>
    <div>
        <input v-model="username"/>
    </div>
    <div>
        <input/>
    </div>
    <div>
        <button @click="handleLoginAction">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
        username:''
    }
  },
  methods:{
    handleLoginAction(){
        console.log("点击登录按钮")
        localStorage.setItem('username',this.username);
        this.$router.push('/');
    }
  }
}
</script>