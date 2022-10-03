import './About.css';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import CV from '../../assets/CV.pdf'

export const About = ({handlePage}) => {

    useEffect(() => {
        let timer = setTimeout(function () {
            let lis = document.getElementById('perc-graphic').getElementsByTagName('li');
            for (const e of lis) {
                let percentage = e.getElementsByClassName('percentage')[0];
                let level = e.getElementsByClassName('language-lvl')[0].clientWidth;
                let container = e.getElementsByClassName('language-item')[0].clientWidth;
                let realPerc = ((level / container) * 100);
                percentage.innerHTML = Math.round(realPerc).toString() + '%';
            }
        }, 4100)
        return () => clearTimeout(timer);
    } , [])

    const nEdad = Math.floor((new Date() - new Date('1997-09-13'))/1000/60/60/24/365);

  return (
    <main id="main-wrapper">
        <section>
            <article id="about-content">
                <h1>Software Engineer.</h1>
                <p>Alex Sanchez is a  {nEdad}<em>yo.</em> programmer originally hailing from Spain.</p>
                <br/>
                <p>Currently focused in web solutions, as a full-stack developer. I have spent the last years learning
                    from some fields of computer science and, especially, in software development, not just as a
                    programmer but a graduate engineer.</p>
                <br/>
                <p>
                    If you want to know more, check out my <a href={CV} target="_blank" rel="noopener noreferrer">resume </a>
                </p>
                <div id="webdev-info">
                    <div id="qualities-info">
                        <div className="hexagon-wrapped">
                            <div className="hexagon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <h4>Communicative</h4>
                            <p>I tend to have a good and assertive communication with colleagues and clients.</p>
                        </div>
                        <div className="hexagon-wrapped">
                            <div className="hexagon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h4>Intuitive</h4>
                            <p>Easy to use and intuitive UX/UI.</p>
                        </div>
                        <div className="hexagon-wrapped">
                            <div className="hexagon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h4>Dynamic</h4>
                            <p>Websites don't need to be static. Making web pages dynamic makes them look more original
                                and interactive. </p>
                        </div>
                        <div className="hexagon-wrapped">
                            <div className="hexagon">
                                <i className="fas fa-tablet-alt"></i>
                            </div>
                            <h4>Responsive</h4>
                            <p>Being able to look right on every device is a must nowadays. </p>
                        </div>
                    </div>
                    <div id="technologies">
                        <h3>Skills</h3>
                        <ul id="perc-graphic">
                            <li>
                                <span className="language-name">HTML</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='html-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">CSS</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='css-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Javascript</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='js-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">SQL</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='sql-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">C#</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='csharp-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">React</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='react-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Node (Express)</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='node-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Golang</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='golang-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Vue</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='vue-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">C++</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='cplus-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">C</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='c-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Microsoft Azure</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='azure-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Java</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='java-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Python</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='python-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">Docker</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='docker-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className="language-name">MongoDB</span>
                                <div className="language-item">
                                    <div className='language-lvl' id='mongodb-lvl'></div>
                                    <span className="percentage"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="/work" onClick={() => handlePage('work')}><span><i className="fas fa-code-branch"></i></span> Check out my projects <span><i className="fas fa-angle-double-right"></i></span></Link>
            </article>
        </section>
    </main>
  );
}