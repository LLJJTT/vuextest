<template>
  <div>
    <h2 >{{msg}}</h2>
    <hr/>
    <!-- <h3>{{$store.state.count}}</h3> -->
    <h3>{{count}}</h3>
    <div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        msg:'Hello Vuex',
        token:'this is token'
      }
    },
    created(){
      console.log(this.$store)
    },
    methods:{
    },
    store,
    computed:mapState(["count"])
    // computed:{
    //   // count(){
    //   //   return this.$store.state.count
    //   // },

    // }
  }
</script>