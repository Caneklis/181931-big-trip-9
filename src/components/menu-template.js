export const getLoadMenuTemplate = (menu) => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
            ${menu.map(menuList).join(``)}
          </nav>`;
};

const menuList = ({
  title,
  status
}) => {
  return `<a class="trip-tabs__btn  ${status ? `trip-tabs__btn--active` : ``}" href="#">${title}</a>`;
};
