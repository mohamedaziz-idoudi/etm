import db from '../../../../db/connect'

export default function handler(req, res) {
    const title = req.body.title;
    console.log(req.body.paragraph);
    const paragraph = req.body.paragraph;
    const image = req.body.image;
    const query = "INSERT INTO blogs_en (title,paragraph,image,date) VALUES (?,?,?,now())"
    db.query(query,[title,paragraph,image], (err, response) => {
        if (err) {
            console.log(err);
          res.status(500).send(err);
          return;
        }
        console.log(response);
        res.send(response);
    });
}