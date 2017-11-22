/**
 * HTTPS Proxy Server
 */

const PORT = process.env.PORT,
      DARK_SKY_KEY = process.env.DARK_SKY_KEY,
      assert = require('assert');

assert.notStrictEqual(DARK_SKY_KEY, undefined)
assert.notStrictEqual(PORT, undefined)

// TODO morgan
const app = require("express")(),
      morgan = require("morgan"),
      serveStatic = require('serve-static'),
      https = require("https"),
      fs = require("fs")

const secretKey = process.env.DARK_SKY_KEY.trim()
assert.strictEqual(secretKey.length, 32)

app.use(morgan("tiny"))
app.use(serveStatic('build', {'index': ['index.html', 'index.htm']}))
app.get('/weather/:lat/:long', function(req, res){
  const darkSkyEndpt = `https://api.darksky.net/forecast/${secretKey}/${req.params.lat},${req.params.long}`

  https.request(darkSkyEndpt, (res2) => {
    res2.setEncoding('utf8')
    res2.pipe(res, {end: true})
  }).end()
}).listen(PORT)
