Vue.filter('currency', (value) => '$' + value.toFixed(2))

const demo = new Vue({
  el: '#main',
  data: {
    services: [
      {
        name: 'Bespoke Development',
        price: 2000,
        active: true
      },
      {
        name: 'UX Design',
        price: 1000,
        active: false
      },
      {
        name: 'Systems Integration',
        price: 750,
        active: false
      },
      {
        name: 'Developer Training',
        price: 1500,
        active: false
      }
    ]
  },
  methods: {
    toggleActive(item){
      item.active = !item.active
    },
    total(){
      let total = 0;

      this.services.forEach((service) => {
        if(service.active){
          total += service.price
        }
      })

      return total
    }
  }
})
