<template>
  <div class="page4container">
    <headerpage :pageNo="this.pageNo" />
    <br>
    <div class="questions" style="display:flex">
      <div class="questionnumber">
        <table style="border-collapse: collapse;"> 
          <tr @click="question1" v-if="display1" class="question1selected">1. Question#1</tr>
          <tr @click="question1" v-else :class="{'questionvalidate': question1Validity==='valid', 'questioninvalidate': question1Validity==='invalid'}">1. Question#1</tr>
          <tr @click="question2" v-if="display2" class="question2selected">2. Question#2</tr>
          <tr @click="question2" v-else :class="{'questionvalidate': question2Validity==='valid', 'questioninvalidate': question2Validity==='invalid'}">2. Question#2</tr>
          <tr @click="question3" v-if="display3" class="question3selected">3. Question#3</tr>
          <tr @click="question3" v-else :class="{'questionvalidate': question3Validity==='valid', 'questioninvalidate': question3Validity==='invalid'}">3. Question#3</tr>
        </table>
        <!-- <div class="que" @click="question1" v-if="question1selected">1. Question#1</div>
        <div class="que" @click="question1" v-else>1. Question#1</div>
        <div class="que" @click="question2">2. Question#2</div>
        <div class="que" @click="question3">3. Question#3</div> -->
      </div>
      <hr>
      <!-- <div class="questionanswers" style="width:70%">
        <div v-if="display1">
          <p> Explain JDK, JRE and JVM?</p>
          <textarea type="question1" v-model="Question1" placeholder="Answer This" />
        </div>
        <div v-if="display2">
          <p>An encyclopedia has eight volumes. In how many ways can the eight volumes be replaced on the shelf?</p>
          <textarea type="question1" placeholder="Answer This" />
        </div>
        <div v-if="display3">
          <p>Translate water in Telugu</p>
          <textarea type="question1" placeholder="Answer This" />
        </div>
      </div> -->
      <div class="questionanswers" style="width:70%">
        <div v-for="i in Questions" :key="i.id">
          <div v-if="display1">
          <p> Explain JDK, JRE and JVM?</p>
          <textarea type="question1" :class="{invalid: question1Validity==='invalid'}" @blur="validate('question1',i.Question1)" v-model="i.Question1"  placeholder="Answer This" />
          <p class="p1" v-if="question1Validity === 'invalid'"> Please Answer The Question</p>
        </div>
        <div v-if="display2">
          <p>An encyclopedia has eight volumes. In how many ways can the eight volumes be replaced on the shelf?</p>
          <textarea type="question1" :class="{invalid : question2Validity ==='invalid'}" @blur="validate('question2',i.Question2)" v-model="i.Question2" placeholder="Answer This" />
          <p class="p1" v-if="question2Validity === 'invalid'"> Please Answer The Question</p>
        </div>
        <div v-if="display3">
          <p>Translate water in Telugu</p>
          <textarea type="question1" :class="{invalid : question3Validity==='invalid'}" @blur="validate('question3',i.Question3)" v-model="i.Question3" placeholder="Answer This" />
          <p class="p1" v-if="question3Validity === 'invalid'"> Please Answer The Question</p>
        </div>
        </div>
      </div>
    </div>
    <footerpage :pageNo="this.pageNo" />
  </div>
</template>

<script type="application/javascript" src="../views/js/page4.js">
</script>

<style scoped>
tr{
  cursor: pointer;
  background-color: rgb(222 219 219);
}
tr:hover{
  background-color: rgb(168, 168, 168);;
}
.question1selected{
  background-color: white;
  border-left: solid 3px orange;
}
.question2selected{
  background-color: white;
  border-left: solid 3px orange;
}
.question3selected{
  background-color: white;
  border-left: solid 3px orange;
}
.questionvalidate{
  background-color: lightgreen;
  border-left: solid 3px darkgreen;
}
.questioninvalidate{
  background-color: lightcoral;
  border-left: solid 3px darkred;

}
.questions{
  width: 100%;
  height: 530px;
  /* border: solid black 1px; */
  overflow: scroll;
  border: solid black 1px;
  margin-bottom: 19px;
}
.questionnumber{
  font-size: 40px;
  text-align: center;
  margin-top: 6%;
  margin-left: 36px;
}
.que{
  cursor: pointer;
}
textarea{
  width: 500px;
  height: 100px;
  font-size: 20px;
  font-family: cursive;
  font-style: italic;
}
p{
  font-size: 40px;
}
.p1{
  color: red;
  position: fixed;
  padding-left: 320px;
  font-size: 10px;
  font-style: normal;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>