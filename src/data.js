import {getRandomList, getRandomValue} from './utils';


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

const icons = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

export const getTripData = () => ({
  type: icons[Math.floor(Math.random() * 10)],

  get getTitle() {
    switch (this.type) {
      case `taxi`:
        return `Taxi to`;

      case `bus`:
        return `Bus to`;

      case `train`:
        return `Train to`;

      case `ship`:
        return `Ship to`;

      case `transport`:
        return `Transport to`;

      case `drive`:
        return `Drive to`;

      case `flight`:
        return `Flight to`;

      case `check-in`:
        return `Check-in in`;

      case `sightseeing`:
        return `Sightseeing in`;

      case `restaurant`:
        return `Restaurant in`;

      default:
        return ``;
    }
  },

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
      prep: `in`
    },
    {
      name: `trip`,
      prep: `to`
    }
  ],

  destination: [`Moscow`, `London`, `New-York`, `Tokyo`][Math.floor(Math.random() * 4)],

  getPhoto() {
    return `http://picsum.photos/300/150?r=${Math.random()}`;
  },

  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`.split(`. `).sort(() => 0.5 - Math.random()),

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
  ], 4)

});
