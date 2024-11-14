import "../Styles/Popup.css"
import { PopupContextFunction } from "../Context/PopupContext"
import { BsX } from "react-icons/bs"
import { useRef, useEffect } from "react"

const Popup = () => {

	const { open, closedown } = PopupContextFunction()

	const popupRef = useRef(null)

	useEffect(() => {
		const PopupItem = document.querySelector('.popup')

		if (!PopupItem) return;

		PopupItem.addEventListener('pointerdown', () => {
			if ( popupRef.current.contains(PopupItem) ) {
				// closedown()
			}

		})


	})

	return (
		<div className={ open ? "popup" : "no-popup"}>

			<div className='popup-container' ref={popupRef}>

				<div className="exit" onClick={(closedown)}> <BsX /> </div>

			</div>
		</div>
	)
}

export default Popup