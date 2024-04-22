import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Professional from "../pages/professional/Professional";

const router = createBrowserRouter([
    {
        path:"/backoffice",
        element: <AdminLayout />,
        errorElement: <div>Not Found</div>,
        children:[
            {
                index: true,
                element: <div>Dashboard: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at placeat porro quidem nihil. Eos quibusdam modi cumque illo corrupti, eum inventore placeat consequatur. Est labore quas ut praesentium voluptatum.</div>
            },
            {
                path: "professionals",
                element: <Professional/>
            }
        ]
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router}/>
}

export default AppRouter;