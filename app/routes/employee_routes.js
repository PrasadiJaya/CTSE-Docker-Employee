var ObjectID = require('mongodb').ObjectID



module.exports = function(app, db){

    app.get('/employees/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('employees').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(item);
            }
        });
    });



    app.post('/employees', (req, res) => {
        const employee = {FirstName: req.body.FirstName, LastName: req.body.LastName, ContactNo: req.body.ContactNo, Address: req.body.Address, Salary: req.body.Salary};

        db.collection('employees').insert(employee, (err, result) => {
            if(err){
                res.send({ 'error': 'An error has occured'});
            }else {
                res.send('Added successfully');
            }
        });
    });

    app.delete('/employees/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('employees').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send('Employee ' + id + ' deleted!');
            }
        });
    });

    app.put('/employees/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        const focusCustomer = { FirstName: req.body.FirstName, LastName: req.body.LastName, ContactNo: req.body.ContactNo, Address: req.body.Address, Salary: req.body.Salary };

        db.collection('employees').replaceOne(details, focusCustomer, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(item);
            }
        });
    });
}

