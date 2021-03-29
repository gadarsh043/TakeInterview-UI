<template>
  <div>
    <div class="page1container">
      <headerpage :pageNo="this.pageNo" />
      <br>
      <div class="personaldetails">
          <table class="maketablecenter">
            <tr>
              <th>Name: </th>
              <td><input type="text" :class="{ invalid: nameValidity === 'invalid' }" @blur="validate('name', getName)" placeholder="Name" style="width:300px" @change="namechange" :value="getName" required></td>
            </tr>
            <p class="p" v-if="nameValidity === 'invalid'"> Please enter valid credentials</p>
            <br>
            <tr>
              <th>Email: </th>
              <td><input type="text" :class="{ invalid: emailValidity === 'invalid' }" @blur="validate('email', getEmail)" placeholder="Email" style="width:300px" @change="emailchange" :value="getEmail"></td>
            </tr>
            <tr>
            <p class="p" v-if="emailValidity === 'invalid'"> Please enter valid credentials</p>
              <br>
            <tr>
              <th>What are you? </th>
              <td>
              <input type="radio" name="whatareyou" value="University Student" @change="whatchange" id="WAUuniversity" :checked="this.x == 'University Student'">University Student
              <input type="radio" @change="whatchange2" name="whatareyou" id="WAUprofessional" value="Professional" :checked="this.x == 'Professional'">Professional</td>
            </tr>
            <br>
            <tr>
              <th>University: </th>
              <td><input type="text" :class="{ invalid: univeristyValidity === 'invalid' }" @blur="validate('university', getUniversity)" placeholder="University" style="width:300px" @change="universitychange" :value="getUniversity"></td>
            </tr>
            <p class="p" v-if="univeristyValidity === 'invalid'"> Please enter valid credentials</p>
            <br>
            <tr>
              <th>Major: </th>
              <td><input type="text" :class="{ invalid: majorValidity==='invalid'}" @blur="validate('major',getMajor)"  placeholder="Major" style="width:300px" @change="majorchange" :value="getMajor"></td>
            </tr>
            <tr>
            <p class="p" v-if="majorValidity === 'invalid'"> Please enter valid credentials</p>
            <br>
            <!-- <tr>
              <th>Graduation Date: </th>
              <td>
                <select name="Year" style="width:300px">
                  <option value="" v-for="i in years" :key="i.id">
                    <div style="display:flex; flex-wrap:wrap">
                      {{i +1970}}
                    </div>
                  </option>
                </select>
              </td>
            </tr> -->
            <tr>
              <th>Graduation Date: </th>
              <td><input type="text" :class="{ invalid: graduationValidity ==='invalid'}" @blur="validate('graduation',getGraduationDate)" placeholder="Year" onfocus="(this.type='date')" style="width:300px;" max='2021-03-24' @change="graduationchange" :value="getGraduationDate"></td>
            </tr>
            <p class="p" v-if="graduationValidity === 'invalid'"> Please enter valid credentials</p>
            <br>
            <tr>
              <th>Do you have a tax Id?</th>
              <td><input type="radio" name="taxId" id="ihave" value="ihave" @change="taxidchange" :checked="this.y == 'ihave'">I have a Tax Id <input type="radio" id="idonthave" name="taxId" value="idonthave" @change="taxidchange2" :checked="this.y == 'idonthave'">I Don't have a tax Id</td>
            </tr>
            <br>
            <tr>
              <th>Mobile: </th>
              <td><input type="text" :class="{invalid : mobileValidity==='invalid'}" @blur="validate('mobile',getMobile)" placeholder="Enter 10 digit number" style="width:300px" @change="mobilechange" :value="getMobile"></td>
            </tr>
            <p class="p" v-if="mobileValidity === 'invalid'"> Please enter valid credentials</p>
          </table>
      </div>
      <br>
      <footerpage :pageNo="this.pageNo" />
    </div>
  </div>
</template>

<script type="application/javascript" src="../views/js/page1.js">

</script>

<style scoped>
.personaldetails{
  width: 100%;
  height: 530px;
  /* border: solid black 1px; */
  overflow: scroll;
  border: solid black 1px;
}
th{
  text-align: right;
  color: rgba(0, 0, 0, 0.527);
}
input{
  margin-left: 15px;
  height: 20px;
}
select{
  margin-left: 15px;
}
.maketablecenter{
  margin-left: auto;
  margin-right: auto;
}
table{
  padding-top: 2%;
}
tr{
  margin: 20px;
}
</style>
