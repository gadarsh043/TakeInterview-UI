<template>
  <div class="page2container">
    <headerpage :pageNo="this.pageNo" />
    <br>
    <div class="experiencedetails">
      <table class="maketablecenter" style="padding-top: 2%;">
        <tr>
          <th>About You: </th>
          <td><textarea type="text" :class="{ invalid: aboutYouValidity==='invalid'}" @blur="validate('aboutyou',getAboutYou)" :value='getAboutYou' @change="aboutyouchange" placeholder="Write About About" style="width:300px" /></td>
        </tr>
        <p class="p" v-if="aboutYouValidity === 'invalid'"> Please enter valid credentials</p>
        <br>
        <tr>
          <th>Teaching Experience: </th>
          <td><textarea type="text" :class="{ invalid: teachingExperienceValidity==='invalid'}" @blur="validate('teachingexperience',getTeachingExperience)" :value='getTeachingExperience' @change="teachingexperiencechange" placeholder="Tell Us about your teaching experience" style="width:300px" /></td>
        </tr>
        <p class="p" v-if="teachingExperienceValidity === 'invalid'"> Please enter valid credentials</p>
      </table>
      <br>
      <!-- WorkHistory -->
      <table class="secondtable" v-for="i in workHistory" :key="i.id">
        <tr>
          <th>Work History: </th>
          <td><input type="text" v-model="i.companyname" placeholder="Company" style="width:300px"></td>
        </tr>
        <tr>
          <th style="color:white">Teaching Experience: </th>
          <td><input type="text" v-model="i.from" placeholder="From" onfocus="(this.type='date')" style="width:138px;" :max="maxlimit" :min="fromlimit"><input type="text" v-model="i.to" placeholder="To" onfocus="(this.type='date')" @change="changefromlimit(i.to)" style="width:138px;" :min='i.from' :max="maxlimit"></td>
        </tr>
      </table>
      <table class="secondtable">
        <tr>
          <td style="cursor:pointer" @click="addanotherjob"><a style="color:blue;" href="#thirdtable">+Add Another Job</a></td><td style="color:blue;padding-left: 80px;cursor:pointer;text-decoration: underline;" @click="removeanotherjob" v-if="workHistory.length>1">-Remove Last Field </td>
        </tr>
      </table>

      <!-- EducationHistory -->
      <table id="thirdtable" class="thirdtable" v-for="i in educationHistory" :key="i.id">
        <tr>
          <th>Education: </th>
          <td><input type="text" v-model="i.name" placeholder="School" style="width:300px"></td>
        </tr>
        <tr>
          <th style="color:white">Teaching Experience: </th>
          <td><input type="text" placeholder="From" v-model="i.from" onfocus="(this.type='date')" style="width:138px;" :max="maxlimit" :min="fromlimiteducation"><input type="text" placeholder="To" v-model="i.to" onfocus="(this.type='date')" @change="changefromlimiteducation(i.to)" style="width:138px;" :min='i.from' :max="maxlimit"></td>
        </tr>
      </table>
      <table class="thirdtable">
        <tr id="thirdtableid">
          <td style="cursor:pointer" @click="addanothereducation"><a style="color:blue;" href="#thirdtableid">+Add Another Education</a></td><td style="color:blue;padding-left: 80px;cursor:pointer;text-decoration: underline;" @click="removeanothereducation" v-if="educationHistory.length>1">-Remove Last Field</td>
        </tr>
      </table>
    </div>
    <footerpage :pageNo="this.pageNo" />
  </div>
</template>

<script type="application/javascript" src="../views/js/page2.js">
</script>

<style scoped>
.experiencedetails{
  width: 100%;
  height: 530px;
  /* border: solid black 1px; */
  overflow: scroll;
  border: solid black 1px;
  margin-bottom: 19px;
}
th{
  text-align: right;
  color: rgba(0, 0, 0, 0.527);
}
input{
  margin-left: 15px;
  height: 20px;
}
textarea{
  margin-left: 15px;
  height: 80px;
  font-size: 13px;
  resize: none;
}
select{
  margin-left: 15px;
}
.maketablecenter{
  margin-left: auto;
  margin-right: auto;
}
.secondtable{
  margin-left: auto;
  margin-right: auto;
}
.thirdtable{
  margin-left: auto;
  margin-right: auto;
}
tr{
  margin: 20px;
}
</style>