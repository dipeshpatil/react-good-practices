import React, { PureComponent } from "react";
import clsx from "clsx";

import { Row, Col, Form, Button } from "react-bootstrap";

import BasePage from "../../components/BasePage/BasePage";
import Header from "../../components/Header/Header";
import FooterLinksListGroup from "../../components/ListGroups/FooterLinksListGroup/FooterLinksListGroup";
import TextFieldInput from "../../components/InputGroups/TextFieldInput/TextFieldInput";
import DropdownInput from "../../components/InputGroups/DropdownInput/DropdownInput";
import TextWithSideLabel from "../../components/InputGroups/TextWithSideLabel/TextWithSideLabel";

import footerData from "../../data/footer_data.json";

import config from "../../config/config";

import "./ContactPage.scss";

const { isDark, contactPageData } = config;

const contactPageOptions = {
  fluidContainer: false,
  useContainer: true,
  additionalClasses: ["p-4"],
};

class ContactPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const socialLinksArray = ["Facebook", "Twitter", "WhatsApp"];

    return (
      <BasePage pageOptions={contactPageOptions}>
        <Row>
          <Col sm={5}>
            <Header
              text="Let's Connect!"
              size={1}
              additionalClasses={[
                "text-start",
                "readex-pro",
                "readex-pro__semi-bold",
                "text-danger",
              ]}
            />
            <Header
              text="Write To Us..."
              size={3}
              additionalClasses={[
                "mt-4",
                "text-start",
                "readex-pro",
                "readex-pro__extra-light",
                isDark && "text-light",
              ]}
            />
            <Header
              text={contactPageData.email}
              size={3}
              additionalClasses={[
                "text-start",
                "comfortaa",
                "comfortaa__semi-bold",
                "text-danger",
              ]}
            />

            <Header
              text="Let's Talk..."
              size={3}
              additionalClasses={[
                "mt-4",
                "text-start",
                "readex-pro",
                "readex-pro__extra-light",
                isDark && "text-light",
              ]}
            />
            <Header
              text={contactPageData.phone}
              size={3}
              additionalClasses={[
                "text-start",
                "comfortaa",
                "comfortaa__semi-bold",
                "text-danger",
              ]}
            />

            <Header
              text="Let's Chat..."
              size={3}
              additionalClasses={[
                "mt-4",
                "text-start",
                "readex-pro",
                "readex-pro__extra-light",
                isDark && "text-light",
              ]}
            />
            <FooterLinksListGroup
              listType="unordered"
              listData={footerData["social_links"].links
                .filter((socialLink) =>
                  socialLinksArray.includes(socialLink.title)
                )
                .sort((socialLink1, socialLink2) =>
                  socialLink1.title.localeCompare(socialLink2.title)
                )}
            />
          </Col>
          <Col sm={7}>
            <Header
              text="Contact Us"
              size={1}
              additionalClasses={[
                "text-start",
                "readex-pro",
                "readex-pro__medium",
                isDark && "text-light",
              ]}
            />
            <Form>
              <Row>
                <Col sm={6}>
                  <TextFieldInput
                    labelText="Name"
                    textPlaceholder="Full Name"
                    textRef={() => null}
                  />
                </Col>
                <Col sm={6}>
                  <TextFieldInput
                    labelText="Company Name"
                    textRef={() => null}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <TextFieldInput
                    labelText="Company Email Address"
                    textRef={() => null}
                  />
                </Col>
                <Col sm={6}>
                  <TextFieldInput
                    labelText="Contact Number"
                    textPlaceholder="Country Code + Contact Number"
                    textRef={() => null}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <DropdownInput
                    labelText="Customer Type"
                    dropDownValues={["New Customer", "Existing Customer"]}
                  />
                </Col>
                <Col sm={6}>
                  <DropdownInput
                    labelText="Purchase Scheme After Service ?"
                    dropDownValues={["Yes", "No", "Maybe"]}
                  />
                </Col>
              </Row>
              <TextFieldInput
                labelText="Comments"
                inputAs="textarea"
                textRef={() => null}
              />
              <Button
                className="readex-pro"
                variant="danger"
                onClick={() => alert("Request Submitted!")}
              >
                Send Request
              </Button>
            </Form>
          </Col>
        </Row>
      </BasePage>
    );
  }
}

export default ContactPage;
