import './Work.css';

import tfgPic from '../../assets/tfg/tfg.jpeg'
import processPDF from '../../assets/tfg/dfp_process.pdf'
import paperPDF from '../../assets/tfg/dfp_paper.pdf'

import htmlLogo from '../../assets/technologies/html.png'
import cssLogo from '../../assets/technologies/css.png'
import jsLogo from '../../assets/technologies/javascript.png'
import jqueryLogo from '../../assets/technologies/jquery.png'
import bootstrapLogo from '../../assets/technologies/bootsrap.png'
import csharpLogo from '../../assets/technologies/csharp.png'
import sqlServerLogo from '../../assets/technologies/sqlserver.png'
import azureLogo from '../../assets/technologies/azure.png'
import logicAppsLogo from '../../assets/technologies/logicapps.png'
import reactLogo from '../../assets/technologies/react.png'
import nodeLogo from '../../assets/technologies/node.png'
import mongodbLogo from '../../assets/technologies/mongodb.png'

import notesVideo from '../../assets/notes-app/notes-app.mp4'
import countriesVideo from '../../assets/countries-app/countries-app.mp4'


export const Work = () => {

    const toggleFullScreen =  (video) => {
        let el = document.getElementById("fullscreen-"+video+"Video");
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen(); 
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else {
            alert("Fullscreen not available")
        }
    };
    

  return (
    <main id="main-wrapper">
        <section id="work-content">
            <article className='project-item'>
                <video loop playsInline autoPlay muted id="fullscreen-countriesVideo"
                    src={countriesVideo}
                    type="video/mp4"
                />
                <div className='project-info'>
                    <h3>Countries-app</h3>
                    <p>
                        You are able to search a country and some of its information as weather, population, etc.
                    </p>
                    <p>Implemented to learn Reactjs and fetching data from external APIs, among others.</p>
                    <div className="tecnologies">
                        <span><img title='react' alt='react' src={reactLogo}/></span>
                        <span><img title='node' alt='node' src={nodeLogo}/></span>
                    </div>
                    <br/>
                    <button className='btn-two small' onClick={() => toggleFullScreen("countries")}>Fullscreen</button>
                </div>
            </article>
            <article className='project-item'>
                <video loop playsInline autoPlay muted id="fullscreen-notesVideo"
                    src={notesVideo}
                    type="video/mp4"
                />
                <div className='project-info'>
                    <h3>Notes-app</h3>
                    <p>
                    Web application where you can annotate, with your own user, stuff that might need to remember later. 
                    Notes can be edited, filtered, marked as important, among others.
                    </p>
                    <p>Implemented to learn Reactjs, Nodejs and MongoDB.</p>
                    <div className="tecnologies">
                        <span><img title='react' alt='react' src={reactLogo}/></span>
                        <span><img title='node' alt='node' src={nodeLogo}/></span>
                        <span><img title='mongodb' alt='mongodb' src={mongodbLogo}/></span>
                    </div>
                    <br/>
                    <button className='btn-two small' onClick={() => toggleFullScreen("notes")}>Fullscreen</button>
                </div>
            </article>    
            <article className='project-item'>
              <img src={tfgPic} alt="Degree final project"/>
                <div className='project-info'>
                    <h3>Degree Final Project</h3>
                    <p>
                        Web application to manage data on a supply chain company with and API.
                        Use of Azure Services (Logic Apps) to automate the sending of emails
                        with periodic reports of the information registered on the web.
                    </p>
                    <a href="https://github.com/Alexso47/TFG-frontend" target="_blank" rel="noopener noreferrer">Frontend</a>
                    <br/>
                    <a href="https://github.com/Alexso47/TFG-backend" target="_blank" rel="noopener noreferrer">Backend</a>
                    <br/>
                    <p>
                        Check out <a href={processPDF}  target="_blank" rel="noopener noreferrer">process </a>
                        and <a href={paperPDF}  target="_blank" rel="noopener noreferrer">paper</a> (both in spanish)
                    </p>
                    <div className="tecnologies">
                        <span><img title='html' alt='html' src={htmlLogo}/></span>
                        <span><img title='css' alt='css' src={cssLogo}/></span>
                        <span><img title='javascript' alt='javascript' src={jsLogo}/></span>
                        <span><img title='jquery' alt='jquery' src={jqueryLogo}/></span>
                        <span><img title='bootstrap' alt='bootstrap' src={bootstrapLogo}/></span>
                        <span><img title='c sharp' alt='c sharp' src={csharpLogo}/></span>
                        <span><img title='sql server' alt='sql server' src={sqlServerLogo}/></span>
                        <span><img title='microsoft azure' alt='microsoft azure' src={azureLogo}/></span>
                        <span><img title='logic apps' alt='logic apps' src={logicAppsLogo}/></span>
                    </div>
                </div>
            </article>    
        </section>
    </main>
  );
}