import {
  renderTemplate
} from './utils';
import {
  getLoadTripTemplate
} from './components/trip-info-template';
import {
  getLoadMenuTemplate
} from './components/menu-template';
import {
  getLoadFilterTemplate
} from './components/filters-template';
import {
  getLoadTripSortTemplate
} from './components/trip-sort-template';
import {
  getLoadTripsListTemplate
} from './components/trips-list-template';
import {
  getLoadTripCardTemplate
} from './components/trip-card-template';
import {
  getLoadTripEventTemplate
} from './components/trip-event-template';
import {
  getLoadAddTripEventTemplate
} from './components/add-trip-event-template';
import {
  getLoadEventDetailsTemplate
} from './components/event-details-template';


const tripInfo = document.querySelector(`.trip-info`);
const tripControlsTitle = document.querySelector(`.trip-main__trip-controls h2`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

renderTemplate(tripInfo, getLoadTripTemplate(), `afterbegin`);
renderTemplate(tripControlsTitle, getLoadMenuTemplate(), `afterend`);
renderTemplate(tripControls, getLoadFilterTemplate());
renderTemplate(tripEvents, getLoadTripSortTemplate());
renderTemplate(tripEvents, getLoadTripsListTemplate());

renderTemplate(tripEvents, getLoadAddTripEventTemplate(), `afterbegin`);

const tripList = document.querySelector(`.trip-days`);
renderTemplate(tripList, getLoadTripCardTemplate());

const tripEventsList = document.querySelector(`.trip-events__list`);
renderTemplate(tripEventsList, getLoadTripEventTemplate().repeat(3));

const tripEventItem = document.querySelectorAll(`li.trip-events__item`);
for (const value of tripEventItem) {
  renderTemplate(value, getLoadAddTripEventTemplate());
}


const tripEventDetails = document.querySelectorAll(`li.trip-events__item form`);
for (const value of tripEventDetails) {
  renderTemplate(value, getLoadEventDetailsTemplate());
}
