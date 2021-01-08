import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync('123456', 15),
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync('123456', 15),
  },
  {
    name: "Johnny Silverhand",
    email: "vinside@example.com",
    password: bcrypt.hashSync('123456', 15),
  },
];

export default users;