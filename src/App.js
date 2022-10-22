
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Form from './Components/Form';

function App() {
  return (
		<div>
			<Router>
				<Routes>
					<Route path="/Restaurant-website" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Menu" element={<Menu />} />
					<Route path="/Gallery" element={<Gallery />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Form" element={<Form />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
