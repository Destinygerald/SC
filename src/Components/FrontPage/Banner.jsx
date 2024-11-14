import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function StaggerText ({ text }) {

	const Variants = {
		initial: {
			opacity : 0
		},

		animate: {
			opacity : 1
		}
	}

	return (
		<div className="main-text">
			<motion.span initial="initial" animate="animate" transition={{ staggerChildren: 0.1 }}>
				{
					text.split('').map((char, idx) => (
						<motion.span key={idx} variants={Variants}>
							{char}
						</motion.span>
					))
				}
			</motion.span>
		</div>
	)
}


const Banner = () => {

	const BannerRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: BannerRef,
		offset: ['start start', 'end start']
	})

	const y = useTransform(scrollYProgress, [0, 1], [0, -250])

	return (
		<motion.div className="banner" ref={BannerRef}>
			<div className="header">


				<StaggerText text="Creating Perfection With Natural Materials" />

				
			</div>

			<div className="banner-display">
				<motion.img src="/prod_img_1.webp" style={{ y }} />
			</div>

			<div className="side-text">Natures Beauty</div>
		</motion.div>
	)
}

export default Banner;