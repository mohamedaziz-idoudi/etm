import db from '../../../../db/connect'

export default async function handler(req, res) {
    const id_ =  await req.body.id;
    const id = Math.floor(Number(id_));
    const query = "SELECT * FROM projects where id= ?"
    db.query(query,[id], (err, response) => {
        if (err) {
            console.log(err);
          res.status(500).send(err);
          return;
        }
        res.send(response);
    });
}