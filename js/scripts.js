var Tamagotchi = {

  initialize: function(realName) {
    this.name = realName;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },

  timePasses: function() {
    this.foodLevel -= 1;
  },

  isAlive: function() {

    if (this.foodLevel > 0) {
      return true;
    } else {
      return  false;
    }
  }
}


