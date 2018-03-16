
module.exports = {
    read: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;
        console.log("Yay! I made it!");

        db.get_inventory([params])
        .then( (res) => res.status(200).send(res))
        .catch( (err) => res.status(500).send(err) );
    },
    create: (req, res) => {
        const db = req.app.get('db');
        const { ProductId, ProductName, ProductPrice, ImageUrl } = req.body;

        db.postProducts([ProductId, ProductName, ProductPrice, ImageUrl])
        .then( () => res.status(200).send() )
        .catch( (err) => {
            console.log(err)
        })
        
    },
//     delete: (req, res) => {

//     },
    update: (req, res) => {

    }
}