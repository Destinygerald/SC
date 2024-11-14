import { motion, useScroll, useTransform, useInView, cubicBezier } from "framer-motion"
import { useRef, useEffect, useState } from "react"
// import Gap from "./Gap"


const ProductItems = [
	{
		imgSrc: '/prod_img_8.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_7.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_6.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_5.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_4.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_3.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_2.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_1.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_5.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_3.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	},
	{
		imgSrc: '/prod_img_6.webp',
		itemName: 'Herbal Cream',
		itemDesc: '100% natural products and extracts',
	}
]

const DisplayItems = ({ imgSrc, itemName, itemDesc, id }) => {
	return (
		<div className="display-items">
			<img src={imgSrc} />
			<div>
				<span>{itemName}</span>
				<span>{itemDesc}</span>
			</div>
		</div>
	)
}

const FrontItem2 = () => {

	const gapRef = useRef(null)

	const { scrollYProgress, scrollY } = useScroll({
		target: gapRef,
		offset: ['start start', 'end end']
	})

	const x = useTransform(scrollYProgress, [0, 1], [`${0}%`, `-${60}%`])
	const y = useTransform(
		scrollYProgress, 
		[0, 1], 
		[`${0}%`, `${150}%`], 
		{ 
			ease: cubicBezier(0, 0, .58, 1)
		}
		// { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
		// { transition: { duration: 2} }
		)

	// console.log(scrollYProgress.current)

	
	return (
		<div className="front-item-2-container">
		<motion.div className="front-item-2" >
			{/*<div className="front-item-2-backdrop">NATURE BEAUTY</div>*/}
			<motion.div className="front-item-2-inner" style={{ x }}>
				{ ProductItems.map((product, idx) => (
					<DisplayItems imgSrc={product.imgSrc} itemName={product.itemName} itemDesc={product.itemDesc} id={idx} />
				)) }			
			</motion.div>
		</motion.div>

		<motion.div className="gap" ref={gapRef}>
		</motion.div>

		</div>
	)
} 

export default FrontItem2;