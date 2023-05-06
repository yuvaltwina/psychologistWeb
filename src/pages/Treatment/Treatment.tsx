import React, { FC } from "react";
import sittingPeople from "../../utils/assets/sittingPeople.jpg";
import "../Treatment/Style/Treatment.css";
export const Treatment = () => {
  return (
    <div className="home-study">
      <img
        src={sittingPeople}
        alt="sitting people"
        className="home-study-image"
      ></img>
      <article className="home-study-text">
        <h1>מהו טיפול פסיכולוגי</h1>

        <p>
          מעצם היותנו בני אדם, אנחנו מתמודדים עם קשיים. לאורך השנים אנחנו מפתחים
          דרכי התמודדות שונות. לעיתים דרכים אלו מפסיקות לשרת אותנו ואנו זקוקים
          לעזרה. <br></br>תחילת טיפול מאפשרת עצירה והתבוננות, דבר שאינו מובן
          מאליו בקצב החיים של היום. כך, ישנה הזדמנות להתפתחות של מודעות עצמית
          ודרכי התמודדות מיטיבות המאפשרות תנועה לשינוי. <br></br>אני מאמין
          שתחילתו של תהליך טיפולי עשוי להיות הצעד הראשון בשינוי זה.
        </p>
      </article>
    </div>
  );
};
