import { Outlet } from "react-router-dom";


const AdminLayout = () => {
  return (
    <div className="container">
      <header />
      <aside />
      <div className="wrapper">
        <Outlet />
      </div>
      <footer />
    </div>
  );
};

export default AdminLayout;