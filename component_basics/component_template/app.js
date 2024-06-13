Vue.createApp({


})

// define a new component name click-counter
.component('click-counter', {

    //HTML template for this component. it contains a butto
    //<button @click="count++">: A button that increments 'count' when clicked.
    //{{count}} Displays the current value of 'count'.
    // template: '<button @click="count++">Increase Count: {{count}}</button>',

    template:'#click-counter-template',

    // template: `
    //     <div>
    //         <button @click="count++">Increase Count: {{ count }}</button>
    //         <button @click="count--">Decrease Count: {{ count }}</button>
    //     </div>
    // `,


    // Data: A function returning an object with the component's state.
    // Here, it initializes 'count' to 0.
    data(){
        return {
            count:0
        }
    },
})
.mount('#app')
// Mounts the Vue application to the HTML element with the id 'app'