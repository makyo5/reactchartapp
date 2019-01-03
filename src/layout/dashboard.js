import React, { Component } from "react";
import { Row, Col } from "antd";

import {
  XxkWorkStatic,
  ECWorkStatics,
  ECWorkDayStatics
} from "../component/xxkworkstatic";

import { ClinicDailyWorkStatic } from "../component/clinic/clinicstatus";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6}>
            <XxkWorkStatic />
          </Col>
          <Col span={6}>
            <ECWorkStatics />
          </Col>
          <Col span={6}>
            <ECWorkDayStatics />
          </Col>
          <Col span={6}>
            <ClinicDailyWorkStatic />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;
