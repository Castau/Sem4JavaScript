const http = require("http");
const { getSecureRandoms } = require("./exercise1.js");
const firstEndpoint = "/api/securerandoms";


const server = http.createServer((req, res) => {
    if (req.url === firstEndpoint) {
        res.setHeader('Content-Type', 'application/json');
        (async () => {
            const sizes = [48, 40, 32, 24, 16, 8];
            let secObjs = {
                title: `${sizes.length} secure randoms`
            };
            let result = await getSecureRandoms(sizes);
            secObjs.randoms = result;
            res.write(JSON.stringify(secObjs, null, '\t'));
            return res.end();
        })();
    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Secure Random Exercise</h2>
	  <p>Exposes this endpoint <a href="${firstEndpoint}"><code>${firstEndpoint}</code></a></p>`);
        return res.end();
    }
});

server.listen(3000);
console.log('listening on 3000');