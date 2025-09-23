import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout"
import Eor from "../pages/Services/Eor";
import DxSupport from "../pages/Services/DxSupport";
import Contact from "../pages/Contact";
import Career from "../pages/Career/Career";
import CareerDetail from "../pages/Career/CareerDetail";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import Confirm from "../pages/Confirm";
import ContactSuccess from "../pages/ContactSuccess";
import Security from "../pages/Security/Security";
import CaseStudy from "../pages/CaseStudy/CaseStudy";
import Development from "../pages/Services/Development";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/development",
				element: <Development />,
			},
			{
				path: "/eor",
				element: <Eor />,
			},
			{
				path: "/dx-support",
				element: <DxSupport />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/contact/confirm",
				element: <Confirm />,
			},
			{
				path: "/contact/success",
				element: <ContactSuccess />,
			},
			{
				path: "/news",
				element: <Career />,
			},
			{
				path: "/news/:id",
				element: <CareerDetail />,
			},
			{
				path: "/privacy",
				element: <Privacy />,
			},
			{
				path: "/terms",
				element: <Terms />,
			},
			{
				path: "/security-policy",
				element: <Security />,
			},
			{
				path: "/case-study",
				element: <CaseStudy />,
			},
		]
	},
]);

export default router;