console.log(contacts);


const app = new Vue({
    el: "#app",
    data: {
        contacts,
        activeIndex: 0,
        textMessage: '',
        searchInput: '',
    },
    methods: {
        setActiveContact(index) {
            this.activeIndex = index;
        },
        sentMessage() {
            const activeContact = this.contacts[this.activeIndex];
            activeContact.messages.push({
                date: '10/01/2020 23:15:22',
                message: this.textMessage,
                status: 'sent'
            });
            this.textMessage = '';
            setTimeout(() => {
                activeContact.messages.push({
                    date: '10/01/2020 23:15:22',
                    message: 'Dai che è venerdi!',
                    status: 'received'
                })
            }, 3000);
        },
        getTimeMessage(dateLong) {
            const array = dateLong.split(" ");
            const hourMinuteSeconds = array[1].split(":");
            const HourMinute = `${hourMinuteSeconds[0]}:${hourMinuteSeconds[1]}`;
            return HourMinute;
        }
    }
})