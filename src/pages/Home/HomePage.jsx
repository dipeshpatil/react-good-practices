import React, { PureComponent } from "react";

import BasePage from "../../components/BasePage/BasePage";
import TextWithSideLabel from "../../components/InputGroups/TextWithSideLabel/TextWithSideLabel";

import "./HomePage.scss";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BasePage>
        <br />
        <TextWithSideLabel
          textPlaceHolder="Email Address"
          textRef={() => null}
          labelText="someone@example.com"
          labelOrientation="start"
        />
      </BasePage>
    );
  }
}

export default HomePage;
