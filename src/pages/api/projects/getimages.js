import db from '../../../../db/connect'

export default function handler(req, res) {
    const title = req.body.title;
    const query = "SELECT * FROM images where title= ?"
    db.query(query,[title], (err, response) => {
        if (err) {
            console.log(err);
          res.status(500).send(err);
          return;
        }
        res.send(response);
    });
}