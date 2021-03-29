<template>
  <div class="headercontainer">
      <div class="page">
        <div id="page1" class="pageno page1" v-if="pageNo > 1" style="cursor:not-allowed" >
          ✓
        </div>
        <div id="page1" class="pageno page1" v-else style="cursor:not-allowed">
          1
        </div>
        
        <div class="pagedetails pageId" v-if="pageNo === 1" style="cursor:not-allowed">
          Personal
        </div>
        <div class="pagedetails" v-else style="cursor:not-allowed">
          Personal
        </div>
      </div>
      <!-- <svg>
          <line stroke-width="1px" stroke="#000000"  x1="0" y1="0" x2="100" y2="0" id="mySVG"/>
        </svg> -->
        <p>------------------------------------</p>
      <div class="page">
        <div id="page1" class="pageno page1" v-if="pageNo > 2" style="cursor:not-allowed">
          ✓
        </div>
        <div id="page2" class="pageno page2" v-else style="cursor:not-allowed">
          2
        </div>
        <div class="pagedetails pageId" v-if="pageNo === 2" style="font-size:20px;cursor:not-allowed">
          Profile
        </div>
        <div class="pagedetails" v-else style="cursor:not-allowed">
          Profile
        </div>
      </div>
      <p>------------------------------------</p>
      <div class="page page3">
        <div id="page1" class="pageno page1" v-if="pageNo > 3" style="cursor:not-allowed">
          ✓
        </div>
        <div id="page3" class="pageno" v-else style="cursor:not-allowed">
          3
        </div>
        <div class="pagedetails pageId" v-if="pageNo === 3" style="cursor:not-allowed">
          Expertise
        </div>
        <div class="pagedetails" v-else style="cursor:not-allowed">
          Expertise
        </div>
      </div>
      <p>------------------------------------</p>
      <div class="page page4">
        <div id="page4" class="pageno" style="cursor:not-allowed">
          4
        </div>
        <div class="pagedetails pageId" v-if="pageNo === 4" style="font-size:20px;cursor:not-allowed">
          Interview
        </div>
        <div class="pagedetails" v-else style="cursor:not-allowed">
          Interview
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'headerpage',
  props:['pageNo']
}
</script>

<style scoped>
.headercontainer{
  display: flex;
  /* justify-content: space-evenly; */
  padding: 20px 0px 20px 0px;
  /* border: solid black 1px; */
  overflow: scroll;
  padding-left: 20%;
}
p{
  color: orange;
}
.pageno{
  height: 15px;
  width: 25px;
  padding: 15px;
  border-radius: 100%;
  color: black;
  border: dotted orange;
  text-align: center;
}
.pagedetails{
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.349);
}
.page1{
  background-color: rgba(255, 166, 0, 0.719);
}
.pageId{
  color: black;
}
</style>