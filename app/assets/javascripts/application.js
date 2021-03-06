// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require moment
//= require fullcalendar
//= require fullcalendar/lang/ja
//= require underscore
//= require gmaps/google
//= require_tree .


$(document).ready(function () {
  $('#calendar').fullCalendar({
    events: '/events.json',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    eventColor: 'rgb(43, 43, 128)',
    eventTextColor: 'white',
  })
  function eventCalendar() {
    return $('#calendar').fullCalendar({});
  };
  function clearCalendar() {
    $('#calendar').html('');
  };
  $(document).on('turbolinks:load', function () {
    eventCalendar();
  });
  $(document).on('turbolinks:before-cache', clearCalendar);
});