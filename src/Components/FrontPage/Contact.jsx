import { AiFillPhone, AiFillMail, AiFillInstagram } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import { useState } from "react"


function ContactIcon ({ icon, details }) {
	return (
		<div className="contact-icon">
			<div>{ icon }</div>
			<div>{ details }</div>
		</div>
	)
}

const Contact = () => {

	const [ contact, setContact ] = useState({
		name: '',
		email: '',
		number: '',
		message: ''
	})

	function handleSubmit(e) {
		e.preventDefault()
		// console.log(contact)

		setContact({
			name: '',
			email: '',
			number: '',
			message: ''
		})
	}

	function changeHandler(e) {
		setContact({...contact, [e.target.name] : e.target.value })
	}

	const PHONE_REGEX = '^(\+\d{1,2}\s)?\(?\d{3}\)'

	return (
		<div className="contact">
			<span>Get In Touch</span>

			<div className="contact-main">
				<div>
					<ContactIcon icon={<AiFillPhone />} details={'0801 234 5678'} />
					<ContactIcon icon={<AiFillMail />} details={'NatureBeauty @gmail.com'} />
					<ContactIcon icon={<AiFillInstagram />} details={'Nature_Beauty'} />
					<ContactIcon icon={<IoLogoWhatsapp />} details={'0801 234 5678'} />
				</div>
				
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Name" name="name" value={contact.name} onChange={changeHandler} />
					<input type="email" placeholder="Email" name="email" value={contact.email} onChange={changeHandler} />
					<input type="text" placeholder="Phone" name="number" value={contact.number} onChange={changeHandler} />
					<textarea placeholder="Message" name="message" value={contact.message} onChange={changeHandler}></textarea>
					<button>Send</button>
				</form>

			</div>
		</div>
	)
}

export default Contact;