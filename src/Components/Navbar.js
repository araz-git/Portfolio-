import { useState } from "react";
import "../Styles/Navbar.css";
import "../Styles/General.css";

function Navbar(props) {
  const [menu, setMenu] = useState({
    openButton: { width: "25px" },
    closeButton: { width: "0" },
    open: false
  });
  const [menuClassName, setMenuClassName] = useState(
    "menu menu-close flex flex-even align-center"
  );

  function openMenu() {
    setMenu({
      openButton: { width: "0" },
      closeButton: { width: "25px" },
      open: true
    });
    setMenuClassName("menu menu-open flex flex-even align-center");
    props.disableScroll();
  }

  function closeMenu() {
    setMenu({
      openButton: { width: "25px" },
      closeButton: { width: "0" },
      open: false
    });
    setMenuClassName("menu menu-close flex flex-even align-center");
    props.enableScroll();
  }

  return (
    <>
      <div className="hamburger">
        <svg
          onClick={() => openMenu()}
          style={menu.openButton}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <nav>
        <div id="x">
          <svg
            onClick={() => closeMenu()}
            style={menu.closeButton}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            {/*Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className={menuClassName}>
          <div className="menu-flex">
            <li>
              <a onClick={() => closeMenu()} href="#about">
                About me
              </a>
            </li>
            <li>
              <a onClick={() => closeMenu()} href="#expertise">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => closeMenu()} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => closeMenu()} href="#contact">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
