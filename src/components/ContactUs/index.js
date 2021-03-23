import React from "react";
import { Col, Image, Row } from "antd";
import { FacebookFilled, TwitterSquareFilled } from "@ant-design/icons";

const ContactUs = () => {
  return (
    <div style={{ margin: "20px 0px 40px 0px" }}>
      <h3>Contact Us</h3>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
        <Col xs={24} md={12} xl={10} lg={10}>
          <div id="address">
            <h4>Address</h4>
            <p>117 College View,Belleville IL Illinois</p>
          </div>
          <div id="email">
            <h4>Email</h4>
            <p>4m9uoiwdnow@temporary-mail.net</p>
          </div>
          <div id="phone">
            <h4>Phone</h4>
            <p>708-600-4460</p>
          </div>
          <div id="follow">
            <h4>Follow us on</h4>
            <FacebookFilled style={{ fontSize: "30px", marginRight: "10px" }} />
            <TwitterSquareFilled style={{ fontSize: "30px" }} />
          </div>
        </Col>
        <Col xs={24} md={12} xl={10} lg={10}>
          <Image
            height={250}
            src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
