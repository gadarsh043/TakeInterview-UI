import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'',
    email:'',
    whatareyou:'University Student',
    university:'',
    major:'',
    graduationdate:'',
    doyouhavetaxid:'idonthave',
    mobile:'',
    aboutyou:'',
    teachingexperience:'',
    countforwork:1,
    workhistory:[
      {
        companyname:'',
        from:'',
        to:''
      }
    ],
    educationhistory:[
      {
        name:'',
        from:'',
        to:''
      }
    ],
    MySql:'1',
    Algebra:'1',
    Hindi:'1',
    Question1:'',
    Questions:[
      {
        Question1:'',
        Question2:'',
        Question3:''
      }
    ],
    validate:{
      nameValidity: "",// ? This means untouch state
      emailValidity: "",// ? This means untouch state
      univeristyValidity: "",// ? This means untouch state
      majorValidity: "",// ? This means untouch state
      graduationValidity: "",// ? This means untouch state
      mobileValidity: "",// ? This means untouch state
    }


  },
  getters:{
    getName(state){
      return state.name
    },
    getEmail(state){
      return state.email
    },
    getUniversity(state){
      return state.university
    },
    getMajor(state){
      return state.major
    },
    getGraduationDate(state){
      return state.graduationdate
    },
    getMobile(state){
      return state.mobile
    },
    getWhatAreYou(state){
      return state.whatareyou
    },
    getDoYouHaveTaxId(state){
      return state.doyouhavetaxid
    },
    getAboutYou(state){
      return state.aboutyou
    },
    getTeachingExperience(state){
      return state.teachingexperience
    },
    getQuestion1(state){
      return state.Question1
    }
  },
  mutations: {
    setName(state,value){
      state.name = value
    },
    setEmail(state,value){
      state.email = value
    },
    setUniversity(state,value){
      state.university = value
    },
    setMajor(state,value){
      state.major = value
    },
    setGraduationDate(state,value){
      state.graduationdate = value
    },
    setMobile(state,value){
      state.mobile = value
    },
    setWhatAreYou(state,value){
      state.whatareyou = value
    },
    setDoYouHaveStateId(state, value){
      state.doyouhavetaxid = value
    },
    setCountForWork(state,value){
      state.countforwork = value
    },
    setCountForEducation(state,value){
      state.countforeducation = value
    },
    setAboutYou(state,value){
      state.aboutyou = value
    },
    setTeachingExperience(state,value){
      state.teachingexperience = value
    }
  },
  actions: {
    // setName({commit}, value){
    //   commit('setName',value)
    // }
  },
  modules:{

  }
})
