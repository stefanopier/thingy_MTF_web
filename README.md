 Thingy 52 React webapp + nodejs wrapper to OSC localhost 

### Prerequisites
 * **Node.js** - Install Node.js (https://nodejs.org/en/)
 * **Git** - If you want to clone this repository, you will have to install [Git](https://git-scm.com/downloads). Alternatively, you can download the repository by clicking "Clone or download", and then "Download ZIP".
 * **Google Chrome** - As [Google Chrome](https://www.google.com/chrome/) is currently the only browser supporting Web Blueooth, you will need it to use the web app.
 **Type as URL: chrome://flags and enable Experimental Web Platform features**
 * **Web Bluetooth polyfill for Windows 10** - If you are using Windows you will have to install a polyfill to enable Web Bluetooth. A guide with download and setup instructions can be found [here](https://github.com/urish/web-bluetooth-polyfill).

### Installation instructions
1. Clone or download this repository.
2. Make sure you have all prerequisites.
3. Open terminal, navigate to the React folder of the repository:
```shell
cd React/
npm i
npm run-script build
```
4. Navigate to myapp folder
```shell
cd myapp/
npm i
```
5. Install a local web server: https://www.npmjs.com/package/serve

### USAGE
1. Open terminal and run the react webapp, launching the local web server from the react build/ folder
```shell
cd React/build
serve
```
2. Set Google Chrome to http://localhost:5000
3. Connect the Thingy
4. Open another terminal and navigate to the myapp folder
```shell
cd myapp
npm run quiet
```
or, with verbose logging:
```shell
npm run verbose
```

5. You should now receive **OSC data locally on port 30200**

### OSC paths:
        address: "/thingy/heading"
        address: "/thingy/roll"
        address: "/thingy/pitch" 
        address: "/thingy/yaw"
        address: "/thingy/quaternionX"
        address: "/thingy/quaternionY"
        address: "/thingy/quaternionZ"
        address: "/thingy/quaternionW"
        address: "/thingy/direction"
        address: "/thingy/count"
        address: "/thingy/temperature"
        address: "/thingy/pressure"
        address: "/thingy/co2"
        address: "/thingy/tvoc"
        address: "/thingy/humidity"
        address: "/thingy/colorR"
        address: "/thingy/colorG"
        address: "/thingy/colorB"

### TODO ###

currently only page data are routed over OSC, i.e. motion if motion page is shown etc.
