var express = require('express');
var router = express.Router();
var osc = require("osc");

var osc_data = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
    //console.log('data in');
    //var input = req.body;
    osc_data.heading = req.query.heading;
    //console.log("heading: " + input);
    res.send("ok");
});


var udp = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 5000, // not receiving, but here's a port anyway
    remoteAddress: "10.42.0.122", // the other laptop

//    remoteAddress: "10.37.101.108", // tom

//    remoteAddress: "10.37.101.119", // the other laptop

    remotePort: 30200 // the port to send to
});

udp.open();

udp.on("ready", function () {
    console.log("UDP ready");
});


setInterval(function () {
    sendOSC();
}, 10); //7.5ms


function sendOSC() {
    //udp.send({
    //    address: "/thingy/roll",
    //    args: [_roll]
    //});
    //udp.send({
    //    address: "/thingy/pitch",
    //    args: [_pitch]
    //});
    //udp.send({
    //    address: "/thingy/yaw",
    //    args: [_yaw]
    //});
    udp.send({
        address: "/thingy/heading",
        args: [osc_data.heading]
    });
    //udp.send({
    //    address: "/thingy/x",
    //    args: [_x]
    //});
    //udp.send({
    //    address: "/thingy/y",
    //    args: [_y]
    //});
    //udp.send({
    //    address: "/thingy/z",
    //    args: [_z]
    //});

    //console.log("SENT")

}

module.exports = router;
