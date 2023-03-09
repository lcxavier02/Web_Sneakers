import { pool } from '../db.js';
import bcrypt from 'bcrypt';

export const Login = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const [user] = await pool.query("SELECT * FROM user WHERE User_name = ? AND User_email = ?", [username, email]);
    const match = await bcrypt.compare(password, user[0].User_password);
    if(user.length > 0 && match === true) {
      res.status(200).send({
        "User_ID": user[0].User_ID,
        "User_name": user[0].User_name,
        "User_email": user[0].User_email
      });
    } else {
      res.status(404).send('User not found')
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    res.json({status: 'Login failed'});
  }
}

export const Register = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const hash = await bcrypt.hash(password, 10);
    const userAdded =  await pool.query('INSERT INTO user (User_name, User_email, User_password) VALUES (?, ?, ?)', [username, email, hash]);
    if(userAdded) {
      res.status(200).send({
        "User_ID": userAdded[0].User_ID,
        "User_name": userAdded[0].User_name,
        "User_email": userAdded[0].User_email
      });
    } else {
      res.status(404).send('User not registered')
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    res.json({status: 'Register failed'});
  }
};