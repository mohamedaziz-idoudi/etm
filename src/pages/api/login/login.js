import bcrypt from 'bcryptjs';
import db from '../../../../db/connect'

export default function handler(req, res) {
  const sql = "SELECT * FROM users";
  const password = req.body.password;

  db.query(sql, (err, response) => {
    if (err) {
        console.log(err);
      res.status(500).send(err);
      return;
    }

    bcrypt.compare(password, response[0].pass)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
}
