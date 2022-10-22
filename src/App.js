
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
					<Route path="Restaurant-website/About" element={<About />} />
					<Route path="Restaurant-website/Menu" element={<Menu />} />
					<Route path="Restaurant-website/Gallery" element={<Gallery />} />
					<Route path="Restaurant-website/Contact" element={<Contact />} />
					<Route path="Restaurant-website/Form" element={<Form />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
