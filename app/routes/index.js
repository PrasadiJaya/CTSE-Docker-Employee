const employeeRoutes = require('./employee_routes');

module.exports = function(app, db){
    employeeRoutes(app,db);
}