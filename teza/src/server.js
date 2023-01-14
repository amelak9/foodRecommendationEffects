import mysql from "mysql";

var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
});

con.connect(function(err) {
    if (err) throw err
});

con.query("CREATE DATABASE recipes")

