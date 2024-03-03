type VerifyUserfn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserfn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Jõao', password: '123456' };
const sentUser = { username: 'Jõao', password: '1234567' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
