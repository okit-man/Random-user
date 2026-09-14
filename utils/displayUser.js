import get from "./getElement.js";
import removeActive from "./removeActive.js";

const img = get(".user-img");
const title = get(".user-title");
const description = get(".user-description");
// // spreed operator allow us to copy values from our html element
const btns = [...document.querySelectorAll(".icon")];


const displayUser = (people) => {
  img.src = people.image;
  description.textContent = people.name;
  title.textContent = `Hello, my name is `;
  // when refresh all clicked active btn will be remove
    removeActive(btns)
  // only first btn is constantly active from our css
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const value = btn.dataset.value;
    btn.addEventListener("click", () => {
      title.textContent = `my ${value} is`;
      description.textContent = people[value];
      // remove all active btn when refresh for new image but the last btn and the active btn will be left
    removeActive(btns)
      // all btn are active with same color when clicked
      btn.classList.add("active");
      // console.log(people[value]);
    });
    // console.log(btn);
  });
};


export default displayUser;
