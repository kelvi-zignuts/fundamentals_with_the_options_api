const app = Vue.createApp({
    
})

.component('plan-picker',{
    template:'#plan-picker-template',
    data(){
        return{

            // using an array with plans name in root component 
            // ..then we can pass them dynamically to the compnents
            plans: ['The Hacker','The Single', 'The Curious','The Addict']
        }
    }
})
.component('plan',{
 template : '#plan-template',
//  props:['name']
props:{
    name:{type:String,required:true}
}
})
.mount('#app')