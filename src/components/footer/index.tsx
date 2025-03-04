import {
  FacebookFilled,
  GlobalOutlined,
  PhoneOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Select,
  Typography,
} from "antd";
import "./index.scss";
const { Footer } = Layout;
const { Text } = Typography;
function CustomFooter() {
  return (
    <>
      <div className="Footer">
        <div style={{ backgroundColor: "white", height: "20px" }}></div>
        <div className="Footer__Background">
          <img
            className="Footer__Background--human"
            src="/Maskgroup.png"
            alt="Background"
          />
          {/* <img
            className="Footer__Background--Green"
            src="/FooterBackgroundGreen.jpg"
            alt="backgroundGreen"
          /> */}
          <div className="Footer__Background--Form">
            <div className="Footer__Background--Wrapper">
              <div className="Footer__Background--Wrapper--Header">
                <h3>ĐĂNG KÝ ĐỂ NHẬN TƯ VẤN NGAY TỪ BIDV</h3>
              </div>
              <div className="Footer__Background--Wrapper--Content">
                <Form size="middle">
                  <Form.Item>
                    <Input placeholder="Tên tổ chức" />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Mã số thẻ" />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Số điện thoại" />
                  </Form.Item>
                  <Row className="Row">
                    <Col className="Col">
                      <Form.Item>
                        <Select placeholder="Tỉnh/Thành phố ">
                          <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="Col">
                      <Form.Item>
                        <Select placeholder="Quận/Huyện">
                          <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    name="TextArea"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Input.TextArea placeholder="Sản phẩm bạn đang làm" />
                  </Form.Item>
                  <div className="WrappButton">
                    <Button className="WrappButton__ButtonSubmit">
                      ĐĂNG KÝ NGAY
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Footer
          className="Footer__Down"
          style={{
            background:
              "linear-gradient(89.78deg, #026A66 0.14%, #0AAD90 99.76%)",
            color: "white",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <div className="Footer__Down__Content">
            <div className="groupImage">
              <Image src="/LogoBIDV.png" preview={false} alt="logoBIDV" />
              <Text className="text">
                Vững bước Tiên phong - Đồng hành Phát triển
              </Text>
            </div>
            <div className="groupTagA">
              <a href="tel:19009248">
                <span>
                  <PhoneOutlined />
                </span>
                1900 9248
              </a>
              <a href="https://bidv.com.vn">
                <span>
                  <GlobalOutlined />
                </span>
                bidv.com.vn
              </a>
              <a href="https://facebook.com/BIDVbankvietnam">
                <span>
                  <FacebookFilled />
                </span>
                BIDVbankvietnam
              </a>
            </div>
          </div>
          <div className="dividerWrapper">
            <Divider variant="solid" className="dividerWrapper__content" />
          </div>
          <div className="iconLast">
            <span>
              <UpCircleOutlined />
            </span>
          </div>
        </Footer>
      </div>
    </>
  );
}

export default CustomFooter;
