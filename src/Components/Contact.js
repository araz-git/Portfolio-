import "../Styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        If you have any questions or would like to discuss potential
        opportunities further, please don't hesitate to contact me via email or
        LinkedIn. I look forward to hearing from you!
      </p>
      <div className="flex flex-center">
        <div>
          <div className="flex align-center">
            <img src="images/Gmail.png" alt="" />
            <a href="mailto:musaev.araz.sh@gmail.com?subject=Portfolio%20Message">
              <span>musaev.araz.sh@gmail.com</span>
            </a>
          </div>
          <div className="flex align-center">
            <img src="images/github-mark.png" alt="" />
            <a href="https://github.com/araz-git">
              <span>My GitHub</span>
            </a>
          </div>
          <div className="flex align-center">
            <img src="images/Linkedin.png" alt="" />
            <a href="https://www.linkedin.com/mwlite/in/araz-musaev-1858bb173">
              <span>LinkedIn profile page</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
