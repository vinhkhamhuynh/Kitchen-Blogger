// dependencies
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

// dependencies for chatbox


const formatMessage = require('./utils/messages');

const botName = 'Kitchen Javis';

// end


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// set up for express app



const hbs = exphbs.create({helpers});

const sess = {
  secret: 'Super secret secret',
  cookie: {maxAge: 30000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//chatbox socket io connection


// const io = socketio(server);
// run when client connects

io.on('connection', socket => {
  console.log('new ws connection ...');

 
   //WELCOME CURRENT USER -emit to 1 user
   socket.emit('message', formatMessage(botName, 'welcome to kitchen heaven'));

   // broadcast when a user connect to all users that are connected 
   socket.broadcast.emit('message', formatMessage(botName, 'a user has JOINED the chat'));
 
   //run when user DISCONNECT 
   socket.on('disconnect', () => {
     io.emit ('message', formatMessage(botName,'a user has DISCONNECTED from the chat'))
   })
 
   //listen for chatMessage
   socket.on('chatMessage', msg => {
     console.log(`from client to server ${msg}`);
     io.emit('message', formatMessage('user', msg));
   });

 
 
});

// end


app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log('Now listening'));
});

// http.listen(3000, () => {
//   console.log('listening for socket io');
// });