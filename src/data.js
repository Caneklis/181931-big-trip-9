import { getRandomList, getRandomValue } from './utils';


export const filterData = [
  {
    title: `Everything`
  },
  {
    title: `Future`
  },
  {
    title: `Past`
  }
];

export const menuData = [
  {
    title: `Table`,
    status: true
  },
  {
    title: `Stats`,
    status: false
  }
];

export const destination = [`Moscow`, `London`, `New-York`, `Tokyo`];

export const transfer = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
export const activity = [`Sightseeing`, `Restaurant`, `Check-in`];

export const getTripData = () => ({
  types: [
    {
      name: `taxi`,
      label: `taxi to`
    },
    {
      name: `bus`,
      label: `bus to`
    },
    {
      name: `train`,
      label: `train to`
    },
    {
      name: `ship`,
      label: `ship to`
    },
    {
      name: `transport`,
      label: `transport to`
    },
    {
      name: `drive`,
      label: `drive to`
    },
    {
      name: `flight`,
      label: `flight to`
    },
    {
      name: `check-in`,
      label: `check-in in`
    },
    {
      name: `sightseeing`,
      label: `sightseeing in`
    },
    {
      name: `restaurant`,
      label: `in`
    },
    {
      name: `trip`,
      label: `to`
    }
  ].sort(() => 0.5 - Math.random()).slice(0, 1)[0],

  destination,

  getPhoto() {
    return `http://picsum.photos/300/150?r=${Math.random()}`;
  },

  photos: new Array(getRandomValue(2, 5)).fill(``).map(() => `http://picsum.photos/300/150?r=`),

  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`][Math.floor(Math.random() * 5)],

  startDate: Date.now(),
  endDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,

  price: getRandomValue(10, 100),

  offers: getRandomList([
    {
      title: `Add luggage`,
      price: 10,
      isChecked: false,
      value: `luggage`
    },
    {
      title: `Switch to comfort class`,
      price: 150,
      isChecked: false,
      value: `comfort`
    },
    {
      title: `Add meal`,
      price: 2,
      isChecked: Boolean(Math.round(Math.random())),
      value: `meal`
    },
    {
      title: `Choose seats`,
      price: 9,
      isChecked: false,
      value: `seats`
    }
  ], 2),
  activity,
  transfer,

});

export const getEventsData = (count) => {
  const events = new Array(count);
  return events.fill(``).map(getTripData).sort((a, b) => a.start - b.start);
};
