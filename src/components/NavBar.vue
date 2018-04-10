<template>
  <div name="navbar">
		<nav class="navbar is-dark navbar-s31">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">          
          <img src="../assets/logo.png" width="28" height="50">          
        </a>
      </div>
      <div class="navbar-item is-expanded">
        <div class="field">
            <div class="control has-icons-left ">
              <input class="input is-medium" type="text" placeholder="Search" v-model="search">
              <span class="icon is-medium is-left">
                <i class="fa fa-search"></i>
              </span>
            </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <span class="icon">
                <i class="fa fa-bookmark"></i>
              </span>
            </p>
            <p class="control">
              <a class="button is-rounded is-warning is-small" v-text="warning" href="#"></a>
            </p>
            <p class="control">
              <a class="button is-transparent " href="#">
                <i class="class fa fa-ellipsis-h"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
		</nav>
  </div>
</template>

<script>

export default {
  name: "navbar",
  props:{
    warning: {
      type: Number,
      default: 3
    },
    text:{
      type: String,
      default:""
    }
  },
  data(){
    return{
      search:""
    }
  },
  watch:{
    search(val){
      this.$emit("update:text",val)
    }
  }
}
</script>

<style scoped lang="sass">
.field
  width: 100% !important

.navbar-s31
  background: linear-gradient(to right, #df3f28, #89a9bb)

input[type="text"]
  background: transparent
  border: none
  color: #ffffff

.icon
  color: #ffffff
  
.is-transparent
  background: transparent
  border: none
  color: #ffffff

</style>
