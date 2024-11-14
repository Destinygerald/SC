import "../Styles/LoadingScreen.css"
import { motion } from "framer-motion"
import { useEffect } from "react"

const LoadingItems = ({ nums, speed, onAnimationComplete }) => {

	const variants = {
		initial: {
			y: 0
		},

		animate: {
			y: nums.length > 3 ? `${-90}%` : `${-50}%`,
			transition: {
				duration: `${speed}`
			}
		}
	}

	

	return (
		<motion.div className="count">
			<motion.div variants={variants} initial="initial" animate="animate" onAnimationComplete={onAnimationComplete} >
			{
				nums.map((num, idx) => (
					<motion.span>
						{num}
					</motion.span>
				))
			}
			</motion.div>
		</motion.div>
	)
}

const LoadingScreen = ({ loaded, setLoaded }) => {

	const parentVariants = {
		exit : {
			opacity: 0,
			transition: {
				duration: 2
			}
		}
	} 
	
	const backVariants = {
		initial: {
			y: `${-100}%`
		},

		animate: {
			y: 0,
			transition: {
				duration: 2
			}
		},

		exit: {
			y: `${-100}%`,
			transition: {
				duration: 1.2
			}
		}
	}

	function closeAnimation() {
		setLoaded(true)
	}

	return (
		<div className="load-screen">

			<motion.div className="counter" >
				<LoadingItems nums={[0, 1]} speed={2} />
				<LoadingItems nums={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]} speed={6} onAnimationComplete={closeAnimation}  />
				<LoadingItems nums={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]} speed={4} />		
			</motion.div>

			<motion.div className="back" initial='initial' animate="animate" exit="exit" transition={{ staggerChildren: 0.1 }}>
				<motion.div variants={backVariants}/>
				<motion.div variants={backVariants}/>
				<motion.div variants={backVariants}/>
				<motion.div variants={backVariants}/>
				<motion.div variants={backVariants}/>
				<motion.div variants={backVariants}/>
				<motion.div variants={backVariants}/>
				<motion.div variants={backVariants}/>
			</motion.div>

			<div>
				Loading...
			</div>
		</div>
	)
}

export default LoadingScreen;