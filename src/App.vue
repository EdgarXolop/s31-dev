<template>
  <div class="container is-paddingless">
    <navbar :text.sync="searchTxt" ></navbar>
    <div class="columns">
      <div class="column is-12">
        <br>
        <h5 class="title is-5">{{msg}}</h5>
      </div>
    </div>
    <div class="columns">
      <div class="column is-8">
        <domain v-for="(d,$index) in list" 
          :key="$index" :domain="d" :index="$index" :buy="buy"
          v-if="d.name.trim().indexOf(searchTxt.trim())!=-1"> </domain>
      </div>
      <div class="column is-4 columns saved-main">
        <saved :saved.sync="saved" :buyback="buyback"></saved>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/NavBar';
import domain from './components/Domain';
import saved from './components/Saved';

export default {
  name: 'app',
  data () {
    return {
      searchTxt:"",
      msg: 'POPULAR EXTENSIONS',
      list:[
        {
          name: "fishcake.com",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fishcake.net",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fishcake.org",
          price: "12.00",
          currency: "$",
          available: false
        },
        {
          name: "fishcake.co",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fishcake.io",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fishcake.com.co",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fishcake.ca/ke",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "foobar.com",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "foobar.net",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "foobar.org",
          price: "12.00",
          currency: "$",
          available: false
        },
        {
          name: "foobar.co",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "foobar.io",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "foobar.com.co",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "foobar.ca/ke",
          price: "12.00",
          currency: "$",
          available: true
        }
      ],
      saved: [
        {
          name: "cake.com",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "bigcake.org",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "chocolatecake.co",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fishcakes4ever.io",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fishcake.com.co",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fish.ca/ke",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fi.sh/cake",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fish/cake",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "f.is/hcake",
          price: "12.00",
          currency: "$",
          available: true
        },
        {
          name: "fi/shcake",
          price: "12.00",
          currency: "$",
          available: true
        }
      ]
    }
  },
  methods:{
    buy(index){
      this.saved.push(JSON.parse(JSON.stringify(this.list[index])));
      this.list.splice(index,1);
    },
    buyback(index){
      this.list.push(JSON.parse(JSON.stringify(this.saved[index])));
      this.saved.splice(index,1);
    }
  },
  watch:{
    searchTxt(val){
      console.log(val)
    }
  },
  components:{
    navbar,
    domain,
    saved
  }
}
</script>

<style lang="sass" scoped>
  .saved-main
    padding-right: 0px
</style>
