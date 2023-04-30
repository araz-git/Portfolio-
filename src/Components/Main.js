import "../Styles/Main.css";

function Main() {
  return (
    <section id="main">
      <div id="my-card">
        <div className="flex flex-even flex-wrap-reverse align-center">
          <h1>
            ARAZ MUSAEV <br />
            <span id="job">Front End Engineer</span>
          </h1>
          <img src="./images/smile.png" alt="" />
        </div>
      </div>
      <div id="arrow-down">
        <a href="#about">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            {/*Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Main;
