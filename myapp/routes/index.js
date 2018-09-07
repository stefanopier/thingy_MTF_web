var express = require('express');
var router = express.Router();
var osc = require("osc");

var quaternion = {};
var osc_data = {};
var isSend = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
    osc_data.heading = (typeof req.query.heading !== "undefined") ? req.query.heading : osc_data.heading;
    quaternion.x = (typeof req.query.x !== "undefined") ? req.query.x : quaternion.x;
    quaternion.y = (typeof req.query.y !== "undefined") ? req.query.y : quaternion.y;
    quaternion.z = (typeof req.query.w !== "undefined") ? req.query.w : quaternion.w;
    quaternion.w = (typeof req.query.z !== "undefined") ? req.query.z : quaternion.z;
    quaternionToEulerAngle()
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
        address: "/thingy/roll",
        args: [osc_data.x]
    });
    udp.send({
        address: "/thingy/pitch",
        args: [osc_data.y]
    });
    udp.send({
        address: "/thingy/yaw",
        args: [osc_data.z]
    });
    udp.send({
        address: "/thingy/quaternionX",
        args: [quaternion.x]
    });
    udp.send({
        address: "/thingy/quaternionY",
        args: [quaternion.y]
    });
    udp.send({
        address: "/thingy/quaternionZ",
        args: [quaternion.z]
    });
    udp.send({
        address: "/thingy/quaternionW",
        args: [quaternion.w]
    });
}

function quaternionToEulerAngle() {

    let t0 = 2.0 * (quaternion.w * quaternion.x + quaternion.y * quaternion.z);
    let t1 = 1.0 - 2.0 * (quaternion.x * quaternion.x + quaternion.y * quaternion.y);
    osc_data.x = (Math.atan2(t0, t1)) * 180 / Math.PI;
  
    let t2 = 2.0 * (quaternion.w * quaternion.y - quaternion.z * quaternion.x);
      if(t2 > 1.0) {
      t2 = 1.0;
    } else if(t2 < -1.0){
        t2 = -1.0;
    }
    osc_data.y = (Math.asin(t2)) * 180 / Math.PI; // pitch
  
    let t3 = 2.0 * (quaternion.w * quaternion.z + quaternion.x * quaternion.y);
    let t4 = 1.0 - 2.0 * (quaternion.y * quaternion.y + quaternion.z * quaternion.z);
    osc_data.z = (Math.atan2(t3, t4)) * 180 / Math.PI; //yaw
}
  

module.exports = router;
