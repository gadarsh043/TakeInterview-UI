<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.invalid{
  animation: invalid 2s;
  animation-iteration-count: infinite;
  border: solid 2px;
}
@keyframes invalid {
  0% { border-color: red; }
  50% { border-color: white; }
  100% { border-color: red; }
}
.p{
  color: red;
  position: fixed;
  padding-left: 320px;
  font-size: 10px;
  font-style: normal;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
