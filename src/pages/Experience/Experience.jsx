import React, { FC, useState } from 'react';
import '../Experience/Style/Experience.css';
import { Card } from '../../components/Card/Card';
// לאורך השנים עבדתי עם אוכלוסיות שונות ומגוונות שעזרו לי לרכוש ידע והבנה מעבר ללימודים האקדמיים.
const experienceList = [
  {
    link: (
      <a
        className="card-link"
        href="https://www.sciencedirect.com/science/article/abs/pii/S0747563220303265"
        target="_blank"
      >
        קישור לתזה
      </a>
    ),
    pargrah: ` תואר ראשון בפסיכולוגיה, אוניברסיטת רייכמן.<br /><br /> תואר שני בהצטיינות בפסיכולוגיה קלינית , אוניברסיטת רייכמן.<br /><br />תזה בנושא אינטראקציה של בני נוער ומשחקי מחשב`,
  },
  {
    pargrah: `בעל מספר שנות ניסיון טיפולי בקליניקה פרטית בתל-אביב, במרכז לבריאות הנפש ׳שלותה׳ בהוד-השרון ובקליניקה לפסיכולוגיה של אוניברסיטת רייכמן.<br /><br />
    בנוסף, לאורך השנים עבדתי במספר מסגרות חינוכיות ושיקומיות שעזרו לי לרכוש ידע והבנה מעבר ללימודים האקדמיים.
  `,
  },
  {
    pargrah: `כיום אני מטפל בקליניקה פרטית בצפון תל אביב, מתמחה, שנה שלישית, בהתמחות קלינית בקליניקה לפסיכולוגיה של אוניברסיטת רייכמן  ומרצה במכינת "אשנב" - מכינה שפועלת למען שילוב מתמודדי נפש בקהילה.<br /><br /> בנוסף, מרצה לקהל הרחב במגוון נושאים מתחום הפסיכולוגיה.
    `,
  },
];

export const Experience = () => {
  const displayExpirience = experienceList.map(({ pargrah, link }, index) => {
    return (
      <Card key={pargrah} words={pargrah} index={index} link={link}></Card>
    );
  });
  return (
    <div className="experience-cover">
      <article className="experience-text-container">
        <h1>השכלה אקדמאית והכשרה</h1>
        <ul className="experience-list">{displayExpirience}</ul>
      </article>
    </div>
  );
};
