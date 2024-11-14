import "../Styles/FrontPage.css"
import { motion } from "framer-motion"
import Banner from "../Components/FrontPage/Banner"
import FrontItem1 from "../Components/FrontPage/FrontItem1"
import FrontMarquee from "../Components/FrontPage/FrontMarquee"
import FrontItem2 from "../Components/FrontPage/FrontItem2"
import Brand from "../Components/FrontPage/Brand"
import Contact from "../Components/FrontPage/Contact"

function FrontPage() {
	return (
		<div className="front-page">
			<Banner />
			<FrontItem1 />
			<FrontMarquee />
			<FrontItem2 />
			<Brand />
			<Contact />
		</div>
	)
}

export default FrontPage;