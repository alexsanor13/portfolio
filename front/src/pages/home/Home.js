import { Link } from 'react-router-dom'

export const Home = ({handlePage}) => {

  	return (
		<main id="main-wrapper">
			<section>
				<article id="home-content">
					<h1>Hello, I'm <span>Alex</span>.</h1>
					<h2>I'm a Software Engineer.</h2>
					<Link to="/about" onClick={() => handlePage('about')}>Learn more <span><i className="fas fa-angle-double-right"></i></span></Link>
				</article>
			</section>
		</main>
  	);
}