export const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};


export const getRandomList = (arr, value) => {
  let newList = arr.slice().sort(() => 0.5 - Math.random());
  newList.length = Math.round(Math.random() * value);
  return newList;
};

export const getRandomValue = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
