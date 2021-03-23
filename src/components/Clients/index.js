import { Col, Row } from "antd";
import React from "react";
import { ClientCard } from "./style";

const Clients = () => {
  const clients = [
    "Rangers Q",
    "Slark",
    "Nevermore",
    "Legion NT",
    "Fickrr",
    "Lemo Group",
  ];
  return (
    <div style={{ margin: "20px 0px" }}>
      <h3>Clientele</h3>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
        {clients.map((c) => (
          <Col xs={24} md={12} xl={4} lg={4}>
            <ClientCard>{c}</ClientCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Clients;
