import { mapGetters} from 'vuex'
import headerpage from '@/components/header.vue'
import footerpage from '@/components/footer.vue'
import store from '@/store/index.js'
import validateMixin from '@/mixins/validate.js'
export default {
  name:'page1',
  components:{
    headerpage,
    footerpage
  },
  mixins: [
    validateMixin
  ],
  data () {
    return{
      years:51,
      pageNo:1,
      x:store.state.whatareyou,
      y:store.state.doyouhavetaxid,
      nameValidity: "untouch",
      emailValidity: "untouch",
      univeristyValidity: "untouch",
      majorValidity: "untouch",
      graduationValidity: "untouch",
      mobileValidity: "untouch",
    }
  },
  computed:{
    ...mapGetters(['getName','getEmail','getUniversity','getMajor','getGraduationDate','getMobile']),
  },
  methods:{
    changeredirect(){
      if(this.nameValidity ==='valid' && this.emailValidity==='valid' 
      && this.univeristyValidity==='valid' && this.majorValidity==='valid'  //Todo Make variable global
      && this.graduationValidity==='valid' && this.mobileValidity==='valid'){
        return 1;
      }
    },
    namechange: (event) => {
      store.commit("setName", event.target.value);
    },
    emailchange: (event) => {
      store.commit("setEmail", event.target.value)
    },
    universitychange: (event) => {
      store.commit("setUniversity", event.target.value)
    },
    majorchange: (event) => {
      store.commit("setMajor", event.target.value)
    },
    graduationchange: (event) => {
      store.commit("setGraduationDate", event.target.value)
    },
    mobilechange: (event) => {
      store.commit("setMobile", event.target.value)
    },
    whatchange(){
      var x = document.getElementById('WAUuniversity').value;
      console.log(x)
      store.commit("setWhatAreYou", x)
    },
    whatchange2(){
      var x = document.getElementById('WAUprofessional').value;
      console.log(x)
      store.commit("setWhatAreYou", x)
    },
    taxidchange(){
      var y = document.getElementById('ihave').value;
      console.log(y)
      store.commit("setDoYouHaveStateId", y)
    },
    taxidchange2(){
      var y = document.getElementById('idonthave').value;
      console.log(y)
      store.commit("setDoYouHaveStateId", y)
    },
    checkCredentials(){

    }
    
    // namechange (event) {
    //   this.$store.dispatch('setName', event.target.value)
    // }
  }
}