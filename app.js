import get from "./utils/getElement.js"
import getUser from "./utils/getUser.js"
import displayUser from "./utils/displayUser.js";

// const img = getElement(".user-img");
// const getElement = (select) => {
//     const element = document.querySelector(select);
//     if (element) return element;
//     throw new Error("there is no such element selection");
// };


// const img = get(".user-img");
// const title = get(".user-title");
// const description = get(".user-description");
// // spreed operator allow us to copy values from our html element
// const btns = [...document.querySelectorAll(".icon")];
const btn = get(".btn");

// console.log(btns);


// const getUser = async () => {
//     const response = await fetch(url)
//     const data = await response.json()
//     // console.log(data);

//     const people = data.results[0]
//     const {first, last}  = people.name
//     const {email, phone} = people
//     const {age} = people.dob
//     const {street: number, name} = people.location
//     // const {phone} = people.phone
//     const {password} = people.login
//     const {large:image} = people.picture

//     return {
//         image,
//         email,
//         age,
//         phone,
//         password,
//         name: `${first} ${last}`,
//         street: `${number} ${name}`

//     }
    
// }

// const displayUser = (people) => {
//     img.src = people.image
//     description.textContent = people.name
//     title.textContent =  `Hello, my name is `
//     // when refresh all clicked active btn will be remove 
//     btns.forEach((btn) => btn.classList.remove("active"));

//     // only first btn is constantly active
//     btns[0].classList.add("active");
//     btns.forEach(btn => {
//         const value = btn.dataset.value
//         btn.addEventListener( "click", () => {
//             title.textContent = `my ${value} is`
//             description.textContent = people[value]
//             // remove all active btn when search for new image but the last btn and the active btn will be left
//             btns.forEach(btn => btn.classList.remove('active'))
//             // all btn are active with same color when clicked
//             btn.classList.add("active");
//             // console.log(people[value]);
            
//         })
//         // console.log(btn);
        
//     })
// }


const showUser = () => {
    // get user from api 
    // getUser().then(data => console.log(data))
    getUser().then(data => {
        
        // displayUser
        displayUser(data)
    })

}
window.addEventListener("DOMContentLoaded", () => {
    showUser()
})
btn.addEventListener("click", () => {
    showUser()
})



