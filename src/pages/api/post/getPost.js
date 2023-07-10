import db from '../../../../db/connect'

export default function handler(req, res) {
    const id = req.body.id;
    console.log(id);
    const query = "SELECT * FROM blogs where id= ?"
    db.query(query,[id], (err, response) => {
        if (err) {
            console.log(err);
          res.status(500).send(err);
          return;
        }
        res.send(response);
    });
}