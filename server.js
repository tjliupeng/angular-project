// get dependencies
const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// load environment file
const program = require('commander');
program
    .version('0.1.0')
    .option('-d, --dev', 'develop mode')
    .option('-t, --test', 'test mode')
    .option('-p, --prod', 'product mode')
    .parse(process.argv);
let environment = require('./server/environments/environment');
if (program.dev) {
    environment = require('./server/environments/environment');
}else if (program.test) {
    environment = require('./server/environments/environment.test');
}else if (program.prod) {
    environment = require('./server/environments/environment.prod');
}

const app = express();

// get out mockup API routes
//const heroes = require('./server/routes/heroes.route');
//const upload = require('./server/routes/upload.route');

// point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// proxy angular requests of ./assets static files
//app.use('/proxy/assets', express.static(path.join(__dirname, 'dist/assets')));

// set mockup API routes
//app.use('/proxy/mockup', heroes);
//app.use('/proxy/mockup', upload);

// proxy request to local machine
// localIpPort = environment.backend_server + ':' + environment.backend_server_port;
// app.use('/proxy/local/*', proxy(localIpPort,{
//     proxyReqPathResolver: function(req) {  
//         return require('url').parse(req.originalUrl).path.substring(12);
//     }
// }));
//app.use(express.static(path.join(__dirname, 'src')));

// proxy rest request to backend
serverIpPort = environment.backend_server+ ':' + environment.backend_server_port;
app.use('/proxy/*', proxy(serverIpPort, {
    proxyReqPathResolver: function(req) {
        return require('url').parse(req.originalUrl).path.substring(6);
    },
    // userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
    //     //console.log(util.inspect(proxyResData, {showHidden: false, depth: null}))
    //     //console.log(proxyResData.toString())
    //     return proxyResData;
    // }
}));

// catch all other routes and return the index file
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// })

// get port from environment and store in express
// const port = process.env.PORT || '3000';
const port = '3031';
app.set('port', port);

// parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//create http server
const server =http.createServer(app);

//listen on provide port on all network interfaces
server.listen(port, () => console.log(`API running on localhost:${port}`));
