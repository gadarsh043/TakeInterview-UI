import headerpage from '@/components/header.vue'
import footerpage from '@/components/footer.vue'
import store from '@/store/index.js'
import { mapGetters} from 'vuex'
import validateMixin from '@/mixins/validate.js'
export default {
  name:'page2',
  mixins: [
    validateMixin
  ],
  data(){
    return{
      workHistory:store.state.workhistory,
      educationHistory:store.state.educationhistory,
      companyname:'',
      from:'',
      to:'',
      maxlimit: this.date(),
      fromlimit:'1900-01-01',
      fromlimiteducation:'1900-01-01',
      pageNo:2,
      aboutYouValidity:'untouch',
      teachingExperienceValidity:'untouch',
    }
  },
  computed:{
    ...mapGetters(['getAboutYou','getTeachingExperience']),
  },
  components:{
    headerpage,
    footerpage,
  },
  methods:{
    changeredirect(){
      if(this.aboutYouValidity==='valid' && this.teachingExperienceValidity === 'valid'){
        return 1
      }
    },
    changefromlimit(value){
      this.fromlimit = value
    },
    changefromlimiteducation(value){
      this.fromlimiteducation = value
    },
    addanotherjob(){
      let obj ={
        companyname:'',
        from:'',
        to:''
      }
      store.state.workhistory.push(obj)
    },
    removeanotherjob(){
      store.state.workhistory.pop()
    },
    addanothereducation(){
      let obj ={
        name:'',
        from:'',
        to:''
      }
      store.state.educationhistory.push(obj)
    },
    removeanothereducation(){
      store.state.educationhistory.pop()
    },
    aboutyouchange(event){
      store.commit("setAboutYou", event.target.value)
      this.changeredirect()
    },
    teachingexperiencechange(event){
      store.commit('setTeachingExperience', event.target.value)
      this.changeredirect()
    },
    date(){
    var today = new Date();
    var date = today.getFullYear()+'-'+'0'+(today.getMonth()+1)+'-'+today.getDate();
    return date
    }
  }
}