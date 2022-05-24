import { Link } from 'react-router-dom'

export const Header = ({handlePage}) => {

	const showTopNav = () => {
		let header = document.getElementById("header");
		let button = document.getElementById("button-topnav");
		if (header.className.includes('hidden')) {
			header.className = 'shown';
			button.style.color = 'rgb(255, 135, 23)';
		} else {
			header.className = 'hidden';
			button.style.color = 'rgb(255, 255, 255)';
		}
	}

	return (
		<>
			<div id="button-topnav"><button onClick={showTopNav}>&#9776;</button></div>
			<header className='hidden' id="header">
				<nav role="navigation">
					<ul>
						<li>
							<Link to='/' id='home-page' onClick={() => handlePage('')}><span><i className="fas fa-home"></i></span>Home</Link>
						</li>
						<li>
							<Link to="/about" id='about-page' onClick={() => handlePage('about')}><span><i className="far fa-address-card"></i></span>About</Link>
						</li>
						<li>
							<Link to='/work' id='work-page' onClick={() => handlePage('work')}><span><i className="fas fa-code-branch"></i></span>Work</Link>
						</li>
						{/* <li>
							<Link to='/blog' id='blog-page' onClick={() => handlePage('blog')}><span><i className="fas fa-book-open"></i></span>Blog</Link>
						</li> */}
						<li id='contact'>
							<Link to='/contact' id='contact-page' onClick={() => handlePage('contact')}><span><i className="far fa-envelope"></i></span>Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}