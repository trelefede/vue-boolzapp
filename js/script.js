console.log(contacts);


const app = new Vue({
    el: "#app",
    data: {
        contacts,
        activeIndex: 0,
        textMessage: '',
    },
    methods: {
        setActiveContact(index) {
            this.activeIndex = index;
        },
        sentMessage() {
            const messageSent = this.contacts[this.activeIndex].messages.push({
                date: '10/01/2020 23:15:22',
                message: this.textMessage,
                status: 'sent'
            });
            setTimeout(() => {
                const messageReceived = this.contacts[this.activeIndex].messages.push({
                    date: '10/01/2020 23:15:22',
                    message: 'OK!',
                    status: 'received'
                })
            }, 3000);
        },
    }
})