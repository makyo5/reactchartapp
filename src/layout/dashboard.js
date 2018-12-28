import React, { Component } from 'react';
import XxkWorkStatic from '../component/xxkworkstatic';
import { Row, Col } from 'antd';


class Dashboard extends Component {
    render () {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <XxkWorkStatic/>
                    </Col>
                    <Col span={6}>
                        <XxkWorkStatic/>
                    </Col>
                    <Col span={6}>
                        <XxkWorkStatic/>
                    </Col>
                    <Col span={6}>
                        <XxkWorkStatic/>
                    </Col>
                </Row>
                        
            </div>
        )
    }
}
export default Dashboard;
