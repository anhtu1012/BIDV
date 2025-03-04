import { Outlet } from "react-router-dom";
import CustomFooter from "../footer";
import Header from "../header";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div style={{ marginTop: "69px" }}>
        <Outlet />
      </div>
      <CustomFooter />
    </div>
  );
}

export default Layout;
