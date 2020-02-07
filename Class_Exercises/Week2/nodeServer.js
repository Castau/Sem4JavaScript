const http = require('http');
const systemInfo = require("./osInfo.js");
const dos = require("./dosDetector.js");

const timeValue = 1500;
const dosdetector = new dos.DOS_Detector(timeValue);
dosdetector.on('DOS', event => {
    console.log('Possible DOS! Relevant data: ', event);
});

const server = http.createServer((req, res) => {
    if (req.url === '/api/os-info') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(systemInfo.systemInfo(), null));
        return res.end();
    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo</h2>
        <p>Exposes this endpoint <code>/api/os-info</code></p>`);
        return res.end();
    }
});
server.on('connection', (sock) => {
    dosdetector.addUrl(sock.remoteAddress);
});
server.listen(3000);
console.log('listening on 3000');
