import React from "react";
import "./Card.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
const ICONLIST = [
  <FaGraduationCap />,
  <HiOutlineNewspaper />,
  <MdPsychology />,
];

export const Card = ({ words, link, index }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{ICONLIST[index]}</h2>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: words }}
        ></p>
        {link ? link : ""}
      </div>
    </div>
  );
};
