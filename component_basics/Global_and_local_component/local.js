
 
let PlanComponent = {
    template : '#plan-template',
    props : {
        name:{type:String,required:true}
    }
}

let PlanPickerComponent = {
    components:{plan: PlanComponent},
    template:'#plan-picker-template',
    data(){
        return{
            // using an array with plans name in root component 
            // ..then we can pass them dynamically to the compnents
            plans: ['The Hacker','The Single', 'The Curious','The Addict']
        }
    }
}

const app = Vue.createApp({
    components:{'plan-picker' : PlanPickerComponent}
})
.mount('#app')