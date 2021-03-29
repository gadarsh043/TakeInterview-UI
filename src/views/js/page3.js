import headerpage from '@/components/header.vue'
import footerpage from '@/components/footer.vue'
import store from '@/store/index.js'
export default {
  name:'page3',
  data(){
    return{
      pageNo:3,
      computer:1,
      math:0,
      language:0,
      computerValidity:'valid',
      mathValidity:'valid',
      languageValidity:'valid',
      MySql: store.state.MySql, // Todo Redirect , validation
      Algebra: store.state.Algebra,
      Hindi: store.state.Hindi,
    }
  },
  components:{
    headerpage,
    footerpage
  },
  methods:{
    changeredirect(){
      if(this.computerValidity==='valid' && this.mathValidity === 'valid' && this.languageValidity === 'valid'){
        return 1
      }
    },
    opencomputer(){
      this.computer=1
      this.math=0
      this.language=0
    },
    openmath(){
      this.computer=0
      this.math=1
      this.language=0
    },
    openlanguage(){
      this.computer=0
      this.math=0
      this.language=1
    }
  }

}