import users from "./users.js";

// Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => {
  const usersName = users.filter(user => user.friends.some(friend => friend ===friendName));
  return usersName.map (user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); 
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry')); 
// [ 'Elma Head', 'Sheree Anthony' ]