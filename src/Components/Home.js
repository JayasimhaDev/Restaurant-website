import React from 'react'
import { useState,useEffect} from 'react';
import Homeslide from '../Api/Homeapi';
import Navbar from './Navbar';

const Home = () => {
	const [home, setHome]= useState(Homeslide);
	const [slide, setSlide]= useState(0)
	let click = home.length - 1;

const interval=setInterval(()=>{
	if(slide===click){
		setSlide(0)
	}else{
		setSlide(slide+1)
	 }
	clearInterval(interval);
},3000)
	const MoveDot =(index)=>{
    setSlide(index)
	}
	console.log(slide)
	return (
		<div className="home-page-main-container">
			<Navbar />
			<div className="home-page-main-section">
				<div
					className="home-slider-full-container"
					// style={{
					// 	background: `linear-gradient(to top,rgba(0,0,0,0.6)),url(${home[slide].src})`,
					// }}
				>
					<div className="home-slider-container">
						<div className="img-slide-div">
							<img src={home[slide].src} alt="" />
							<div className="mov-dot-click-div">
								{Array.from({ length: 6 }).map((item, index) => (
									<div
										onClick={() => MoveDot(index + 0)}
										className={
											slide === index + 0 ? 'img-dot active' : 'img-dot'
										}
									></div>
								))}
							</div>
						</div>
						<div className='bg-color-overly'>

						</div>
					</div>

					<div className="home-page-text-container">
						<h1>
							SKJ Hills<br></br>
							Restaurant
						</h1>
						<div className="start-hotel-logo-div">
							<div className="img-logo-hotel">
								<img
									src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/2022/08/m-star.png"
									alt=""
								/>
								<img
									src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/2022/08/m-star.png"
									alt=""
								/>
								<img
									src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/2022/08/m-star.png"
									alt=""
								/>
								<img
									src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/2022/08/m-star.png"
									alt=""
								/>
								<img
									src="https://the7.io/elementor-restaurant/wp-content/uploads/sites/99/2022/08/m-star.png"
									alt=""
								/>
							</div>
							<h1>Five Star</h1>
							<h1>Bangalore</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;