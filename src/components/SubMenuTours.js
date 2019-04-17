import React from "react";

import SubMenuDest from "./SubMenuDest";

const SubMenuTours = props => {
  return (
    <div className="megamenu">
      {props.tourMenuSections.map((section, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="megamenu-list clearfix">
              <SubMenuDest section={section} handleLeave={props.handleLeave} />
              {props.tourMenuSections[index + 1] ? (
                <SubMenuDest
                  section={props.tourMenuSections[index + 1]}
                  handleLeave={props.handleLeave}
                />
              ) : null}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SubMenuTours;
