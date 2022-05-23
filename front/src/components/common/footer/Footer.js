export const Footer = () => {
  return (
    <footer>
        <div id="social-media">
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/alexso13997/'>
                        <span>
                            <i className="fab fa-linkedin"></i>
                        </span>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/Alexso47'>
                        <span>
                            <i className="fab fa-github-square"></i>
                        </span>
                    </a>
                </li>
            </ul>
            <p>Alex Sanchez <span>&copy;2021</span></p>
            {/* <br/>
            <p id='recaptcha-msg'>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"><span>Privacy Policy</span></a>{" and " }
                <a href="https://policies.google.com/terms"><span>Terms of Service</span></a> apply.
            </p> */}
        </div>
    </footer>
  );
}

