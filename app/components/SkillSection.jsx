import React from "react";
import SkillCard from "./SkillCard";

const SkillSection = ({ text }) => {
  return (
    <div className="skill-subsection">
      {text.map((t) => (
        <SkillCard text={t} />
      ))}
    </div>
  );
};

export default SkillSection;
