var express = require('express');
var router = express.Router();
var osc = require("osc");

var osc_data = {};
var isSend = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
    osc_data.heading = (typeof req.query.heading !== "undefined") ? req.query.heading : osc_data.heading;
    osc_data.x = (typeof req.query.x !== "undefined") ? req.query.x : osc_data.x;
    osc_data.y = (typeof req.query.y !== "undefined") ? req.query.y : osc_data.y;
    osc_data.z = (typeof req.query.w !== "undefined") ? req.query.w : osc_data.w;
    osc_data.w = (typeof req.query.z !== "undefined") ? req.query.z : osc_data.z;
    res.send("ok");
});

var udp = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 5000, // not receiving, but here's a port anyway
    remoteAddress: "127.0.0.1",
    remotePort: 30200 // the port to send OSC
});

udp.open();

udp.on("ready", function () {
    console.log("UDP ready");
});


setInterval(function () {
    sendOSC();
}, 100); // 7.5ms


function sendOSC() {
    udp.send({
        address: "/thingy/heading",
        args: [osc_data.heading]
    });
    udp.send({
        address: "/thingy/x",
        args: [osc_data.x]
    });
    udp.send({
        address: "/thingy/y",
        args: [osc_data.y]
    });
    udp.send({
        address: "/thingy/z",
        args: [osc_data.z]
    });
    udp.send({
        address: "/thingy/w",
        args: [osc_data.w]
    });
}

module.exports = router;
