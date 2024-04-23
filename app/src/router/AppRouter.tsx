import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Professional from "../pages/professional/Professional";
import AddProfessional from "../pages/professional/AddProfessional";
import LoginForm from "../components/common/LoginForm";

const router = createBrowserRouter([
  {
    path: "/backoffice",
    element: <AdminLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: (
          <div>
            Dashboard: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus at placeat porro quidem nihil. Eos quibusdam modi cumque
            illo corrupti, eum inventore placeat consequatur. Est labore quas ut
            praesentium voluptatum.
          </div>
        ),
      },
      {
        path: "professionals",
        element: <Professional />,
      },
      {
        path: "professionals/create",
        element: <AddProfessional />,
      },
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
