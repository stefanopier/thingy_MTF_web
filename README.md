## thingy_MTF_web
Thingy 52 React webapp + nodejs wrapper to OSC localhost 

# myapp (OSC wrapper)

1. Open a command line tool, navigate to the root folder of the repository, and download dependencies by typing:
```shell
$ npm i
```
1. To test the project, type:
```shell
$ npm start
```

# React

### Recommendations
* This web app was built using a Web Bluetooth API which aims to make it easier to start developing Web Bluetooth applications using Thingy:52. To find out more about this API, [click here](https://github.com/NordicPlayground/Nordic-Thingy52-Thingyjs).
* Learn about the Web Bluetooth API by reading the [Interact with Bluetooth devices on the Web](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) guide by François Beaufort.
* Learn about React by reading the official [React - getting started](https://reactjs.org/docs/getting-started.html) guide.
* For an introduction in how to quickly and effortlessly create React apps, visit [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).


### Prerequisites
 * **Node.js** - Install an [active LTS version of Node.js](https://github.com/nodejs/LTS) (e.g. v8.11.3). The current version (10.6.0) should work, but is not officially supported.
 * **Git** - If you want to clone this repository, you will have to install [Git](https://git-scm.com/downloads). Alternatively, you can download the repository by clicking "Clone or download", and then "Download ZIP".
 * **Google Chrome** - As [Google Chrome](https://www.google.com/chrome/) is currently the only browser supporting Web Blueooth, you will need it to use the web app.
 Type as URL: chrome://flags and enable Experimental Web Platform features
 * **Web Bluetooth polyfill for Windows 10** - If you are using Windows you will have to install a polyfill to enable Web Bluetooth. A guide with download and setup instructions can be found [here](https://github.com/urish/web-bluetooth-polyfill).

### Installation instructions
1. Clone or download this repository.
2. Make sure you have all prerequisites.
3. Open a command line tool, navigate to the root folder of the repository, and download dependencies by typing:
```shell
$ npm i
```
4. To test the project, type:
```shell
npm start
```

### USAGE


On a terminal start React app first
```shell
npm start
```

then start on another terminal
```shell
npm start
```

### OSC data are sent locally on port 30200
### OSC paths:
        address: "/thingy/heading"
        address: "/thingy/roll"
        address: "/thingy/pitch" 
        address: "/thingy/yaw"
        address: "/thingy/quaternionX"
        address: "/thingy/quaternionY"
        address: "/thingy/quaternionZ"
        address: "/thingy/quaternionW"
