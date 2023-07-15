import db from '../../../../db/connect'

export default function handler(req, res) {
    const query = "SELECT * FROM equipments"
    db.query(query, (err, response) => {
        if (err) {
            console.log(err);
          res.status(500).send(err);
          return;
        }
        res.send(response);
    });
}