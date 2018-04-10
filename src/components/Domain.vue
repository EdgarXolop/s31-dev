<template>
    <div class="columns domain" @mouseover="over" @mouseout="leave">
      <div class="column is-1">
        <span class="icon is-small" :class="{unavailable:!domain.available,'domain-dot':domain.available}">
          <i :class="selected" v-if="domain.available"></i>
          <i :class="dot" v-if="!domain.available"></i>
        </span>
      </div>
      <div class="column is-7 domain-txt" :class="{disabled:!domain.available}">
        {{domain.name}}
      </div>
      <div class="column is-2">
        {{domain.currency}}  {{domain.price}}
      </div>
      <div class="column is-1">
        <button class="button is-rounded btn-buy" :disabled="!domain.available" @click="buy(index)">Buy now &nbsp;&nbsp;<i class="fa fa-angle-right"></i></button>
      </div>
    </div>
</template>
<script>

export default {
  name:"domain",
  props:{
    domain: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: undefined
    },
    buy: {
      type: Function,
      default: function(index){
        console.log('index',index)
      }
    }
  },
  data(){
    return{
      dot:"fa fa-circle",
      bookmark:"fa fa-bookmark",
      selected:""
    }
  },
  methods:{
    over(){
      this.selected = this.domain.available? this.bookmark : this.dot
    },
    leave(){
      this.selected = this.dot
    }
  },
  mounted(){
    this.selected = this.dot;
  }
}

</script>
<style scoped lang="sass">
.btn-buy
  background: #135a52
  color: #ffffff

.domain
  font-size: 24px
  &:hover
    background: #94bcc2

.domain-txt
  color: #14312e

.domain-dot
  color: #1eb399

.domain:hover .domain-dot i
  color: #07766a

.unavailable
  color: #d43832

.disabled
  color: #937d7d
  text-decoration-line: line-through

</style>
