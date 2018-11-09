<template>
  <div class="home">
       <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="menuClick">
        <MenuItem name="/gamelist" to="/gamelist">
            <Icon type="ios-paper" />
            游戏列表
        </MenuItem>
        <MenuItem name="/sanbox" to="/sanbox">
            <Icon type="ios-people" />
            沙盒账号管理
        </MenuItem>
         <MenuItem name="/appsflyer" to="/appsflyer">
            <Icon type="ios-people" />
            AF账号管理
        </MenuItem>
        <MenuItem name="/about" to="/about">
            <Icon type="ios-construct" />
            About
        </MenuItem>
    </Menu>
    <router-view></router-view>
    <!-- <p @click="handleCity">{{this.$store.state.city}}</p> -->
    <!-- <p @click="handleCity">{{this.city}}</p> -->
   
  </div>
</template>


<script>

export default {
  name: "home",
  components: {},
  data() {
    return {
      theme1: "primary",
    };
  },
  methods: {
    menuClick(name){
      console.log(name)
      // this.$router.push(name)
    }
  }
};
</script>
