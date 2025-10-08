import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout"
import Eor from "../pages/Services/Eor";
import DxSupport from "../pages/Services/DxSupport";
import Contact from "../pages/Contact/Contact";
import Confirm from "../pages/Contact/Confirm";
import ContactSuccess from "../pages/Contact/ContactSuccess";
import Career from "../pages/Career/Career";
import CareerDetail from "../pages/Career/CareerDetail";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import Security from "../pages/Security/Security";
import CaseStudy from "../pages/CaseStudy/CaseStudy";
import Development from "../pages/Services/Development";
import CompanyProfile from "../pages/CompanyProfile/CompanyProfile";
import UiUx from "../pages/Services/UiUx";
import Philosophy from "../pages/Philosophy/Philosophy";
import Conditions from "../pages/Conditions/Conditions";
import CeoMessage from "../pages/CeoMessage/CeoMessage";

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
				path: "/uiux",
				element: <UiUx/>,
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
			{
				path: "/company-profile",
				element: <CompanyProfile />,
			},
			{
				path: "/business-philosophy",
				element: <Philosophy />,
			},
			{
				path: "/terms-conditions",
				element: <Conditions />,
			},
			{
				path: "/ceo-message",
				element: <CeoMessage />,
			},
		]
	},
]);

export default router;