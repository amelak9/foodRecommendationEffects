import React from "react";
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();
const app = express();
import mysql from "mysql";

var con=mysql.createConnection({
    host: "0.0.0.0",
    user: "root",
    password: "password",
    database: "recipes_production"
});

con.connect(function(err) {
    if (err) throw err
    console.log("Connected!");
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/pages/'));
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/',function(req,res) { res.sendFile(__dirname + '/pages/homepage.html'); });
app.get('/0',function(req,res) { res.sendFile(__dirname + '/pages/NoEffect.html'); });
app.get('/1',function(req,res) { res.sendFile(__dirname + '/pages/Explanation.html'); });
app.get('/2',function(req,res) { res.sendFile(__dirname + '/pages/PositionEffect.html'); });
app.get('/3',function(req,res) { res.sendFile(__dirname + '/pages/DecoyEffect.html'); });
app.get('/4',function(req,res) { res.sendFile(__dirname + '/pages/DecoyPositionEffect.html'); });
app.get('/5',function(req,res) { res.sendFile(__dirname + '/pages/DecoyPositionExplanation.html'); });
app.get('/6',function(req,res) { res.sendFile(__dirname + '/pages/ExplanationDecoyEffect.html'); });
app.get('/7',function(req,res) { res.sendFile(__dirname + '/pages/ExplanationPositionEffect.html'); });
app.get('/8',function(req,res) { res.sendFile(__dirname + '/pages/Finished.html'); });

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


        con.query("INSERT INTO results set ? ",data,
            function(err)
            {

                if (err) {
                    console.log("Error inserting : %s ",err);
                }
                else {
                    res.status(200).redirect("/8");
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
    con.query("INSERT INTO users set ? ",data,
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

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
