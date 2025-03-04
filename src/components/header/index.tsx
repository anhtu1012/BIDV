import "./index.scss";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img src="/LogoBIDV.png" alt="BIDV Logo" className="logo" />
        </div>
        <div className="header-center">
          <nav>
            <ul>
              <li className="active">Trang chính</li>
              <li>Sản phẩm</li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <button className="register-btn">Đăng ký</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
