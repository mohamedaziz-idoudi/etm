import db from '../../../../db/connect'

export default function handler(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const paragraph = req.body.paragraph;
    if (paragraph && title) {
        const query = "UPDATE projects SET title=?, paragraph=? WHERE id=?"
        db.query(query, [title, paragraph, id], (err, response) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }
            res.send(response);
        });
    }
    else if (paragraph) {
        const query = "UPDATE projects SET paragraph=? WHERE id=?"
        db.query(query, [paragraph,  id], (err, response) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }
            res.send(response);
        });
    }
}