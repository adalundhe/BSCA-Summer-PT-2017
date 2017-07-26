let title = "My First API"

const app = new Vue({
  el: '#app',
  data: {
    title: title,
    customers: undefined
  },

  methods: {
    loadData: function(){
      let self = this

      $.ajax({
        url: '/api',
        method: 'GET'
      }).done((response) => {
        console.log("GOT",response.data)
        self.customers = response.data
      })
    }
  },
  beforeMount(){
    this.loadData()
  }

})
