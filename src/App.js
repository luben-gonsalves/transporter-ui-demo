import "./App.css";
import { Button, Image, Layout, Menu } from "antd";
import { MessageFilled } from "@ant-design/icons";
import ProductFeatures from "./components/ProductFeatures/index";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients/index";
import ContactUs from "./components/ContactUs";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <div>
      <Layout className="layout" style={{ backgroundColor: "#fff" }}>
        <Header style={{ backgroundColor: "#fff" }}>
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" style={{ margin: 0 }}>
              Home
            </Menu.Item>
            <Menu.Item key="2">Our Product</Menu.Item>
            <Menu.Item key="3">About Us</Menu.Item>
            <Menu.Item key="4" style={{ float: "right", margin: 0 }}>
              <Button type="primary">Request Demo</Button>
            </Menu.Item>
            <Menu.Item key="5" style={{ float: "right" }}>
              <MessageFilled />
            </Menu.Item>
          </Menu>
        </Header>
        <Image
          width="100%"
          height={300}
          preview={false}
          style={{ objectFit: "cover", padding: "0px 40px" }}
          src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhbnNwb3J0YXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Content style={{ padding: "0px 40px" }}>
          <div className="site-layout-content">
            <ProductFeatures />
            <AboutUs />
            <Clients />
            <ContactUs />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Transporter ©2021</Footer>
      </Layout>
    </div>
  );
}

export default App;
