import './About.css';
import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'


import CV from '../../assets/CV.pdf'

import htmlLogo from '../../assets/technologies/html.png'
import cssLogo from '../../assets/technologies/css.png'
import jsLogo from '../../assets/technologies/javascript.png'
import csharpLogo from '../../assets/technologies/csharp.png'
import sqlServerLogo from '../../assets/technologies/sqlserver.png'
import azureLogo from '../../assets/technologies/azure.png'
import reactLogo from '../../assets/technologies/react.png'
import nodeLogo from '../../assets/technologies/node.png'
import mongodbLogo from '../../assets/technologies/mongodb.png'
import pythonLogo from '../../assets/technologies/python.png'
import vueLogo from '../../assets/technologies/vuejs.png'
import javaLogo from '../../assets/technologies/java.png'
import golangLogo from '../../assets/technologies/mongodb.png'
import dockerLogo from '../../assets/technologies/docker.png'
import cLogo from '../../assets/technologies/c.png'
import cplusLogo from '../../assets/technologies/cplus.png'

export const About = ({handlePage}) => {

    const techList = useMemo(() => {
        return [
            {id: "html", text:"HTML", logo: htmlLogo, lvl: 90},
            {id: "css", text:"CSS", logo: cssLogo, lvl: 90},
            {id: "js", text:"Javascript", logo: jsLogo, lvl: 85},
            {id: "sql", text:"SQL", logo: sqlServerLogo, lvl: 80},
            {id: "csharp", text:"C#", logo: csharpLogo, lvl: 75},
            {id: "react", text:"ReactJS", logo: reactLogo, lvl: 70},
            {id: "node", text:"NodeJS", logo: nodeLogo, lvl: 70},
            {id: "golang", text:"Golang", logo: golangLogo, lvl: 65},
            {id: "vue", text:"VueJS", logo: vueLogo, lvl: 65},
            {id: "cplus", text:"C++", logo: cplusLogo, lvl: 65},
            {id: "c", text:"C", logo: cLogo, lvl: 65},
            {id: "azure", text:"Microsoft Azure", logo: azureLogo, lvl: 65},
            {id: "java", text:"Java", logo: javaLogo, lvl: 60},
            {id: "python", text:"Python", logo: pythonLogo, lvl: 60},
            {id: "docker", text:"Docker", logo: dockerLogo, lvl: 60},
            {id: "mongodb", text:"MongoDB", logo: mongodbLogo, lvl: 50}
        ]
        },[]);

    useEffect(() => {
        let timer = setTimeout(function () {
            let lis = document.getElementById('perc-graphic').getElementsByTagName('li');
            for (const e of lis) {
                let percentage = e.getElementsByClassName('percentage')[0];
                let languageLvl = e.getElementsByClassName('language-lvl');
                let language = '';
                if (languageLvl.length > 0 
                    && typeof(languageLvl[0].id) !== 'undefined' 
                    && languageLvl[0].id.split('-').length > 0)
                {
                    language = languageLvl[0].id.split('-')[0]
                }
                percentage.innerHTML = techList.find(el => el.id === language).lvl + '%';
            }
        }, 4100)
        return () => clearTimeout(timer);
    } , [techList])

    const nEdad = Math.floor((new Date() - new Date('1997-09-13'))/1000/60/60/24/365);

  return (
    <main id="main-wrapper">
        <section>
            <article id="about-content">
                <h1>Software Engineer.</h1>
                <p>Alex Sanchez is a {nEdad}<em> yo.</em> programmer originally hailing from Spain.</p>
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
                        {techList.map(listElement => 
                        {
                            const elementId = listElement.id + '-lvl'
                            const width = listElement.lvl + '%'

                            const animation = `growSlow_${listElement.id} 4s`

                            return  <li key={listElement.id}>
                                        <span className="language-name">
                                            {listElement.logo === "" 
                                            ? ''
                                            : <img className="language-logo" src={listElement.logo} alt={listElement.text}></img>}
                                            {listElement.text}
                                        </span>
                                        <div className="language-item">
                                            <div className='language-lvl' id={elementId} style={{"width": width, "animation": animation}}></div>
                                            <span className="percentage"></span>
                                        </div>
                                    </li>
                        })}
                        </ul>
                    </div>
                </div>
                <Link to="/work" onClick={() => handlePage('work')}><span><i className="fas fa-code-branch"></i></span> Check out my projects <span><i className="fas fa-angle-double-right"></i></span></Link>
            </article>
        </section>
    </main>
  );
}