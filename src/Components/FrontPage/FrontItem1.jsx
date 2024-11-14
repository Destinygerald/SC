import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"

const FrontItem1 = () => {

	const picRef = useRef(null)

	const { scrollYProgress, scrollY } = useScroll({
		// target: picRef,
		// offset: ['start start', 'end start']
	})

	const opacity = useTransform(scrollY, [60, 322], [0.6, 1] )
	const width = useTransform(scrollY, [60, 322], [`${10}%`, `${40}%`])
	// const x = useTransform(scrollY, [60, 322], [`${50}%`, `${0}%`])


	return (
		<div className="front-item-1">
			<motion.div ref={picRef} style={{ opacity, width}}>
				<img src="./prod_img_6.webp" />
				<div/> 
			</motion.div>

			<div>
				Lorem ipsum dolor si amet lori blah blah blah blah blah blah blah Lorem ipsum dolor si amet lori blah blah blah blah blah blah blahLorem ipsum dolor si amet lori blah blah blah blah blah blah blahLorem ipsum dolor si amet lori blah blah blah blah blah blah blah 
			</div>
		</div>
	)
} 

export default FrontItem1;