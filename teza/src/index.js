import React from "react";
import express from 'express';
import bodyParser from 'body-parser';
import connection from 'express-myconnection';
import mysql from 'mysql';
/*
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={< Homepage />}></Route>
                <Route exact path='/0' element={< NoEffect />}></Route>
                <Route exact path='/1' element={< ExplanationPositionEffect />}></Route>
                <Route exact path='/2' element={< Explanation />}></Route>
                <Route exact path='/3' element={< PositionEffect />}></Route>
                <Route exact path='/4' element={< DecoyEffect />}></Route>
                <Route exact path='/5' element={< ExplanationDecoyEffect />}></Route>
                <Route exact path='/6' element={< DecoyPositionEffect />}></Route>
                <Route exact path='/7' element={< DecoyPositionExplanation />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
root.render(<App tab="home"/>);*/

import path from 'path';
const __dirname = path.resolve();
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/pages/'));

app.use(

    connection(mysql,{

        host: 'localhost', //'localhost',
        user: 'admin',
        password : 'password',
        port : 3306, //port mysql
        database:'results'

    },'pool')); //or single

app.post('/add_result',(req,res)=>{

    let {recipe_num,result_val,user_id} = req.body;

    if(!recipe_num) return res.status(400).json('Recipe number cant be blank');
    if(!result_val) return res.status(400).json('Result value cant be blank');
    if(!user_id) return res.status(400).json('User id cant be blank');

    var data={recipe_num:recipe_num,
        result_val:result_val,
        user_id: user_id
    };


    var query = connection.query("INSERT INTO results set ? ",data,
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


});

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/pages/homepage.html');
});

app.listen(8080, ()=> {
    console.log(`app is running on port 8080`);
});


