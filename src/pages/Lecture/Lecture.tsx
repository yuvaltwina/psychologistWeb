import "../Lecture/Style/Lecture.css";
import React, { FC } from "react";
import lecturePlasteline from "../../utils/assets/lecturePlasteline.jpg";
export const Lecture = () => {
  return (
    <div className="lecture">
      <div className="lecture-container">
        <img src={lecturePlasteline} alt="road" className="lecture-image"></img>
        <article className="lecture-text">
          <h1>הרצאות</h1>
          <h3>
            ההרצאות מיועדות לקהל הרחב: חוגי בית, מסגרות פרטיות וארגונים. משך
            ההרצאות כשעה. ניתן לבקש להדגיש או להרחיב בנושאים מסוימים בהרצאה
            בהתאם לצורך.
          </h3>
          <h5 className="lecture-text-sub-title">מעגלי תקיעות</h5>
          <p>
            קשיים שחווינו בגילאים מוקדמים דרשו מאיתנו ליצור דרכי התמודדות שמטרתם
            למנוע את חזרתם של קשיים אלו. בהרצאה זאת נלמד על דרכי התמודדות
            השכיחות שאנחנו פועלים בהן, על רגשות, מעגלי חשיבה והתנהגויות שעלולים
            להוביל לתחושת תקיעות ועל דרכים שעשויות לעזור לנו לצאת ממעגלים אלו.
          </p>
          <h5 className="lecture-text-sub-title">יצירתיות</h5>
          <p>
            רבים סבורים שיצירתיות היא מיומנות שקיימת בקבוצת אנשים מסוימת שנולדה
            עם כישרון זה. האם יצירתיות קיימת אצל כולנו? האם היא מולדת או נרכשת?
            והאם היא חשובה או פשוט נחמד שיש אותה? בהרצאה זאת נלמד על מאפייני
            היצירתיות, נתנסה בהם ונראה איך ניתן להשתמש ביצירתיות לטובתנו בתחומים
            שונים בחיינו.
          </p>
        </article>
      </div>
    </div>
  );
};
