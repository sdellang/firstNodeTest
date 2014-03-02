//setup Dependencies
var connect = require('connect')
    , express = require('express')
    , io = require('socket.io')
    , api = require('./routes/api.js')
    , com = require('./routes/commons.js')
    , port = (process.env.PORT || 8081);

//Setup Express
var server = express();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.set('view options', { layout: false });
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "shhhhhhhhh!"}));
    server.use(connect.static(__dirname + '/static'));
    server.use(server.router);
    server.use(com.errors);
});

//setup the errors

server.listen(port);

//Setup Socket.IO
var io = io.listen(server);
io.sockets.on('connection', function(socket){
  console.log('Client Connected');
  socket.on('message', function(data){
    socket.broadcast.emit('server_message',data);
    socket.emit('server_message',data);
  });
  socket.on('disconnect', function(){
    console.log('Client Disconnected.');
  });
});


///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////

//common routes
server.get('/', com.index);
server.get('/partials/:name', com.partials)

//api routes
server.get('/api/readData/:id', api.readData)

//A Route for Creating a 500 Error (Useful to keep around)
server.get('/500', function(req, res){
    throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
server.get('*', com.index);

console.log('Listening on http://0.0.0.0:' + port );
