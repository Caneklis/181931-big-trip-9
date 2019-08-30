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
  filterData,
  menuData,
  getTripData
} from './data';

import {
  editEventTpl
} from './components/edit-trip-template';

export const renderListTemplate = (container, list, template, place = `beforeEnd`) => container.insertAdjacentHTML(place, list.map(template).join(``));

const tripInfo = document.querySelector(`.trip-info`);
const tripControlsTitle = document.querySelector(`.trip-main__trip-controls h2`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

renderTemplate(tripInfo, getLoadTripTemplate(), `afterbegin`);

renderTemplate(tripControlsTitle, getLoadMenuTemplate(menuData), `afterend`);
renderTemplate(tripControls, getLoadFilterTemplate(filterData));
renderTemplate(tripEvents, getLoadTripSortTemplate());
renderTemplate(tripEvents, getLoadTripsListTemplate());

const tripList = document.querySelector(`.trip-days`);
renderTemplate(tripList, getLoadTripCardTemplate());

const tripEventsList = document.querySelector(`.trip-events__list`);
const renderEvent = (container, count) => {
  container.insertAdjacentHTML(`beforeend`, new Array(count)
    .fill(``)
    .map(getTripData)
    .map(getLoadTripEventTemplate)
    .join(``));
};

renderEvent(tripEventsList, 2);

const renderEventEdit = (container, count) => {
  container.insertAdjacentHTML(`afterbegin`, new Array(count)
    .fill(``)
    .map(getTripData)
    .map(editEventTpl)
    .join(``));
};

renderEventEdit(tripEventsList, 1);

