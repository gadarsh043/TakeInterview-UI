import headerpage from '@/components/header.vue'
import footerpage from '@/components/footer.vue'
import store from '@/store/index.js'
import validateMixin from '@/mixins/validate.js'
export default {
  name: 'page4',
  data(){
    return{
      pageNo:4,
      display1:1,
      display2:0,
      display3:0,
      question1Validity:'untouch',
      question2Validity:'untouch',
      question3Validity:'untouch',
      Questions: store.state.Questions, // Todo Redirect, validation
    }
  },
  mixins: [
    validateMixin
  ],
  components:{
    headerpage,
    footerpage
  },
  methods:{
    changeredirect(){
      if(this.question1Validity === 'valid' && this.question2Validity === 'valid' && this.question3Validity === 'valid'){
        return 1
      }
    },
    question1(){
      this.display1=1
      this.display2=0
      this.display3=0
    },
    question2(){
      this.display2=1
      this.display1=0
      this.display3=0
    },
    question3(){
      this.display3=1
      this.display2=0
      this.display1=0
    }
  }
}