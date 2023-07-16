import db from '../../../../db/connect'

export default function handler(req, res) {
    const id = req.body.id;
    const mat = req.body.mat;
    const quantity = req.body.quantity;
    if (mat && quantity) {
        const query = "UPDATE equipments SET mat=?, quantity=? WHERE id=?"
        db.query(query, [mat, quantity, id], (err, response) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }
            res.send(response);
        });
    }
    else if (mat) {
        const query = "UPDATE equipments SET mat=? WHERE id=?"
        db.query(query, [mat,  id], (err, response) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }
            res.send(response);
        });
    }
    else if (quantity) {
        const query = "UPDATE equipments SET quantity=? WHERE id=?"
        db.query(query, [quantity,  id], (err, response) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
                return;
            }
            res.send(response);
        });
    }
}