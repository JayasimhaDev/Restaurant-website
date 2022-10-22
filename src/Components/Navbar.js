import React from 'react'
import logo from './PLATE-01.png'

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="navbar-section">
				<div className="content-section-ul-div">
					<div className="logo-del-container">
						<div className="logo-and-name-div">
							<div className="logo-div">
								<img src={logo} alt="" />
							</div>
							<div className="name-logo">
								<h1>SKJ Hills</h1>
							</div>
						</div>
					</div>
					<div className="navbar-content-full-div-ul-container">
						<ul>
							<li>
								<a href="/">HOME</a>
							</li>
							<li>
								<a href="/Menu">MENU</a>
							</li>
							<li>
								<a href="/Gallery">GALLERY</a>
							</li>
							<li>
								<a href="/About">ABOUT</a>
							</li>
							<li>
								<a href="/Contact">CONTACT</a>
							</li>
						</ul>
					</div>
					<div className="rig-home-button-div">
						<button>Online Hub</button>
						<div className="two-button-div-service">
							<div>
								<h3>
									<a href="./Form">Reservation</a>
								</h3>
							</div>
							<div>
								<h3>
									<a href="./Form">Home Delivery</a>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;