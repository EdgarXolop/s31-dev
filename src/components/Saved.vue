<template>
    <div class="column is-12 saved">
            <div class="column is-5">
                <h2 class="subtitle subtitle-saved">{{titleList}}</h2>
                <div class="line"></div>
            </div>
            <div class="column is-12 ">
                <aside class="menu">
                    <ul class="menu-list">
                        <li v-for="(s,$index) in saved" :key="$index">
                            <a>
                                <span class="icon is-small" @click="buyback($index)"> 
                                    <i class="fa fa-close"></i>
                                    &nbsp;&nbsp;| 
                                </span>
                                &nbsp;&nbsp;{{s.name}}                                
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
    </div>
</template>

<script>
export default {
  name: "saved",
  props:{
    saved:{
        type: Array
    },
    buyback: {
      type: Function,
      default: function(index){
        console.log('index',index)
      }
    }
  },
  data(){
      return {
          titleList:"Saved"
      }
  }
}
</script>

<style scoped>
    .saved{
        background: #101010;
        margin-top: -58px;
    }
    .subtitle-saved{
        color: #4baaa0;
    }
    .line{
        width: 380px;
        border-bottom: 5px solid #232323;
        position: absolute;
    }
    .menu-list{
        font-size: 18px
    }
    
    .menu-list li a .icon{
        color: #101010;
    }

    .menu-list li a:hover {
        background: #595959 ;
        border-radius: 20px;
    }

    .menu-list li a:hover .icon{
        color: #373737;
    }
</style>
