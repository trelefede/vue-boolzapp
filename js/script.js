console.log(contacts);


const app = new Vue({
    el: "#app",
    data: {
        contacts,
        activeIndex: 0,
    },
    methods: {
        setActiveContact(index) {
            this.activeIndex = index;
        }
    }
})