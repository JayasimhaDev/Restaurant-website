import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const Contactform = (e) => {
	const [btn, setBtn] = useState(1);
	const [checked, setChecked] = useState(false);
	const [error, setError] = useState(false);

	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		type: '',
		mobilenumber: '',
		duration: '',
		date: '',
		time: '',
		checked: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handlechange = (e) => {
		const { name, value } = e.target;

		setUser({ ...user, [name]: value });
		console.log(name, value);
	};
	const handlecheck = (e) => {
		if (checked === true) {
			setChecked(false);
		} else {
			setChecked(true);
		}
	};

	const thanks = () => {
		const { firstname, lastname, type, mobilenumber, duration, time, checked } =
			user;

		if (
			firstname &&
			lastname &&
			type &&
			mobilenumber &&
			duration &&
			time &&
			checked
		) {
			console.log(user);
		} else {
			setError(true);
			// alert('please fill the all credentials');
		}
	};

	const colorr = (e) => {
		setBtn(+e.target.id);
	};

	return (
		<div className="contactform">
			<div className="box-form">
				<form onSubmit={handleSubmit}>
					<div className="inside-div">
						<div className="details-div-form">
							<div className="name-div">
								<input
									type="text"
									id="firstname"
									name="firstname"
									placeholder="Firstname"
									// required="required"
									value={user.firstname}
									onChange={handlechange}
								/>
								&nbsp;&nbsp;&nbsp;{' '}
								<input
									type="text"
									id="lastname"
									name="lastname"
									// required="required"
									placeholder="Lastname"
									value={user.lastname}
									onChange={(e) => {
										handlechange(e);
									}}
								/>
								<br />
							</div>
							{error && (user.firstname && user.lastname) <= 0 ? (
								<span className="div-span">Enter firstname and Lastname</span>
							) : (
								''
							)}
							<div className="mobilenumber">
								<img
									src=" https://res.cloudinary.com/stanza-living/image/upload/v1654081381/Website%20v5/Icons/form-country-flag.png"
									width="30px"
									height="30px"
									alt=""
								/>
								<h4 style={{ textAlign: 'center' }}>+91</h4>
								<p>|</p>
								<input
									type="number"
									id="mobilenum"
									name="mobilenumber"
									value={user.mobilenumber}
									// required="required"
									onChange={(e) => {
										handlechange(e);
									}}
									placeholder="Please Enter Your Mobile Number"
								/>
							</div>
							{error && user.mobilenumber <= 0 ? (
								<span className="div-span">
								 Enter Your Mobile Number
								</span>
							) : (
								''
							)}
							<div className="working-div-form">
								<div className="iama-div">
									<span>I am a</span>
									<input
										type="radio"
										id="student"
										value="student"
										name="type"
										className="form-control"
										onChange={(e) => {
											handlechange(e);
										}}
									/>

									<label for="student">Self</label>
									<br></br>
									<input
										type="radio"
										id="workingprofessional"
										value="workingprofessional"
										className="form-control"
										name="type"
										onChange={(e) => {
											handlechange(e);
										}}
									/>
									<label for="workingprofessional">Broker</label>
								</div>
								{error && user.type <= 0 ? (
									<span className="div-span">
										Please Select Your Profession
									</span>
								) : (
									''
								)}
								<div className="select-month">
									<lable>
										<select
											name="duration"
											className=" select-month-lable"
											onChange={(e) => {
												handlechange(e);
											}}
											required="required"
										>
											<option>--type of homes you want--</option>
											<option value="3-months"> Single Rooms</option>
											<option value="3-6months">Two Rooms</option>
											<option value="6-months">Three Rooms</option>
										</select>
									</lable>
								</div>
								{error && user.duration <= 0 ? (
									<span className="div-span">
										Please Select Staying Duration
									</span>
								) : (
									''
								)}
							</div>
							<div className="visit-div-form">
								<p>When are you planning to visit?</p>
								<div className="button-four-div">
									<input
										className="date-first-button"
										type="date"
										name="date"
										value={user.date}
										onChange={(e) => {
											handlechange(e);
										}}
										placeholder="Please select the day."
									/>
								</div>
							</div>
							{error && user.date <= 0 ? (
								<span className="div-span">Please Select Visiting Date</span>
							) : (
								''
							)}
							<div className="time-div-form">
								<p>What is your preferred time slot?</p>
								<div className="button-five-div">
									<button
										style={
											btn === 1
												? { backgroundColor: '#0d2746', color: '#fff' }
												: {}
										}
										value="9-12 PM"
										id="1"
										type="radio"
										name="time"
										onClick={(e) => {
											handlechange(e);
											colorr(e);
										}}
									>
										9-12
									</button>
									<button
										style={
											btn === 2
												? { backgroundColor: '#0d2746', color: '#fff' }
												: {}
										}
										type="radio"
										id="2"
										value="12-3 PM"
										name="time"
										onClick={(e) => {
											handlechange(e);
											colorr(e);
										}}
									>
										12-3
									</button>
									<button
										style={
											btn === 3
												? { backgroundColor: '#0d2746', color: '#fff' }
												: {}
										}
										type="radio"
										value="3-6 PM"
										id="3"
										name="time"
										onClick={(e) => {
											handlechange(e);
											colorr(e);
										}}
									>
										3-6
									</button>
									<button
										style={
											btn === 4
												? { backgroundColor: '#0d2746', color: '#fff' }
												: {}
										}
										type="radio"
										value="6-9 PM"
										id="4"
										name="time"
										onClick={(e) => {
											handlechange(e);
											colorr(e);
										}}
									>
										6-9
									</button>
								</div>
							</div>
						</div>
						<div className="inside-two-div">
							<div className="social-whatsapp">
								<p>
									<BsWhatsapp className="whtasappbutton" />
									&nbsp;&nbsp;&nbsp;Get updates over WhatsApp
								</p>
								<div className="radio-button">
									<input
										className="react-switch-checkbox"
										id="react-switch-new"
										type="checkbox"
										name="checkbox"
										value={user.checked}
										defaultChecked={checked}
										onChange={() => setChecked(!checked)}
									/>
									<label
										className="react-switch-label"
										htmlFor="react-switch-new"
									>
										<span className="react-switch-button" />
									</label>
								</div>
							</div>
						</div>
						<div className="checkbox-div">
							<input
								type="checkbox"
								className="checkbox-last"
								name="checked"
								value={checked}
								// defaultChecked={checked}
								onClick={(e) => {
									handlecheck(e);
									handlechange(e);
								}}
							/>
							&nbsp;&nbsp;
							<p>
								I have read and agree to the terms and conditions and hereby
								confirm to proceed.
							</p>
						</div>
						{checked === false ? (
							<span className="div-span">Please Click the Checkbox</span>
						) : (
							''
						)}
						<div className="last-final-button">
							<button className="visit-button" onClick={thanks}>
								Schedule a Visit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contactform;
