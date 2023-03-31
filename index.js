import React from "react";
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();
const app = express();
import mysql from "mysql";

var db_config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
};

var connection;

function handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.

    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

connection.query("CREATE TABLE IF NOT EXISTS users (user_id VARCHAR(200)," +
    "age INTEGER," +
    "sex VARCHAR(15)," +
    "healthy_food_preference VARCHAR(35))");

connection.query("CREATE TABLE IF NOT EXISTS student_details (user_id VARCHAR(200)," +
"importance VARCHAR(15)," +
"likeness VARCHAR(15)," +
"email VARCHAR(55))");


connection.query("CREATE TABLE IF NOT EXISTS results (user_id VARCHAR(200)," +
    "group_id VARCHAR(200)," +
    "recipe_1 VARCHAR(15)," +
    "recipe_2 VARCHAR(15)," +
    "recipe_3 VARCHAR(15)," +
    "recipe_4 VARCHAR(15)," +
    "recipe_5 VARCHAR(15)," +
    "recipe_6 VARCHAR(15))");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/pages/'));
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/',function(req,res) { res.sendFile(__dirname + '/pages/tugraz.html'); });
app.get('/0',function(req,res) { res.sendFile(__dirname + '/pages/NoEffect.html'); });
app.get('/1',function(req,res) { res.sendFile(__dirname + '/pages/Explanation.html'); });
app.get('/2',function(req,res) { res.sendFile(__dirname + '/pages/PositionEffect.html'); });
app.get('/3',function(req,res) { res.sendFile(__dirname + '/pages/DecoyEffect.html'); });
app.get('/4',function(req,res) { res.sendFile(__dirname + '/pages/DecoyPositionEffect.html'); });
app.get('/5',function(req,res) { res.sendFile(__dirname + '/pages/DecoyPositionExplanation.html'); });
app.get('/6',function(req,res) { res.sendFile(__dirname + '/pages/ExplanationDecoyEffect.html'); });
app.get('/7',function(req,res) { res.sendFile(__dirname + '/pages/ExplanationPositionEffect.html'); });
app.get('/8',function(req,res) { res.sendFile(__dirname + '/pages/Finished.html'); });
app.get('/9',function(req,res) { res.sendFile(__dirname + '/pages/thanks.html'); });
app.get('/userData',function(req,res) { res.sendFile(__dirname + '/pages/homepage.html'); });

app.post('/add_result',(req,res)=> {

    const request = req.body;
    const data = {
        user_id: request.user_id,
        group_id: request.group_id,
        recipe_1: request.recipe1,
        recipe_2: request.recipe2,
        recipe_3: request.recipe3,
        recipe_4: request.recipe4,
        recipe_5: request.recipe5,
        recipe_6: request.recipe6
    }


    connection.query("INSERT INTO results set ? ",data,
            function(err)
            {

                if (err) {
                    console.log("Error inserting : %s ",err);
                }
                else {
                    res.status(200).redirect("/8" + "?user_id=" + data.user_id);
                    console.log("Result Added Successfully!!");
                }
            });
});

app.post('/add_user',(req,res)=> {

    const request = req.body;
    const data = {
        user_id: request.user_id,
        age: request.age,
        sex: request.sex,
        healthy_food_preference: request.healthy_food_preference
    }
    connection.query("INSERT INTO users set ? ",data,
        function(err)
        {
            if (err) {
                res.status(400).json('Sorry!!Unable To Add');
                console.log("Error inserting : %s ",err );
            }
            else {
                res.status(200).redirect("/" + Math.floor(Math.random() * 8) + "?user_id=" + data.user_id)
                console.log("User Added Successfully!!");
            }
        });
});

app.post('/add_student_details',(req,res)=> {

    const request = req.body;
    const data = {
        user_id: request.user_id,
        importance: request.importance,
        likeness: request.likeness,
        email: request.email
    }
    connection.query("INSERT INTO student_details set ? ",data,
        function(err)
        {
            if (err) {
                res.status(400).json('Sorry!!Unable To Add');
                console.log("Error inserting : %s ",err );
            }
            else {
                res.status(200).redirect("/9")
                console.log("User Added Successfully!!");
            }
        });
});

app.get('/userData',(req,res)=> {
 res.status(200).redirect("/userData");
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
