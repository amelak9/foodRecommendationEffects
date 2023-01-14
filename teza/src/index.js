import React from "react";
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/pages/'));

app.get('/',function(req,res) { res.sendFile(__dirname + '/pages/homepage.html'); });
app.get('/0',function(req,res) { res.sendFile(__dirname + '/pages/NoEffect.html'); });
app.get('/1',function(req,res) { res.sendFile(__dirname + '/pages/Explanation.html'); });
app.get('/2',function(req,res) { res.sendFile(__dirname + '/pages/PositionEffect.html'); });
app.get('/3',function(req,res) { res.sendFile(__dirname + '/pages/DecoyEffect.html'); });
app.get('/4',function(req,res) { res.sendFile(__dirname + '/pages/DecoyPositionEffect.html'); });
app.get('/5',function(req,res) { res.sendFile(__dirname + '/pages/DecoyPositionExplanation.html'); });
app.get('/6',function(req,res) { res.sendFile(__dirname + '/pages/ExplanationDecoyEffect.html'); });
app.get('/7',function(req,res) { res.sendFile(__dirname + '/pages/ExplanationPositionEffect.html'); });

app.post('/add_result',(req,res)=>{

    const request = req.body;
    let recipe1 = request.recipe1;
    let recipe2 = request.recipe2;
    let recipe3 = request.recipe3;
    let recipe4 = request.recipe4;
    let recipe5 = request.recipe5;
    let recipe6 = request.recipe6;
    /*if(recipe1 == null) return res.status(400).json('Recipe cant be blank');
    if(recipe2 == null) return res.status(400).json('Recipe cant be blank');
    if(recipe3 == null) return res.status(400).json('Recipe cant be blank');
    if(recipe4 == null) return res.status(400).json('Recipe cant be blank');
    if(recipe5 == null) return res.status(400).json('Recipe cant be blank');
    if(recipe6 == null) return res.status(400).json('Recipe cant be blank');*/

    const user_id = Math.random()
    for (let i = 1; i < 7; i++) {
        const data = {
            recipe_num: i,
            result_val: req.body[i - 1],
            user_id: user_id
        };
        con.query("INSERT INTO results set ? ",data,
            function(err, rows)
            {

                if (err){
                    //If error
                    res.status(400).json('Sorry!!Unable To Add');
                    console.log("Error inserting : %s ",err );
                }
                else
                    //If success
                    res.status(200).json('Result Added Successfully!!')

            });
    }
});


app.listen(3306, ()=> {
    console.log(`app is running on port 8080`);
});


