import { Calendar } from '@fullcalendar/core';
import jaLocale from '@fullcalendar/core/locales/ja';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

document.addEventListener('turbolinks:load', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    locale: jaLocale,
    firstDay: 1,
    plugins: [ dayGridPlugin, interactionPlugin ]
  });
  calendar.render();
});