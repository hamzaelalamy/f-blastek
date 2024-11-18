import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/common/AdminSidebar";
import AdminHeader from "../components/common/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header><AdminHeader/></header>
      <div className="flex flex-1">
      <AdminSidebar />
      <div className="flex-1 mt-10 ml-10">
        <Outlet />
        </div>
      </div>
      {/* <div className="footer">
        <footer className="h-10 text-center bg-blue-500" >Footer</footer>
     </div> */}
    </div>
  );
};

export default AdminLayout;