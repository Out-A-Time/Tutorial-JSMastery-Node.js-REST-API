import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAllUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const getUserById = (req, res) => {
  //   const id = req.params.id;
  const { id } = req.params;
  console.log(req.params.id);
  const foundUser = users.find((user) => {
    console.log("found user", req.params.id);
    return user.id === id;
  });
  console.log(foundUser);
  res.send(`hello ${foundUser}`);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });

  res.send(
    `User with the username: ${user.firstName} ${user.lastName} has been added to the database`
  );
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userToBeUpdated = users.find((user) => {
    return user.id === id;
  });
  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }
  if (age) {
    userToBeUpdated.age = age;
  }

  res.send(`User with the id ${id} has been updated`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from DB`);
};
