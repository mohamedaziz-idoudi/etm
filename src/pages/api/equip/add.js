import db from '../../../../db/connect'

export default function handler(req, res) {
    const mat = req.body.mat;
    const quantity = req.body.quantity;
    const query = "INSERT INTO equipments (mat,quantity) VALUES (?,?)"
    db.query(query,[mat,quantity], (err, response) => {
        if (err) {
            console.log(err);
          res.status(500).send(err);
          return;
        }
        res.send(response);
    });
}