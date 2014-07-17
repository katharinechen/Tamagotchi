var Tamagotchi = {
  initialize: function(realName) {
    this.name = realName;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function() {
    this.foodLevel -= 1;
    this.sleepLevel -= 1;
    this.activityLevel -= 1;
    $("#feed").text(this.foodLevel);
    $("#purple").text(this.activityLevel);
    $("#rest").text(this.sleepLevel);
  },
  isAlive: function() {
    if ((this.foodLevel > 0) && (this.sleepLevel > 0) && (this.activityLevel > 0)) {
      return true;
    } else {
      $("#fadeout").fadeOut();
      $("#you-died").fadeIn();
    }
  }
}

$(document).ready(function() {
  $("#feed").text(10);
  $("#purple").text(10);
  $("#rest").text(10);
  $("#nameSpace").show();

  $("#nameSpace").submit(function(event) {
    var cutePet = Object.create(Tamagotchi);
    cutePet.initialize($("#name").val());
    if((cutePet.name === "hammer") || (cutePet.name === "Hammer")) {
      $("img").show();
    }

    $("#nameSpace").hide();
    $("#amazing-name").text(" " + cutePet.name);

    setInterval(function(){ cutePet.timePasses() }, 600);
    setInterval(function(){ cutePet.isAlive() }, 600);

    event.preventDefault();

    $("#food").click(function(){
      cutePet.foodLevel += 1;
      if(cutePet.foodLevel > 10) {
        cutePet.foodLevel = 10;
      }
      $("#feed").text(cutePet.foodLevel);
    });

    $("#play").click(function(){
      cutePet.activityLevel += 1;
      if(cutePet.activityLevel > 10) {
        cutePet.activityLevel = 10;
      }
      $("#purple").text(cutePet.activityLevel);
    });

    $("#sleep").click(function(){
      cutePet.sleepLevel += 1;
      if(cutePet.sleepLevel > 10) {
        cutePet.sleepLevel = 10;
      }
      $("#rest").text(cutePet.sleepLevel);
    });
  });
});
