var client;

$(function() {
  var clock = new FlipClock($('#counter_div'), {
    autoStart: false,
    countdown: true,
    clockFace: 'MinuteCounter',
    callbacks: {
      stop: function() {
        // do something
      }
    },
  });

  clock.setTime(0);
  clock.start();

  client = new Faye.Client('/faye');
  client.subscribe('/timer', function(payload) {
    clock.stop();
    clock.setTime(payload.message.minutes * 60);
    clock.start();
  });
});
