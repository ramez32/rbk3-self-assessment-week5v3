var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
app.get('/users',function(req,res){
	sequelize.query("select * from users").spread((results, metadata) => {
		console.log(results)
		res.send(results)
})
})
module.exports = { 
  app: app,
  User: User
};
