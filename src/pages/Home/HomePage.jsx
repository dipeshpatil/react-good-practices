import React, { PureComponent } from "react";

import BasePage from "../../components/BasePage/BasePage";

import TextWithSideLabel from "../../components/InputGroups/TextWithSideLabel/TextWithSideLabel";
import SimpleListGroup from "../../components/ListGroups/SimpleListGroup/SimpleListGroup";
import SimpleListGroupWithIconButton from "../../components/ListGroups/SimpleListGroupWithIconButton/SimpleListGroupWithIconButton";

import "./HomePage.scss";

const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BasePage>
        <br />
        <SimpleListGroupWithIconButton
          bootstrapIconClasses={["x-lg"]}
          variant="flush"
          iconButtonOrientation="end"
          handleIconClick={(listIdx) => alert(listItems[listIdx])}
          listData={listItems}
        />
        <SimpleListGroup listData={listItems} />
        <TextWithSideLabel
          textPlaceHolder="Email Address"
          textRef={() => null}
          labelText="someone@example.com"
          labelOrientation="end"
        />
      </BasePage>
    );
  }
}

export default HomePage;
