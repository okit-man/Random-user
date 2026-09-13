const url = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  // destructuring
  const people = data.results[0];
  const { first, last } = people.name;
  const { email, phone } = people;
  const { age } = people.dob;
  const { street: number, name } = people.location;
  // const {phone} = people.phone
  const { password } = people.login;
  const { large: image } = people.picture;

  return {
    email,
    age,
    phone,
    password,
    image,
    name: `${first} ${last}`,
    street: `${number} ${name}`,
  };
};
export default getUser;
