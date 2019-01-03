import React, { Component } from "react";
import { Chart, Tooltip, Axis, Legend, SmoothLine } from "viser-react";

import * as request from "request";

var options = {
  url: "http://10.101.2.2:50500/api/clinic/EveryClinicTodayCounts"
  // url:'http://10.101.2.2:84/api/values/issuemaster'
};
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(body);
  }
}

class ClinicDailyWorkStatic extends Component {
  componentDidMount() {
    request(options, callback);
  }
  render() {
    return <div>This is Cli</div>;
  }
}

class ClinicTodayWorkStatic extends Component {
  render() {
    return <div>Today</div>;
  }
}

export { ClinicDailyWorkStatic, ClinicTodayWorkStatic };
