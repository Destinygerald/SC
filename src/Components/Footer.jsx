import "../Styles/Footer.css"

function Footer () {
	return (
		<div className="footer">
			<div className="footer-inner">
				<span>Nature Beauty</span>

				<div className="nav-list">
					<span>Cream</span>
					<span>Soaps</span>
					<span>Lotions</span>
					<span>Others</span>
					{/*<span>Item</span>
					<span>Item</span>*/}
				</div>
			</div>

			<div className="footer-bottom">
				©CopyRight All Rights Reserved 
			</div>

		</div>
	)
}

export default Footer;