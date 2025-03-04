import React from "react";
import "./index.scss";
import bulletIcon from "../../../public/Bullet.png";
import bannerImage from "../../../public/anh4.png";
import export1 from "../../../public/export 1.png";
import global from "../../../public/global 1.png";
import logicstics from "../../../public/logistics 1.png";
import { Col, Row } from "antd";
import { IoIosArrowDropright } from "react-icons/io";
function Home() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabList = ["TÍN DỤNG", "THANH TOÁN & QUẢN LÝ TIỀN TỆ", "NGÂN HÀNG SỐ"];
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="homepage">
      <img
        src="/homepage.png"
        alt="BIDV Homepage"
        style={{
          objectFit: "cover",
          display: "block",
          width: "100%",
        }}
      />

      <section className="products-section">
        <h2 className="section-title">
          <span className="primary-text">ĐÂU LÀ SẢN PHẨM QUÝ DOANH NGHIỆP</span>
          <span className="highlight-text">ĐANG QUAN TÂM</span>
        </h2>

        <Row gutter={[0, 16]}>
          <Col span={12} className="image-container">
            <div className="image-container__1">
              <div>
                <img
                  src="/taitrothuongmai.png"
                  alt="Tài trợ icon"
                  className="icon"
                />
              </div>
              <div className="text-overlay">
                <h3>
                  TÀI TRỢ <br /> THƯƠNG MẠI
                </h3>
              </div>
            </div>
          </Col>

          <Col span={12} className="image-container">
            <div className="image-container__2">
              <div>
                <img src="/tindung.png" alt="Tín dụng icon" className="icon" />
              </div>
              <div className="text-overlay">
                <h3>TÍN DỤNG</h3>
              </div>
            </div>
          </Col>

          <Col span={12} className="image-container">
            <div className="image-container__3">
              <div>
                <img
                  src="/thanhtoan,quanlytiente.png"
                  alt="Thanh toán icon"
                  className="icon"
                />
              </div>
              <div className="text-overlay">
                <h3>
                  THANH TOÁN &<br />
                  QUẢN LÝ TIỀN TỆ
                </h3>
              </div>
            </div>
          </Col>

          <Col span={12} className="image-container">
            <div className="image-container__4">
              <div>
                <img
                  src="/nganhangso.png"
                  alt="Ngân hàng số icon"
                  className="icon"
                />
              </div>
              <div className="text-overlay">
                <h3>NGÂN HÀNG SỐ</h3>
              </div>
            </div>
          </Col>
        </Row>

        <div className="featured-product">
          <img src="/Bidvicon.png" alt="Star" className="star-icon" />
          <h3>TÀI TRỢ THƯƠNG MẠI</h3>
        </div>
      </section>

      <section className="solutions-section">
        <div className="solutions-grid">
          <div
            className="solution-card"
            style={{
              background: "linear-gradient(90deg, #015f5d 0%, #047a70 100%)",
            }}
          >
            <div className="solution-content">
              <div className="solution-content__header">
                <div className="header__left">
                  <img src={export1} alt="..." />
                  <h3>TÀI TRỢ XUẤT KHẨU</h3>
                </div>
                <div className="header__right">
                  <button>
                    <span>Tìm hiểu thêm</span>{" "}
                    <IoIosArrowDropright size={20} color="white" />{" "}
                  </button>
                </div>
              </div>
              <ul className="solution-content__list">
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Hỗ trợ doanh nghiệp bổ sung vốn lưu động để sản xuất, chế
                  biến, kinh doanh hàng xuất khẩu, cải thiện dòng tiền và quản
                  lý rủi ro liên quan đến thương mại quốc tế một cách hiệu quả.
                </li>
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Đa dạng sản phẩm dịch vụ: Cho vay thực hiện hợp đồng xuất
                  khẩu, bảo toàn toán xuất khẩu, chiết khấu Hối phiếu đòi nợ...
                </li>
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Tài sản bảo đảm linh hoạt, phù hợp thực tế kinh doanh.
                </li>
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Lãi suất, giá phí cạnh tranh.
                </li>
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Được BIDV hỗ trợ tư vấn điều khoản hợp đồng, LC, phương thức
                  thanh toán... phù hợp với quy định pháp luật, tập quán, thông
                  lệ quốc tế...
                </li>
              </ul>
            </div>
            <div className="solution-image">
              <img
                src="/cang1.png"
                alt="Tài trợ xuất khẩu"
                className="solution-image__detail"
              />
            </div>
          </div>
          <img src="/image 1.png" alt="" className="image_banerrr" />

          <div
            className="solution-card"
            style={{
              background:
                "linear-gradient(16.33deg, #026A66 13.18%, #058074 69.78%, #0AAD90 120.17%)",
            }}
          >
            <div className="solution-image">
              <img
                src="/cang2.png"
                alt="Tài trợ nhập khẩu"
                className="solution-image__detail"
              />
            </div>
            <div className="solution-content">
              <div className="solution-content__header">
                <div className="header__left">
                  <img src={global} alt="..." />
                  <h3>TÀI TRỢ NHẬP KHẨU</h3>
                </div>
                <div className="header__right">
                  <button>
                    <span>Tìm hiểu thêm</span>
                    <IoIosArrowDropright size={20} color="white" />
                  </button>
                </div>
              </div>
              <ul className="solution-content__list">
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Cung cấp các lựa chọn tài chính linh hoạt, hỗ trợ cho doanh
                  nghiệp có nhu cầu bổ sung vốn lưu động để nhập khẩu nguyên
                  liệu, vật tư, hàng hóa phục vụ hoạt động sản xuất kinh doanh
                </li>
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Đa dạng giải pháp phù hợp với chu kỳ kinh doanh của doanh
                  nghiệp: Tài trợ nhập khẩu đảm bảo bằng lô hàng nhập, UPAS LC,
                  Thư tín dụng giáp lưng...
                </li>

                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Tài sản đảm bảo linh hoạt, phù hợp thực tế kinh doanh
                </li>
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Chi phí hợp lý, hồ sơ thủ tục nhanh chóng, thuận tiện
                </li>
              </ul>
            </div>
          </div>

          <div
            className="solution-card"
            style={{
              background: "linear-gradient(90deg, #015f5d 0%, #047a70 100%)",
            }}
          >
            <div className="solution-content">
              <div className="solution-content__header">
                <div className="header__left">
                  <img src={logicstics} alt="..." />
                  <h3>TÀI TRỢ CHUỖI CUNG ỨNG</h3>
                </div>
                <div className="header__right">
                  <button>
                    <span>Tìm hiểu thêm</span>
                    <IoIosArrowDropright size={20} color="white" />
                  </button>
                </div>
              </div>
              <ul className="solution-content__list">
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  BIDV cung cấp các giải pháp tài trợ vốn lưu động cho các Nhà
                  cung cấp, Nhà phân phối của Doanh nghiệp trung tâm, hỗ trợ
                  tăng doanh số bán hàng, tối ưu hóa dòng tiền luân chuyển trong
                  chuỗi, hỗ trợ doanh nghiệp hình thành chuỗi cung ứng bền vững.
                </li>
                <li>
                  <img
                    src={bulletIcon}
                    alt="Bullet"
                    style={{ width: "10px", marginRight: "5px" }}
                  />
                  Các giải pháp tài trợ chuỗi đặc thù cho doanh nghiệp trong các
                  lĩnh vực tiềm năng: thức ăn chăn nuôi, bia rượu thực phẩm, vật
                  liệu xây dựng, viễn thông, xăng dầu/hóa chất, ô tô/điện tử,
                  dược phẩm,…
                </li>
              </ul>
            </div>
            <div className="solution-image">
              <img
                src="/cang3.png"
                alt="Tài trợ chuỗi cung ứng"
                className="solution-image__detail"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="new-products-section">
        <h2 className="section-title">
          <span className="primary-text">CÁC SẢN PHẨM DỊCH VỤ KHÁC</span>
        </h2>
        {/* Tabs */}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="nav-tabs">
            {tabList.map((tab, index) => (
              <div
                key={index}
                className={`nav-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </div>
            ))}
            <div
              className="tab-indicator"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            ></div>
          </div>
        </div>

        <div className="product-grid">
          {activeTab === 0 && (
            <Row
              gutter={[16, 16]}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/page31.png" alt="Icon 2" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>
                      VAY THÔNG THƯỜNG
                      <br />
                      NGẮN HẠN
                    </h3>
                  </div>
                </div>
              </Col>
              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/page32.png" alt="Icon 1" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>
                      VAY THÔNG THƯỜNG
                      <br />
                      DÀI HẠN
                    </h3>
                  </div>
                </div>
              </Col>
              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/page33.png" alt="Icon 2" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>
                      VAY ĐẦU TƯ
                      <br />
                      TÀI SẢN CỐ ĐỊNH
                      <br />
                      GIÁN TIẾP
                    </h3>
                  </div>
                </div>
              </Col>
              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/page33.png" alt="Icon 2" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>VAY THẤU CHI</h3>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {activeTab === 1 && (
            <Row
              gutter={[16, 16]}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/thanhtoan1.png" alt="Icon 1" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>
                      QUẢN LÝ KHOẢN
                      <br />
                      PHẢI TRẢ
                    </h3>
                  </div>
                </div>
              </Col>

              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/thanhtoan2.png" alt="Icon 2" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>
                      DỊCH VỤ CHẤP NHẬN
                      <br />
                      THANH TOÁN THẺ
                    </h3>
                  </div>
                </div>
              </Col>

              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/thanhtoan3.png" alt="Icon 3" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>DỊCH VỤ THU HỘ</h3>
                  </div>
                </div>
              </Col>

              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/thanhtoan4.png" alt="Icon 4" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>
                      QUẢN LÝ
                      <br />
                      DÒNG TIỀN
                    </h3>
                  </div>
                </div>
              </Col>

              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/thanhtoan4.png" alt="Icon 5" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>CHUYỂN TIỀN</h3>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {activeTab === 2 && (
            <Row
              gutter={[16, 16]}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/BIDVibank.png" alt="Icon 1" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>BIDV ibank</h3>
                  </div>
                </div>
              </Col>

              <Col span={11} className="image-container__col">
                <div className="image-container__col__dv">
                  <div>
                    <img src="/BIDVibank.png" alt="Icon 2" className="icon" />
                  </div>
                  <div className="text-overlay left-align">
                    <h3>BIDV iConnect</h3>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </section>
      <div className="banner-container">
        <img
          src={bannerImage}
          alt="SME Champion 2024"
          className="banner-image"
        />
      </div>
    </div>
  );
}

export default Home;
