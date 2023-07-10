import db from '../../../../db/connect'

export default function handler(req, res) {
    const title = req.body.title;
    const paragraph = req.body.paragraph;
    const image = req.body.image;
    const filiale = req.body.filiale;
    const images = req.body.images;
    images.map((val) => {
        db.query("INSERT INTO images (title,link) VALUES (?,?)", [title, val], (err, response) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }

            res.send(response);
        })
    })
    db.query("INSERT INTO projects (title, filiale, paragraph, image) VALUES (?,?,?,?)", [title, filiale, paragraph, image], (err, response) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        }
        res.send(response);
    })
}