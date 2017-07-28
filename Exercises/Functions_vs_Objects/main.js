const Vehicle = {
  motor: undefined,
  wheels: undefined,
  type: undefined,
  gear: 0,
  start: false,
  aboutMe: function(){
    console.log("My car is a:",this.type,"with a:",this.motor,"engine and",this.wheels,"wheels.")
  },
  startCar: function(){
    this.start = !this.start;
    (this.start) ? console.log("Car started!") : console.log("Car turned off!");
  },
  shiftUp: function(){
    if(this.start && this.gear < 6){
      this.gear += 1;
      console.log("Current gear:",this.gear);
    }
    else if (this.start && this.gear === 6) {
      console.log("Hit max gear! Can't upshift!")
    }
    else {
      console.log("Car isn't started, can't shift gears!")
    }
  },
  shiftDown: function(){
    if(this.start && this.gear > 0){
      this.gear -= 1;
      console.log("Current gear:",this.gear);
    }
    else if (this.start && this.gear === 0) {
      console.log("Hit neutral! Can't downshift!")
    }
    else{
      console.log("Car isn't started, can't shift gears!")
    }
  }
}

Vehicle.type = "Audi A6"
Vehicle.wheels = 4
Vehicle.motor = "v6"

Vehicle.aboutMe()
Vehicle.startCar()
// Vehicle.startCar()

for(let i=0; i<10; i+=1){
  Vehicle.shiftUp()
}

for(let i=0; i<10; i+=1){
  Vehicle.shiftDown()
}

Vehicle.startCar()
