var client;

$(function() {
  var clock = new FlipClock($('#counter_div'), {
    autoStart: false,
    countdown: true,
    clockFace: 'MinuteCounter',
    language: 'es',
    callbacks: {
      start: function() {
        $("#background").css("background-color", "#111");
      },
      stop: function() {
        $("#background").css("background-color", "#f00");
      }
    },
  });

  clock.setTime(0);

  client = new Faye.Client('/faye');
  client.subscribe('/timer', function(payload) {
    if(payload.stop === true) {
      $('#name').html("Nombre del expositor");
      clock.stop();
      clock.setTime(0);
    } else {
      $('#name').html(payload.name);
      clock.stop();
      clock.setTime(payload.minutes * 60);
      clock.start(function(){
        var time  = clock.getTime();
        if (time.time > 0 && time.time < 60){
          $("#background").css("background-color", "#f60");
        }
      });
    }
  });
});
