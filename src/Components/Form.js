import React from 'react'
import Navbar from './Navbar';
import ContactForm from './ContactForm'
import { useState } from 'react';

const Form = () => {
	const [form, setForm] = useState({
		Comment: ' ',
		Name: ' ',
		Gmail: ' ',
		Number: ' ',
	});

	const [data, setData] = useState([]);
	// console.log(form);
	const changeHnadler = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	console.log(data);
	return (
		<div className="form-main-div-container">
			<Navbar />
			<div className="from-main-div-section">
				<div className="two-div-form-main">
					<div className="reservation-from">
						<h1>Reservation Form</h1>
						<ContactForm />
					</div>
					<div className="home-deliver-from">
						<h1>Home Delivery Form</h1>
						<div>
							<div className="comment-box-container">
								<div className="comment-box-section">
									<div className="text-info-social">
										<div className="form-input-action-div">
											<div action="">
												<div className="text-input-div">
													<h1>Item List</h1>
													<textarea
														className="textarea-box"
														value={form.Comment}
														onChange={(e) => {
															changeHnadler(e);
														}}
														name="Comment"
													>
														say somethings.........?
													</textarea>
												</div>
												<div className="lable-names-div">
													<ul>
														<li>
															<div className="form-input">
																<label htmlFor="">Name </label>
																<input
																	type="text"
																	placeholder="Name"
																	value={form.Name}
																	name="Name"
																	onChange={(e) => {
																		changeHnadler(e);
																	}}
																/>
															</div>
														</li>
														<li>
															<div className="form-input">
																<label htmlFor="">Email </label>
																<input
																	type="email"
																	placeholder="Gmail"
																	value={form.Gmail}
																	name="Gmail"
																	onChange={(e) => {
																		changeHnadler(e);
																	}}
																/>
															</div>
														</li>
														<li>
															<div className="form-input">
																<label htmlFor="">Mobile Number </label>
																<input
																	type="number"
																	placeholder="Number"
																	value={form.Number}
																	name="Number"
																	onChange={(e) => {
																		changeHnadler(e);
																	}}
																/>
															</div>
														</li>
													</ul>
												</div>
												<div className="post-submit-button">
													<button
														className="post-comment-button"
														type="submit"
														onClick={() => {
															setData([...data, form]);
															setForm({
																Comment: ' ',
																Name: ' ',
																Gmail: ' ',
																Number: ' ',
															});
														}}
													>
														Submit Your Order
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;