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
import Service from "../pages/service/Services.tsx";
import AddService from "../pages/service/AddService.tsx";
import EditServicePage from "../pages/service/EditService.tsx";
import AdminRoute from "./AdminRoute.tsx";
import LandingPage from "../pages/LandingPage.tsx";
import About from "../pages/About.tsx";
import Error from "../pages/Error.tsx";
import UserLayout from "../layouts/UserLayout.tsx";
import UserTypeChoicePage from "../pages/register/UserTypeChoicePage.tsx";
import HelpLayout from "../layouts/HelpLayout.tsx";
import Faq from "../pages/help/Faq.tsx";
import Contact from "../pages/help/Contact.tsx";
import InterestSelectionPage from "../pages/register/InterestSelectionPage.tsx";
import ProfessionalRegister from "../pages/register/ProfessionalRegister.tsx";
import ProfessionalLoginPage from "../pages/auth/professional/ProfessionalLoginPage.tsx";
import ProfessionalLayout from "../layouts/ProfessionalLayout.tsx";
import ProfessionalDashboard from "../pages/professionalsDashboard/ProfessionalDashboard.tsx";
import LoginChoice from "../pages/auth/LoginChoice.tsx";
import ProfessionalDetails from "../components/frontOffice/ProfessionalDetails.tsx";
import ProfessionalsProfile from "../components/frontOffice/ProfessionalsProfile.tsx";
import ClientsList from "../pages/clients/ClientsList.tsx"
import CreateClient from "../components/clients/forms/AddClients.tsx";
import EditClients from "../components/clients/forms/EditClients.tsx";
import PaymentSuccess from "../components/paymet/paymentSuccess.tsx";
const router = createBrowserRouter([
  {
    path: "/backoffice",
    element: <AdminLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AdminRoute> <Dashboard /></AdminRoute>
      }, {
        path: "clients",
        element: <AdminRoute> <ClientsList /></AdminRoute>,
      },
      {
        path: "clients/create",
        element: <AdminRoute> <CreateClient /></AdminRoute>,
      },
      {
        path: "clients/edit/:id",
        element: <AdminRoute> <EditClients /></AdminRoute>,
      },
      {
        path: "admins",
        element: <AdminRoute><AdminList /></AdminRoute>,
      },
      {
        path: "admins/create",
        element: <AdminRoute><AddAdmin /></AdminRoute>,
      },
      {
        path: "admins/edit/:id",
        element: <AdminRoute><EditAdmin /></AdminRoute>,
      },
      {
        path: "professionals",
        element: <AdminRoute><Professional /></AdminRoute>,
      },
      {
        path: "professionals/create",
        element: <AdminRoute><AddProfessional /></AdminRoute>,
      },
      {
        path: "professionals/edit/:id",
        element: <AdminRoute><EditProfessionalPage /></AdminRoute>,
      },
      {
        path: "services",
        element: <AdminRoute><Service /></AdminRoute>,
      },
      {
        path: "services/create",
        element: <AdminRoute><AddService /></AdminRoute>,
      },
      {
        path: "services/edit/:id",
        element: <AdminRoute><EditServicePage /></AdminRoute>,
      },
      {
        path: "interventions",
        element: <AdminRoute><InterventionList /></AdminRoute>,
      },
      {
        path: "interventions/create",
        element: <AdminRoute><AddIntervention /></AdminRoute>,
      },
      {
        path: "interventions/edit/:id",
        element: <AdminRoute><EditIntervention /></AdminRoute>,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "register",
        element: <UserTypeChoicePage />,
      },
      {
        path: "register/interest",
        element: <InterestSelectionPage />
      },
      {
        path: "register/applicant",
        element: <ProfessionalRegister />,
      },
      {
        path: "login/applicant",
        element: <ProfessionalLoginPage />,
      },
      {
        path: "user/login",
        element: <LoginChoice />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "professionals",
        element: <ProfessionalsProfile />,
      },
      {
        path: "professional/details/:id",
        element: <ProfessionalDetails />,
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ]
  },
  {
    path: "professional/dashboard",
    element: <ProfessionalLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ProfessionalDashboard />,
      },
    ],
  },
  {
    path: "successPaymet",
    element: <PaymentSuccess />,
  },
  
  {
    path: "*",
    element: <Error />,
  },
  
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
