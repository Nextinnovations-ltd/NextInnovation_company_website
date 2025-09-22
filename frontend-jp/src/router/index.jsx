import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import WebsiteDev from "../pages/Development/Website";
import SystemDev from "../pages/Development/System";
import UiUx from "../pages/Development/UiUx";
import Layout from "../layouts/Layout"
import Eor from "../pages/Services/Eor";
import DxSupport from "../pages/Services/DxSupport";
import Work from "../pages/Work/Work";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Ceo from "../pages/Ceo";
import Career from "../pages/Career/Career";
import CareerDetail from "../pages/Career/CareerDetail";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import Confirm from "../pages/Confirm";
import ContactSuccess from "../pages/ContactSuccess";
import Security from "../pages/Security/Security";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/development/website",
          element: <WebsiteDev />,
        },
        {
          path: "/development/system",
          element: <SystemDev />,
        },
        {
          path: "/ui-ux",
          element: <UiUx />,
        },
        {
          path: "/eor",
          element: <Eor />,
        },
        {
          path: "/dx-support",
          element: <DxSupport/>,
        },
        {
          path: "/works",
          element: <Work/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/contact/confirm",
          element: <Confirm/>,
        },
        {
          path: "/contact/success",
          element: <ContactSuccess/>,
        },
        {
          path: "/about-us",
          element: <AboutUs/>,
        },
        {
          path: "/ceo",
          element: <Ceo/>,
        },
        {
          path: "/news",
          element: <Career/>,
        },
        {
          path: "/news/:id",
          element: <CareerDetail/>,
        },
        {
          path: "/privacy",
          element: <Privacy/>,
        },
        {
          path: "/terms",
          element:<Terms/>,
        },
        {
          path: "/security-policy",
          element:<Security/>,
        },
      ]
    },
  ]);

export default router;