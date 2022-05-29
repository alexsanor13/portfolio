import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/common/header/Header.js'
import { Footer } from './components/common/footer/Footer.js'
import { Home } from './pages/home/Home.js'
import { About } from './pages/about/About.js'
import { Work } from './pages/work/Work.js'
import { Blog } from './pages/blog/Blog.js'
import { Contact } from './pages/contact/Contact.js'


function App() {
	const [currentPage, setPage] = useState(window.location.href)
	const title = "Portfolio Alex"

	useEffect(() => {
		document.title = title;
		let docs = []
		docs = docs.concat(document.getElementById('home-page'));
		docs = docs.concat(document.getElementById('about-page'));
		docs = docs.concat(document.getElementById('work-page'));
		docs = docs.concat(document.getElementById('blog-page'));
		docs = docs.concat(document.getElementById('contact-page'));
		docs.forEach(e => {
			if(e){
				let path = e.getAttribute('href')
				let actual = window.location.href.split('/')
				if (path === '/' + actual[actual.length - 1]) {
					e.style.color = '#f6a53b';
				}
				else{
				e.style.color = '#ffffff';
				}
			}
		})
	}, [currentPage, title])

	const handlePage = (page) => {
		setPage(page)
		let header = document.getElementById("header");
		header.className = 'hidden';
	}

	return (
			<Router>
			<div className="App">
				<Header handlePage={handlePage}/>
				<Switch>
					<Route exact path="/" render={()=> <Home handlePage={handlePage} />} />
					<Route path="/about" render={()=> <About handlePage={handlePage} />} />
					<Route path="/work" component={Work} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</div>
			</Router>
	);
}

export default App;
