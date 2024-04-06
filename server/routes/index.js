var express = require('express');
var router = express.Router();
var cors=require('cors')

app.use(cors(
  {
    origin:["https://ignyt-shop-client.vercel.app/login"],
    methods: ["POST", "GET"],
    credentials:true
  }
))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
