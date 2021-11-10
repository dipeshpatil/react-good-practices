import React, { PureComponent } from "react";

import BasePage from "../../components/BasePage/BasePage";

import "./ContactPage.scss";

class ContactPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <BasePage>Contact Page</BasePage>;
  }
}

export default ContactPage;
