const getElement = (select) => {
  const element = document.querySelector(select);
  if (element) return element;
  throw new Error("there is no such element selection");
};
export default getElement;