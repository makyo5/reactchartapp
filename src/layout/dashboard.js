import React, { Component } from "react";
import { Row, Col } from "antd";

import {
  XxkWorkStatic,
  ECWorkStatics,
  ECWorkDayStatics
} from "../component/xxkworkstatic";

import { ClinicTodayWorkStatic } from "../component/clinic/clinicstatus";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
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
            <ClinicTodayWorkStatic />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            12
          </Col>
          <Col span={12}>
            12
          </Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;
