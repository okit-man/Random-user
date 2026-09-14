const url = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);

  // destructuring from the api
  const people = data.results[0];
  const { first, last } = people.name;
  const { email, phone } = people;
  const { age } = people.dob;
  const { password } = people.login;
  const { large: image } = people.picture;
  const { street: {number, name },} = people.location;
  //  const {
  //    street: { number, name },
  //  } = people.location;

  return {
    image,
    email,
    age,
    phone,
    password,
    name: `${first} ${last}`,
    street: `${number} ${name}`,
  };
};
export default getUser;
