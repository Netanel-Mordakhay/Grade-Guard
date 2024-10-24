import { useState } from "react";

import classes from "../../styles/navbar.module.css";
import { FaHome, FaQuestion, FaBook } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdAssignmentTurnedIn, MdOutlineExitToApp } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import ReportBug from "./ReportBug";

const data = [
  { link: "", label: "Homepage", icon: FaHome },
  { link: "", label: "Courses", icon: FaBook },
  { link: "", label: "Exams", icon: PiNotebookFill },
  { link: "", label: "To do", icon: MdAssignmentTurnedIn },
  { link: "", label: "Messages", icon: FaMessage },
  { link: "", label: "Trivia", icon: FaQuestion },
];

const Navbar = () => {
  const [active, setActive] = useState("Homepage");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <ReportBug />
      </div>
      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <MdOutlineExitToApp className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
