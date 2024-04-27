import React from "react";
import { Link } from "react-router-dom";
import AdminsList from "../../components/admins/tables/AdminList";
function AdminList() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-black">Admins List</h1>
        <button className="bg-[#20B486] p-2 rounded-md text-sm text-white ">
          <Link to={"/backoffice/admins/create"}>Add Admin</Link>
        </button>
      </div>
      <AdminsList />
    </div>
  );
}

export default AdminList;
