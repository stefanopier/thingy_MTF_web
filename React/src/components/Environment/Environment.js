import React from "react";
import PropTypes from "prop-types";
import {Card, CardStandardCodeView} from "../Common/Common";
import {CardChartView, CardColorView} from "./EnvironmentCards";
import "./styles.css";

class Environment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: props.temperature,
      pressure: props.pressure,
      co2: props.co2,
      tvoc: props.tvoc,
      humidity: props.humidity,
      color: props.color,
    };

    this.toggleTemperature = props.toggleTemperature;
    this.togglePressure = props.togglePressure;
    this.toggleCo2 = props.toggleCo2;
    this.toggleTvoc = props.toggleTvoc;
    this.toggleHumidity = props.toggleHumidity;
    this.toggleColor = props.toggleColor;

    this.changeTab = props.changeTab;
  }

  componentWillReceiveProps(np) {
    if (np.temperature !== this.state.temperature) {

      // HACK
      if (typeof np.temperature.reading !== 'undefined') {
        let value = parseFloat(np.temperature.reading.value).toFixed(2);
        let str = "http://127.0.0.1:3001/data?temperature=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });
      }


      this.setState({
        temperature: np.temperature,
      });
    }

    if (np.pressure !== this.state.pressure) {
      
      // HACK
      if (typeof np.pressure.reading !== 'undefined') {
        let value = parseFloat(np.pressure.reading.value).toFixed(2);
        let str = "http://127.0.0.1:3001/data?pressure=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });
      }

      
      this.setState({
        pressure: np.pressure,
      });
    }

    if (np.co2 !== this.state.co2) {

      // HACK
      if (typeof np.co2.reading !== 'undefined') {
        let value = parseInt(np.co2.reading.value);
        let str = "http://127.0.0.1:3001/data?co2=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });
      }
        
      this.setState({
        co2: np.co2,
      });
    }

    if (np.tvoc !== this.state.tvoc) {
  
      // HACK
      if (typeof np.tvoc.reading !== 'undefined') {
        let value = parseInt(np.tvoc.reading.value);
        let str = "http://127.0.0.1:3001/data?tvoc=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });
      }
      
      this.setState({
        tvoc: np.tvoc,
      });
    }

    if (np.humidity !== this.state.humidity) {

      // HACK
      if (typeof np.humidity.reading !== 'undefined') {
        let value = parseInt(np.humidity.reading.value);
        let str = "http://127.0.0.1:3001/data?humidity=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });
      }

      this.setState({
        humidity: np.humidity,
      });
    }


    if (np.color !== this.state.color) {
      
      // HACK
      if (typeof np.color.reading !== 'undefined') {
        let value = np.color.reading.red;
        let str = "http://127.0.0.1:3001/data?colorR=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });

        value = np.color.reading.green;
        str = "http://127.0.0.1:3001/data?colorG=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });

        value = np.color.reading.blue;
        str = "http://127.0.0.1:3001/data?colorB=" + value + "";
        fetch(str, { method: 'GET', mode: 'no-cors' })
          .then(response => { })
          .catch(err => { });
          
      }

      this.setState({
        color: np.color,
      });
    }
  }

  componentDidMount() {
    this.props.toggleAll("on");
  }

  componentWillUnmount() {
    this.props.toggleAll("off");
  }

  render() {
    return (
      <div>
        <Card name="temperature" changeTab={this.changeTab} toggleFeature={this.toggleTemperature} tab={this.state.temperature.activeTab}>
          {(!this.state.temperature.activeTab || this.state.temperature.activeTab === "feature") && <CardChartView feature={this.state.temperature} />}
          {this.state.temperature.activeTab === "code" && <CardStandardCodeView code="temperature" feature={this.state.temperature} featureMode="notify"/>}
        </Card>

        <Card name="pressure" changeTab={this.changeTab} toggleFeature={this.togglePressure} tab={this.state.pressure.activeTab}>
          {(!this.state.pressure.activeTab || this.state.pressure.activeTab === "feature") && <CardChartView feature={this.state.pressure} />}
          {this.state.pressure.activeTab === "code" && <CardStandardCodeView code="pressure" feature={this.state.pressure} featureMode="notify"/>}
        </Card>

        <Card name="humidity" changeTab={this.changeTab} toggleFeature={this.toggleHumidity} tab={this.state.humidity.activeTab}>
          {(!this.state.humidity.activeTab || this.state.humidity.activeTab === "feature") && <CardChartView feature={this.state.humidity} />}
          {this.state.humidity.activeTab === "code" && <CardStandardCodeView code="pressure" feature={this.state.humidity} featureMode="notify"/>}
        </Card>

        <Card name="CO2" interactionName="co2" changeTab={this.changeTab} toggleFeature={this.toggleCo2} tab={this.state.co2.activeTab}>
          {this.state.co2 && (!this.state.co2.activeTab || this.state.co2.activeTab === "feature") && <CardChartView feature={this.state.co2} />}
          {this.state.co2 && this.state.co2.activeTab && this.state.co2.activeTab === "code" && <CardStandardCodeView code="gas" feature={this.state.co2} featureMode="notify"/>}
        </Card>

        <Card name="color" changeTab={this.changeTab} toggleFeature={this.toggleColor} tab={this.state.color.activeTab}>
          {(!this.state.color.activeTab || this.state.color.activeTab === "feature") && <CardColorView color={this.state.color} />}
          {this.state.color.activeTab === "code" && <CardStandardCodeView code="color" feature={this.state.color} featureMode="notify"/>}
        </Card>

        <Card name="TVOC" interactionName="tvoc" changeTab={this.changeTab} toggleFeature={this.toggleTvoc} tab={this.state.tvoc.activeTab}>
          {this.state.tvoc && (!this.state.tvoc.activeTab || this.state.tvoc.activeTab === "feature") && <CardChartView feature={this.state.tvoc} />}
          {this.state.tvoc && this.state.tvoc.activeTab && this.state.tvoc.activeTab === "code" && <CardStandardCodeView code="gas" feature={this.state.tvoc} featureMode="notify"/>}
        </Card>
      </div>
    );
  }
}

Environment.propTypes = {
  temperature: PropTypes.object,
  pressure: PropTypes.object,
  humidity: PropTypes.object,
  co2: PropTypes.object,
  color: PropTypes.object,
  tvoc: PropTypes.object,
  changeTab: PropTypes.func,
  toggleTemperature: PropTypes.func,
  togglePressure: PropTypes.func,
  toggleCo2: PropTypes.func,
  toggleTvoc: PropTypes.func,
  toggleHumidity: PropTypes.func,
  toggleColor: PropTypes.func,
  toggleAll: PropTypes.func,
};

export default Environment;
