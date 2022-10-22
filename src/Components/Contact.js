import React from 'react'
import Navbar from './Navbar';
import { BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";
import rocky from '../Components/WhatsApp Image 2022-10-22 at 10.22.40 AM.jpeg';
import karthi from '../Components/WhatsApp Image 2022-10-22 at 10.49.49 AM.jpeg';

const Contact = () => {
  return (
		<div className="contact-page-main-container">
			<Navbar />
			<div className="contact-page-maini-section">
				<div className="card-section-page">
					<div className="card-one-page">
						<div className="info-img-sub-bar">
							<div className="img-sub-divbar-shabri">
								<img src={rocky} alt="" />
							</div>
							<h2>Rocky Shabri</h2>
							<h3>Managing Director</h3>
							<button className="skj-button">SKJ Restaurant</button>
						</div>
						<div className="icon-conatct">
							<BsFacebook className="fb-icon-con" />
							<BsInstagram className="ins-icon-con" />
							<BsLinkedin className="link-icon-con" />
						</div>
						<div className="info-mail-id">
							<h4>
								Mail ID: <span className="mail-id">Shabri@skj.com</span>
							</h4>
							<h4>
								Mobile Number: <span></span>+91 7483504253
							</h4>
						</div>
					</div>
					<div className="card-one-page">
						<div className="info-img-sub-bar">
							<div className="img-sub-divbar-karthi">
								<img src={karthi} alt="" />
							</div>
							<h2>Karthik</h2>
							<h3>Managing Director</h3>
							<button className="skj-button">SKJ Restaurant</button>
						</div>
						<div className="icon-conatct">
							<BsFacebook className="fb-icon-con" />
							<BsInstagram className="ins-icon-con" />
							<BsLinkedin className="link-icon-con" />
						</div>
						<div className="info-mail-id">
							<h4>
								Mail ID: <span className="mail-id">Karthik@skj.com</span>
							</h4>
							<h4>
								Mobile Number: <span></span>+91 7483504253
							</h4>
						</div>
					</div>
					<div className="card-one-page">
						<div className="info-img-sub-bar">
							<div className="img-sub-divbar">
								<img
									src="https://scontent.fblr20-1.fna.fbcdn.net/v/t1.6435-9/72453203_2413359245604711_3907628900225646592_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=6y9hn5DQVs8AX9aRkka&_nc_ht=scontent.fblr20-1.fna&oh=00_AT_39IwPZ3njb0ByNJRm80E9srVmKJBH9UJ90WJgskUuwA&oe=637706E5"
									alt=""
								/>
							</div>
							<h2>Jayasimha</h2>
							<h3>Managing Director</h3>
							<button className="skj-button">SKJ Restaurant</button>
						</div>
						<div className="icon-conatct">
							<BsFacebook className="fb-icon-con" />
							<BsInstagram className="ins-icon-con" />
							<BsLinkedin className="link-icon-con" />
						</div>
						<div className="info-mail-id">
							<h4>
								Mail ID: <span className="mail-id">Jayasimha@skj.com</span>
							</h4>
							<h4>
								Mobile Number: <span></span>+91 7483504253
							</h4>
						</div>
					</div>
				</div>
				<div className="contact-info">
					<div className="img-divabr-last">
						<div className='h4-tag-div-text'>
							<div className="info-divbar-last">
								<h1>Contact info</h1>
							</div>
							<h4>
								<span>Address:</span>#12121 Bull Temple Road Basavanagudi Blr
								561202
							</h4>
							<h4>
								<span>Phone:</span>+91 0987654321
							</h4>
							<h4>
								<span>For reservations & private events: </span>
								enquiry@skj.com
							</h4>
							<h4>
								<span>For all press enquiries: </span>media@skj.com
							</h4>
							<h2>Opening hours</h2>
							<h4>
								<span>Lunch: </span>12:00 / closed 16:00
							</h4>
							<h4>
								<span>Dinner:</span>19:00 / closed 00:30
							</h4>
						</div>
						<div className="img-div-last-more">
							<img
								src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/elementor/thumbs/food059-ptcmf5rgip4tyl8nc3j0ny773s8kbo4a034phjqp7s.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;