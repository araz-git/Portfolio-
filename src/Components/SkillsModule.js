import { skills } from "../Data/SkillsData";
import "../Styles/Skills.css";
import { useState } from "react";
import SkillCard from "./SkillCard";

function SkillsModule(props) {
  const [showSkillCard, setShowSkillCard] = useState({ display: "none" });
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState([]);

  function openSkillCard(skill) {
    setShowSkillCard({ display: "block" });
    setTitle(skill.title);
    setImage(skill.img);
    setDescription(skill.description);
    props.disableScroll();
  }

  function closeSkillCard() {
    setShowSkillCard({ display: "none" });
    props.enableScroll();
  }

  return (
    <>
      <section id="expertise">
        <h2>Skills</h2>
        <div className="skills flex flex-even flex-wrap">
          {skills.map((skill) => {
            return (
              <div onClick={() => openSkillCard(skill)}>
                <img src={skill.img} alt="" />
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </section>
      <SkillCard
        style={showSkillCard}
        close={closeSkillCard}
        title={title}
        img={image}
        description={description}
      />
    </>
  );
}

export default SkillsModule;
