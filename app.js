
import image from "./utils/getElement.js"
import getUser from "./utils/getUser.js"

// const img = getElement(".user-img");
// const getElement = (select) => {
//     const element = document.querySelector(select);
//     if (element) return element;
//     throw new Error("there is no such element selection");
// };


const img = image(".user-img");
const title = image(".user-title");
const description = image(".user-description");
const btn = image(".btn");
// spreed operator allow us to copy values from our html element
const btns = [...document.querySelectorAll(".icon")];
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
//         email,
//         age,
//         phone,
//         password,
//         image,
//         name: `${first} ${last}`,
//         street: `${number} ${name}`

//     }
    
// }


const showUser = () => {
    console.log("keep going...");
    // get user from api 
    getUser().then(data => console.log(data))
    // display user
    // displayUser()
}
window.addEventListener("DOMContentLoaded", () => {
    showUser()
})
btn.addEventListener("click", () => {
    showUser()
})

// console.log(img);


