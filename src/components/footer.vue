<template>
  <div class="footercontainer">
    <button class="navigate prev">
      Prev
    </button>
    <button class="navigate prev1" v-if="pageNo!==1"  @click="prevpage">
      Prev
    </button>
    <button class="navigate next" @click="nextpage" v-if="pageNo!==4">
      Next
    </button>
    <button class="navigate submit" @click="nextpage" v-if="pageNo===4" style="background-color: green;">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name:'footerpage',
  props:['pageNo'],
  data (){
    return{

    }
  },
  methods:{
    nextpage(){
      let redirect = this.$parent.changeredirect();
      if(redirect == 1){
        if(this.pageNo===1){
          this.$router.push('/2')
        }
        else if(this.pageNo===2){
          this.$router.push('/3')
        }
        else if(this.pageNo===3){
          this.$router.push('/4')
        }
        else if(this.pageNo===4){
          this.$alert('Thanks for participating, Be patience results will be displayed soon')
          setTimeout(() => { this.$router.push('/1'); location.reload()}, 2000);
        }
      }
      else{
        this.$alert('Please Fill Everthing With Valid Credentials')
      }
    },
    prevpage(){
        if(this.pageNo===2){
          this.$router.push('/1')
        }
        else if(this.pageNo===3){
          this.$router.push('/2')
        }
        else if(this.pageNo===4){
          this.$router.push('/3')
        }
    }
  }
}
</script>

<style scoped>
.footercontainer{
  width: 100%;
  display: flex;
  padding: 20px 0px 20px 0px;
  /* border: solid black 1px; */
  overflow: scroll;
  justify-content: space-between;
  position: fixed;
}
.navigate{
  width: 80px;
  padding: 15px;
  border-radius: 0% 20% 0% 20%;
  border: dotted orange;
  text-align: center;
  background-color: orange;
  border: solid black 1px;
  cursor: pointer;
}
.prev1{
  margin-left: -600px;
  /* color: white;
  display: contents; */
}
.prev{
  margin-left: 250px;
  color: white;
  display: contents;
}
.next{
  margin-right: 250px;
}
.submit{
  margin-right: 250px;
  color: white;
}
</style>