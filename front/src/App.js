import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/common/header/Header.js'
import { Footer } from './components/common/footer/Footer.js'
import { Home } from './pages/home/Home.js'
import { About } from './pages/about/About.js'
import { Work } from './pages/work/Work.js'
import { Blog } from './pages/blog/Blog.js'
import { Contact } from './pages/contact/Contact.js'
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// const RECAPTCHA_API_KEY = process.env.REACT_APP_RECAPTCHA_API_KEY;

function App() {
	return (
		// <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_API_KEY}>
			<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/work" component={Work} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</div>
			</Router>
		// </GoogleReCaptchaProvider>
	);
}

export default App;
