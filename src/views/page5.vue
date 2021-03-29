<template>
  <div>
    <div v-for="i in workHistoryfn(workHistory)" :key="i.id">
      {{i}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      workHistory:[NaN],
      workHistory2:{
        companyName:NaN
      }
    }
  },
  methods:{
    workHistoryfn(value){
      console.log(value)
      return value
      // return parseInt(value)
    }
  }
}
</script>

<style>

</style>