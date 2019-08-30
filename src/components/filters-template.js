
export const getLoadFilterTemplate = (filters) => {
  return `<form class="trip-filters" action="#" method="get">
            ${filters.map(filterList).join(``)}
            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
};

const filterList = ({
  title
}) => {
  return `<div class="trip-filters__filter">
              <input id="filter-${title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${title}" checked="">
              <label class="trip-filters__filter-label" for="filter-${title}">${title}</label>
            </div>`;
};
