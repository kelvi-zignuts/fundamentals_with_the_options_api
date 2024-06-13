
 
let PlanComponent = {
    template : '#plan-template',
    props : {
        name:{type:String,required:true},
        selected:{type:Boolean, default:false}
    },
    // data(){
    //     return{
    //         selected:false
    //     }
    // },
    methods:{
        select(){
            // this.selected = true,
            this.$emit('select',this.name)
        }
    }
}

let PlanPickerComponent = {
    components:{plan: PlanComponent},
    template:'#plan-picker-template',
    data(){
        return{
            // using an array with plans name in root component 
            // ..then we can pass them dynamically to the compnents
            plans: ['The Hacker','The Single', 'The Curious','The Addict'],
            selectedPlan:null,
        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan
        }
    }
}

const app = Vue.createApp({
    components:{'plan-picker' : PlanPickerComponent}
})
.mount('#app')