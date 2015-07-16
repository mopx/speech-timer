// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require flipclock
//= require bootstrap
//= require_tree .

$(function() {
  var clock = new FlipClock($('#counter_div'), {
    autoStart: true,
    countdown: true,
    clockFace: 'MinuteCounter',
    callbacks: {
      stop: function() {
        alert("BOOM!");
      }
    },

  });
  clock.setTime(10);
  clock.start();

});
