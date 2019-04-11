import React from "react";

import Logo from "./Logo";
import MainMenu from "./MainMenu";

const MenuBar = props => {
  return (
    <div className={props.menuClass}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logo-menu-bg">
              <div className="row">
                <Logo logos={props.logos} />
                <MainMenu
                  tourMenuSections={props.tourMenuSections}
                  switches={props.switches}
                  tourPage={props.tourPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
