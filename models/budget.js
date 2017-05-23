module.exports = function(sequelize, Sequelize) {
 

// The next thing we are going to do is create the budget model, which is basically the budget table. This will contain basic budget information.

// In our models folder, we create a file and name it budget.js. The full path for this file should be app/models/budget.js.
 
    var Budget = sequelize.define('budget', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        month: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        takehome: {
            type: Sequelize.INTEGER,
        },
 
        totaltakehome: {
            type: Sequelize.INTEGER
        },
    });
 
    return Budget;
 
}