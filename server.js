/**
 * HTTPS Proxy Server
 */

// TODO morgan
const app = require("express")(),
      morgan = require("morgan"),
      serveStatic = require('serve-static')
      https = require("https"),
      fs = require("fs")

const secretKey =
  fs.readFileSync("./dark_sky_key.txt", { encoding: "utf8"}).trim()

app.use(morgan("tiny"))
app.use(serveStatic('build', {'index': ['index.html', 'index.htm']}))
app.get('/weather/:lat/:long', function(req, res){
  const darkSkyEndpt = `https://api.darksky.net/forecast/${secretKey}/${req.params.lat},${req.params.long}`

  https.request(darkSkyEndpt, (res2) => {
    res2.setEncoding('utf8')
    res2.pipe(res, {end: true})
  }).end()
}).listen(8080)
