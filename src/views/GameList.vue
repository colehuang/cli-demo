<template>
  <div class="gamelist">
    <h1>This is an gamelist page</h1>
     <ul>
        <li v-for="(item,index) of list" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'

export default {
  name: 'gamelist',
  mounted() {
    this.getHomeInfo();
  },
  computed: {
    // 把vuex中的属性映射到计算属性中
   ...mapState(['city']) 
  },
  data() {
    return {
      list: []
    };
  },
  methods:{
    getHomeInfo() {
      axios
      // 接口地址
        .get("http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600")
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res.data);
      this.list = res.data
    },
    handleCity(){
      // alert('city')
      // this.$store.commit('changeCity', 'city')
      this.changeCity('city')
    },
    ...mapMutations(['changeCity']) 
  }
}
</script>