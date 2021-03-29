export default {
  name:'validate',
  methods:{
    validate(unique,passVal){
      switch(unique){
        case "name":
          if (this.checkSomething(passVal)) {
            this.nameValidity = "valid";
          } else {
            this.nameValidity = "invalid";
          }break;
        case "email":
          if (this.checkEmail(passVal)) {
            this.emailValidity = "valid";
          } else {
            this.emailValidity = "invalid";
          }
          break;
        case "university":
          if (this.checkSomething(passVal)) {
            this.univeristyValidity = "valid";
          } else {
            this.univeristyValidity = "invalid";
          }
          break;
        case "major":
          if (this.checkSomething(passVal)) {
            this.majorValidity = "valid";
          } else {
            this.majorValidity = "invalid";
          }
          break;
        case "graduation":
          if (this.checkDate(passVal)) {
            this.graduationValidity = "valid";
          } else {
            this.graduationValidity = "invalid";
          }
          break;
        case "mobile":
          if (this.checkMobile(passVal)) {
            this.mobileValidity = "valid";
          } else {
            this.mobileValidity = "invalid";
          }
          break;
        case "aboutyou":
          if (this.checkSomething(passVal)) {
            this.aboutYouValidity = "valid";
          } else {
            this.aboutYouValidity = "invalid";
          }
          break;
        case "teachingexperience":
          if (this.checkSomething(passVal)) {
            this.teachingExperienceValidity = "valid";
          } else {
            this.teachingExperienceValidity = "invalid";
          }
          break;
        case "question1":
          if (this.checkSomething(passVal)) {
            this.question1Validity = "valid";
          } else {
            this.question1Validity = "invalid";
          }
          break;
        case "question2":
          if (this.checkSomething(passVal)) {
            this.question2Validity = "valid";
          } else {
            this.question2Validity = "invalid";
          }
          break;
        case "question3":
          if (this.checkSomething(passVal)) {
            this.question3Validity = "valid";
          } else {
            this.question3Validity = "invalid";
          }
          break;
      }
    },
    checkSomething(value) {
      if (value === "") {
        return false;
      } else {
        let format = /^[a-zA-Z\s]*$/;
        if (value.match(format)) {
          return true;
        } else {
          console.log("false");
          return false;
        }
      }
    },
    checkEmail(value) {
      let mailformat = /^[^]+@[^]+\.[a-z]{2,3}$/;
      if (value.match(mailformat)) {
        return true;
      } else {
        return false;
      }
    },
    checkMobile(value) {
      let mobileformat = /[6-9]{1}[0-9]{9}$/;
      let mobileformat2 = 1234567890
      if (value.match(mobileformat) && value != mobileformat2) {
        return true;
      } else {
        return false;
      }
    },
    checkDate(value){
      let dateformat = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/;
      if (value.match(dateformat)) {
        return true;
      } else {
        return false;
      }
    }
  }
}