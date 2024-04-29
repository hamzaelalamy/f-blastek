import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Professional from "../pages/professional/Professional";
import AddProfessional from "../pages/professional/AddProfessional";
import LoginForm from "../components/common/LoginForm";
import EditProfessionalPage from "../pages/professional/EditProfessionalPage";
import Dashboard from "../pages/dashboard/index.tsx";
import AdminList from "../pages/admin/AdminList.tsx"
import AddAdmin from "../pages/admin/AddAdmin.tsx";
import EditAdmin from "../pages/admin/EditAdmin.tsx";
import AddIntervention from "../pages/intervention/AddIntervention.tsx";
import InterventionList from "../pages/intervention/InterventionList.tsx";
import EditIntervention from "../pages/intervention/EditIntervention.tsx";
import AdminRoute from "./AdminRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/backoffice",
    element: <AdminLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
                path: "dashboard",
                element: <AdminRoute> <Dashboard/></AdminRoute> 
       },{
        path: "clients",
        element:<AdminRoute><div>Client List</div></AdminRoute> ,
      },
       {
        path: "admins",
        element:<AdminRoute><AdminList /></AdminRoute> ,
      },
      {
        path: "admins/create",
        element:<AdminRoute><AddAdmin /></AdminRoute> ,
      },
      {
        path: "admins/edit/:id",
        element:<AdminRoute><EditAdmin /></AdminRoute> ,
      },
      {
        path: "professionals",
        element: <AdminRoute><Professional /></AdminRoute>,
      },
      {
        path: "professionals/create",
        element:<AdminRoute><AddProfessional /></AdminRoute> ,
      },
      {
        path: "professionals/edit/:id",
        element: <AdminRoute><EditProfessionalPage /></AdminRoute>,
      },
      {
        path: "services",
        element:<AdminRoute><div>Services</div></AdminRoute> ,
      },
      {
        path: "services/create",
        element:<AdminRoute><div>Create Service</div></AdminRoute> ,
      },
      {
        path: "services/edit/:id",
        element:<AdminRoute><div>edit service</div></AdminRoute> ,
      },
      {
        path: "interventions",
        element:<AdminRoute><InterventionList /></AdminRoute> ,
      },
      {
        path: "interventions/create",
        element:<AdminRoute><AddIntervention /></AdminRoute> ,
      },
      {
        path: "interventions/edit/:id",
        element:<AdminRoute><EditIntervention/></AdminRoute> ,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
