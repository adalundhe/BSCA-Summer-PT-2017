var title = "Baseball Players App"
var players = [
              {name: "Aaron Judge", team: "NY Yankees"}, {name: "Jose Altuve", team: "Houston Astros"},
              {name: "Jose Ramirez", team: "Clevland Indians"}, {name: "Corey Dickerson", team: "Tampa Bay Rays"},
              {name: "Carlos Correra", team: "Houston Astros"}, {name: "Buster Posey", team: "SF Giants"},
              {name: "Ryan Zimmerman", team: "Washington Nationals"}, {name: "Daniel Murphy", team: "Washington Nationals"},
              {name: "Zack Cozart", team: "Cincinnati Reds"}, {name: "Bryce Haper", team: "Washington Nationals"},
              {name: "Logan Morrison", team: "Tampa Bay Rays"},
              {name: "George Springer", team: "Houston Astros"}, {name: "Khris Davis", team: "Oakland Athletics"},
              {name: "Mike Moustakas", team: "Kansas City Royals"}, {name: "Cody Bellinger", team: "LA Dodgers"},
              {name: "Joey Votto", team: "Cincinnati Reds"}, {name: "Marcell Ozuna", team: "Miami Marlins"},
              {name: "Giancario Stanton", team: "Miami Marlins"}, {name: "Eric Thames", team: "Baltimore Brewers"},
              {name: "Robinson Cano", team: "Seattle Mariners"}, {name: "Nelson Cruz", team: "Seattle Mariners"},
              {name: "Miguel Sano", team: "Minnesota Twins"}, {name: "Paul Goldschmidt", team: "Arizona Diamondbacks"},
              {name: "Jake Lamb", team: "Arizona Diamondbacks"}, {name: "Nolan Arenado", team: "Colorado Rockies"}
              ];

var averages = [0.327, 0.326, 0.325, 0.321, 0.319, 0.339, 0.333, 0.330, 0.322, 0.318,
                0.256, 0.287, 0.255, 0.270, 0.260, 0.316, 0.316, 0.262, 0.243, 0.284,
                0.287, 0.274, 0.316, 0.282, 0.300]

var homeruns = [27, 11, 15, 17, 17, 10, 14, 9, 20, 24, 24, 23, 22, 24, 23, 24, 22, 21, 21,
                17, 14, 20, 19, 18, 15]

var rbis = [62, 40, 42, 40, 58, 35, 55, 62, 33, 62, 57, 52, 57, 49, 56, 61, 62, 50, 41,
            60, 59, 58, 66, 65, 62]

var obps = [0.449, 0.398, 0.379, 0.363, 0.394, 0.416, 0.389, 0.373, 0.403, 0.425,
            0.366, 0.363, 0.341, 0.306, 0.332, 0.428, 0.374, 0.346, 0.372, 0.341,
            0.370, 0.371, 0.437, 0.376, 0.352]

players = players.map((player, index) => {
  player.avg = averages[index]
  player.hr = homeruns[index]
  player.rbi = rbis[index]
  player.obp = obps[index]
  return player
})

console.log("NEW PLAYER",players)

let app = new Vue({
  el: "#app",
  data: {
    title: title,
    players: players,
    searchText: "",
    filteredPlayers: players,
    filterType: 0,
    gtLt: true,
  },
  methods: {
    setGtLt: function(){
      this.gtLt = !this.gtLt
    },
    setSearch: function(){
      this.filterType = (this.filterType + 1)%6
    }
  },
  computed: {
    filterPlayers: function(){
      var self = this;
      self.filteredPlayers = self.players.filter(function(player){
        return player[(self.filterType === 0) ? 'name' : 'team'].includes(self.searchText)
      })
    },
    filterScores: function(){
      var self = this;
      self.filteredPlayers = self.players.filter((player) => {
        if(self.gtLt){
          if(self.filterType === 2){
            return (player.avg >= Number(self.searchText))
          }
          else if(self.filterType === 3){
            return (player.hr >= Number(self.searchText))
          }
          else if (self.filterType === 4) {
            return (player.rbi >= Number(self.searchText))
          }
          else if(self.filterType === 5){
            return (player.obp >= Number(self.searchText))
          }
        }
        else{
          if(self.filterType === 2){
            return (player.avg <= Number(self.searchText))
          }
          else if (self.filterType === 3) {
            return (player.hr <= Number(self.searchText))
          }
          else if (self.filterType === 4) {
            return (player.rbi <= Number(self.searchText))
          }
          else if (self.filterType === 5) {
            return (player.obp <= Number(self.searchText))
          }
        }
      })
    }
  }
})
