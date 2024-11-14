import "../Styles/Navbar.css"
import { useNavigate } from "react-router-dom"
import { AiFillPhone, AiFillMail, AiOutlineMenu } from "react-icons/ai"

function Navbar() {

	return (
		<div className="navbar">
			<div>
				<div className="logo">Nature Beauty</div>

				<ul>
					<li>Cream</li>
					<li>Soaps</li>
					<li>Lotions</li>
					<li>Others</li>
					{/*<li>Item</li>*/}
				</ul>
			</div>

			<div className="menu"> <AiOutlineMenu /> </div>

			<div>
				<div>
					<span> <AiFillPhone/> </span> 
					<span>+234 801 234 5678 </span>
				</div>
				
				<div>
					<span> <AiFillMail/> </span> 
					<span>NatureBeauty@gmail.com</span>
				</div>

			</div>
		</div>
	)
}

export default Navbar;