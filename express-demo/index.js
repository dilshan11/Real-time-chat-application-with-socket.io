var express=require('express');
var socket=require('socket.io');
var app=express();
var server=app.listen(4000,function(){
    console.log('listerning to port 4200');
})
app.get('/',function(req,res){
    res.send('welcome');
})

var io=socket(server);
io.on('connection',function(socket){
    
    socket.on('chat',function(data){
         io.sockets.emit('chat',data);
    })
})