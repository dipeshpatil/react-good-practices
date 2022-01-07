import React, { Component } from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

import BasePage from "../../components/BasePage/BasePage";
import Header from "../../components/Header/Header";
import FooterLinksListGroup from "../../components/ListGroups/FooterLinksListGroup/FooterLinksListGroup";
import TextFieldInput from "../../components/InputGroups/TextFieldInput/TextFieldInput";
import DropdownInput from "../../components/InputGroups/DropdownInput/DropdownInput";
import GridLayout from "../../components/GridLayout/GridLayout";

import footerData from "../../data/footer_data.json";
import productsData from "../../data/products_page_data.json";

import config from "../../config/config";

import "./ContactPage.scss";

const { isDark, contactPageData } = config;

const contactPageOptions = {
  fluidContainer: false,
  useContainer: true,
  additionalClasses: ["p-4"],
};

const socialLinksArray = ["Facebook", "Twitter", "WhatsApp"];

const contactFormDefaults = {
  companyType: [
    "Small Business",
    "Medium Sized Enterprise",
    "Corporate",
    "Education",
    "Healthcare",
    "Others",
  ],
  productType: [
    "Multifunctionals",
    "Duplicators",
    "Laser Printers",
    "Projectors/Whiteboards",
    "Allow Us To Help You Decide",
  ],
};

const productCategoryMapping = {
  Multifunctionals: "multifunctional_printers",
  Duplicators: "digital_duplicators",
  "Laser Printers": "consumer_printers",
  "Projectors/Whiteboards": "visual_communications",
  "Allow Us To Help You Decide": "none",
};
class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactForm: {
        fullName: "",
        contactNumber: "",
        companyName: "",
        companyEmailAddress: "",
        companyType: "",
        productType: "",
        productID: "",
        comments: "",
      },
      productIDDropDown: [],
      hideProductIDDropdown: true,
    };
  }

  updateContactFormState(targetField, value) {
    const { contactForm } = this.state;
    contactForm[targetField] = value;
    this.setState({ contactForm });
  }

  updateProductIDDropDownFromProductsData(productType) {
    let hide;
    if (productCategoryMapping[productType] === "none") {
      hide = true;
    } else {
      hide = false;
      const productCategory =
        productsData.products[productCategoryMapping[productType]].items;
      const productIds = [];
      productCategory.map((product) => productIds.push(product.title));
      this.setState({ productIDDropDown: productIds });
    }
    this.setState({ hideProductIDDropdown: hide });
  }

  render() {
    const { productIDDropDown, hideProductIDDropdown, contactForm } =
      this.state;
    const { companyType, productType } = contactFormDefaults;

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
              <GridLayout
                columns={[{ sm: 6 }, { sm: 6 }]}
                components={[
                  <TextFieldInput
                    labelText="Full Name"
                    textRef={() => null}
                    handleOnChange={(e) =>
                      this.updateContactFormState("fullName", e.target.value)
                    }
                  />,
                  <TextFieldInput
                    labelText="Contact Number"
                    textPlaceholder="Country Code + Contact Number"
                    textRef={() => null}
                    handleOnChange={(e) =>
                      this.updateContactFormState(
                        "contactNumber",
                        e.target.value
                      )
                    }
                  />,
                ]}
              />
              <TextFieldInput
                labelText="Company Name"
                textRef={() => null}
                handleOnChange={(e) =>
                  this.updateContactFormState("companyName", e.target.value)
                }
              />
              <GridLayout
                columns={[{ sm: 6 }, { sm: 6 }]}
                components={[
                  <TextFieldInput
                    labelText="Company Email Address"
                    textRef={() => null}
                    handleOnChange={(e) =>
                      this.updateContactFormState(
                        "companyEmailAddress",
                        e.target.value
                      )
                    }
                  />,
                  <DropdownInput
                    labelText="Company Type"
                    dropDownValues={companyType}
                    handleOnChange={(e) =>
                      this.updateContactFormState("companyType", e.target.value)
                    }
                  />,
                ]}
              />
              <GridLayout
                columns={[{ sm: 6 }, { sm: 6 }]}
                components={[
                  <DropdownInput
                    labelText="Product Type"
                    dropDownValues={productType}
                    handleOnChange={(e) => {
                      const productType = e.target.value;
                      this.updateContactFormState("productType", productType);
                      this.updateProductIDDropDownFromProductsData(productType);
                    }}
                  />,
                  !hideProductIDDropdown ? (
                    <DropdownInput
                      labelText="Product ID"
                      dropDownValues={productIDDropDown}
                      handleOnChange={(e) =>
                        this.updateContactFormState("productID", e.target.value)
                      }
                    />
                  ) : null,
                ]}
              />
              <TextFieldInput
                labelText="Comments"
                inputAs="textarea"
                textRef={() => null}
                handleOnChange={(e) =>
                  this.updateContactFormState("comments", e.target.value)
                }
              />
              <Button
                className="readex-pro"
                variant="danger"
                onClick={() => console.table(contactForm)}
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
