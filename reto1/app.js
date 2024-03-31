new Vue({
    el: '#app',
    
    data () {
      return {
        cursos:[],
        tituloCurso:'',
        horas:null,
        
      }
    },
    
    computed: {

        totalTime(){
            let total=0
            this.cursos.forEach((curso)=>{
                total+=curso.horas
            })
            return total
        }
    },
    watch:{
        cursos:{
            handler(){
                console.log('watch')
                localStorage.setItem('cursos',JSON.stringify(this.cursos))
            },
            deep:true
        }
    },
    methods: {
        addCourse(){
            let newCourse={
                titulo:this.tituloCurso,
                horas:this.horas
            }
            this.cursos.push(newCourse)
            this.tituloCurso=''
            this.horas=null   
        }
    }
})