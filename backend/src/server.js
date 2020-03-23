const express = require('express');
const server = express ();

server.get('/' , (req , res) =>{
    req.query.name;
    return res.json({message: `Hello ${req.query.name}`});
});

server.listen(3333);