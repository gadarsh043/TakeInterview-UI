<template>
  <div class="page3container">
    <headerpage :pageNo="this.pageNo" />
    <br>
    <div class="subjectdetails">
      <div class="subjects">
        <table style="border-collapse: collapse;"> 
          <tr @click="opencomputer" v-if="computer" class="computerselected">Computer</tr>
          <tr @click="opencomputer" v-else>Computer</tr>
          <tr @click="openmath" v-if="math" class="mathselected">Math</tr>
          <tr @click="openmath" v-else>Math</tr>
          <tr @click="openlanguage" v-if="language" class="languageselected">Language</tr>
          <tr @click="openlanguage" v-else>Language</tr>
        </table>
      </div>
      <div class="topics">
        <div class="computertopics" v-if="computer">
          <input type="checkbox" :checked="MySql" id="MySql" name="MySql" value="MySql">
          <label for="MySql"> MySQL</label><br>
          <input type="checkbox" id="VueJS" name="VueJS" value="VueJS">
          <label for="VueJS"> VueJS</label><br>
          <input type="checkbox" id="Java" name="Java" value="Java">
          <label for="Java"> Java</label><br>
          <input type="checkbox" id="MongoDB" name="MongoDB" value="MongoDB">
          <label for="MongoDB"> MongoDB</label><br>
          <input type="checkbox" id="React" name="React" value="React">
          <label for="React"> React</label><br>
          <input type="checkbox" id="NodeJs" name="NodeJs" value="NodeJs">
          <label for="NodeJs"> NodeJs</label><br>
        </div>

        <div class="mathtopics" v-if="math">
          <input type="checkbox" :checked="Algebra" id="Algebra" name="Algebra" value="Algebra">
          <label for="Algebra"> Algebra</label><br>
          <input type="checkbox" id="Calculus" name="Calculus" value="Calculus">
          <label for="Calculus"> Calculus</label><br>
          <input type="checkbox" id="Complex Analysis" name="Complex Analysis" value="Complex Analysis">
          <label for="Complex Analysis"> Complex Analysis</label><br>
          <input type="checkbox" id="Differential Equations" name="Differential Equations" value="Differential Equations">
          <label for="Differential Equations"> Differential Equations</label><br>
          <input type="checkbox" id="Fourier Series" name="Fourier Series" value="Fourier Series">
          <label for="Fourier Series"> Fourier Series</label><br>
          <input type="checkbox" id="Probability" name="Probability" value="Probability">
          <label for="Probability"> Probability</label>
        </div>

        <div class="languagetopics" v-if="language">
          <input type="checkbox" :checked="Hindi" id="Hindi" name="Hindi" value="Hindi">
          <label for="Hindi"> Hindi</label><br>
          <input type="checkbox" id="English" name="English" value="English">
          <label for="English"> English</label><br>
          <input type="checkbox" id="Telugu" name="Telugu" value="Telugu">
          <label for="Telugu"> Telugu</label><br>
          <input type="checkbox" id="Oriya" name="Oriya" value="Oriya">
          <label for="Oriya"> Oriya</label><br>
          <input type="checkbox" id="Marathi" name="Marathi" value="Marathi">
          <label for="Marathi"> Marathi</label><br>
          <input type="checkbox" id="Punjabi" name="Punjabi" value="Punjabi">
          <label for="Punjabi"> Punjabi</label>
        </div>
      </div>
    </div>
    <footerpage :pageNo="this.pageNo" />
  </div>
</template>

<script type="application/javascript" src="../views/js/page3.js">
</script>

<style scoped>
.subjectdetails{
  width: 100%;
  height: 530px;
  /* border: solid black 1px; */
  overflow: scroll;
  border: solid black 1px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 19px;
}
tr{
  border: solid black 1px;
  cursor: pointer;
  background-color: rgb(222 219 219);
}
tr:hover{
  background-color: rgb(168, 168, 168);;
}
.computerselected{
  background-color: white;
  border-left: solid 3px orange;
}
.mathselected{
  background-color: white;
  border-left: solid 3px orange;
}
.languageselected{
  background-color: white;
  border-left: solid 3px orange;
}
.subjects{
  display:block;
  width:20%;
  margin-top: 80px;
}
.topics{
  display:flex;
  width:70%;
  /* border:solid black 1px; */
  font-size: 40px;
}
table{
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 275px;
  text-align: left;
  font-size: 40px;
  font-family: sans-serif;
}
.computertopics{
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}
.mathtopics{
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}
.languagetopics{
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
}
</style>