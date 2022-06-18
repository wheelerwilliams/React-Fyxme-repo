import React from "react";
import axios from "axios";
import AWS from "aws-sdk";
import ReactGA from "react-ga";
import { notify } from "react-notify-toast";

ReactGA.initialize("UA-69662644-1");

AWS.config.region = "us-west-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-west-2:b40fb3fc-3d9b-4f46-a875-91faf89008e6",
});
var apigClientFactory = require("aws-api-gateway-client").default;
const config = {
  invokeUrl:
    "https://mwniono2j8.execute-api.us-west-2.amazonaws.com/Development",
};

const uuidv1 = require("uuid/v1");

export const AppContext = React.createContext();

class Provider extends React.Component {
  state = {
    showModal: false,
    showMessage: true,
    year: "",
    make: "",
    model: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    pictures: [],
    description: "",
    acceptedTerms: false,
    options: {
      years: [],
      makes: [],
      models: [],
    },
  };

  validateInput = (data) => {
    let errors = [];
    const inputRequired = ["firstname", "email", "phone", "zip"];

    for (let input of data) {
      if (inputRequired.includes(input.name)) {
        if (input.value === "") {
          errors.push(`${input.name} is required`);
        }
      }
      if (input.name === "phone" && input.value === "999-999-9999") {
        errors.push(`Please enter a valid phone number`);
      }
    }

    return errors;
  };

  closeMessage = () => {
    this.setState({ showMessage: false });
  };

  handleSubmitLeadToHubspot = (onShowNextStep) => {
    notify.hide();
    const leadId = uuidv1();
    const {
      year,
      make,
      model,
      firstName,
      lastName,
      phone,
      email,
      zip,
      pictures,
      description,
    } = this.state;
    const hubspotURL =
      "https://api.hsforms.com/submissions/v3/integration/submit/5081209/0f0fc86a-3b48-4532-a726-5568474e3474";
    const hubspotPayload = {
      fields: [
        { name: "car_year", value: year },
        { name: "car_make", value: make },
        { name: "car_model", value: model },
        { name: "full_name", value: `${firstName} ${lastName}` },
        { name: "firstname", value: firstName },
        { name: "lastname", value: lastName },
        { name: "email", value: email },
        { name: "phone", value: phone },
        { name: "zip", value: zip },
        { name: "lead_id", value: leadId },
        { name: "description", value: description },
        {
          name: "pictures",
          value:
            pictures.length > 0
              ? `${
                  window.location.origin
                }/Gallery?l=${leadId}&i=${pictures.join("||")}`
              : "no_pictures_submitted",
        },
      ],
      context: {
        hutk: window.__hsUserToken,
        pageUri: window.location.href,
        pageName: "Fyxme Form",
      },
    };

    const errors = this.validateInput(hubspotPayload.fields);

    if (errors.length > 0) {
      notify.show(errors.join(", "), "error", -1);
    } else {
      const apigClient = apigClientFactory.newClient(config);
      const parameters = {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      const body = hubspotPayload;

      apigClient.invokeApi(null, "/leadlog", "POST", parameters, body);

      axios
        .post(hubspotURL, hubspotPayload)
        .then((response) => {
          console.log(response);
          ReactGA.event({
            category: "event",
            action: `form_added_lead`,
          });
          onShowNextStep(3);
          window.location.replace(window.location.origin + "/thank-you");
        })
        .catch(
          ({
            response: {
              data: { errors },
            },
          }) => {
            let errorMessages = [];
            errors.forEach(({ message, errorType }) => {
              switch (errorType) {
                case "INVALID_EMAIL":
                  errorMessages.push("Please enter a valid email");
                  break;
                default:
                  errorMessages.push(message);
                  break;
              }
              ReactGA.event({
                category: "event",
                action: `form_completion_error_${errorType}`,
              });
              notify.show(errorMessages.join(", "), "error", -1);
            });
          }
        );
    }
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
    ReactGA.event({
      category: "event",
      action: `form_modal_open`,
    });
  };

  handleCloseModal = () => {
    ReactGA.event({
      category: "event",
      action: `form_modal_close`,
    });
    this.setState({
      showModal: false,
      year: "",
      make: "",
      model: "",
      pictures: [],
      acceptedTerms: false,
    });
  };

  handleSetState = (fieldName, value, cb) => {
    this.setState((state) => {
      let newState = state;
      if (fieldName === "year") {
        newState.make = "";
        newState.model = "";
      }
      if (fieldName === "make") {
        newState.model = "";
      }
      newState[fieldName] = value;
    }, cb);
  };

  handleSetOptions = (type, data) => {
    this.setState(({ options: { years, makes, models } }) => ({
      options: {
        years: type === "years" ? data : years,
        makes: type === "makes" ? data : makes,
        models: type === "models" ? data : models,
      },
    }));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          openModal: this.handleOpenModal,
          closeModal: this.handleCloseModal,
          closeMessage: this.closeMessage,
          setYear: (value, cb) => {
            ReactGA.event({
              category: "event",
              action: `form_car_year_selected`,
            });
            this.handleSetState("year", value, cb);
          },
          setMake: (value, cb) => {
            ReactGA.event({
              category: "event",
              action: `form_car_make_selected`,
            });
            this.handleSetState("make", value, cb);
          },
          setModel: (value, cb) => {
            ReactGA.event({
              category: "event",
              action: `form_car_selection_completed`,
            });
            this.handleSetState("model", value, cb);
          },
          setFirstName: ({ target: { value } }) => {
            this.setState({ firstName: value });
          },
          setLastName: ({ target: { value } }) => {
            this.setState({ lastName: value });
          },
          setPhone: ({ target: { value } }) => {
            this.setState({ phone: value });
          },
          setEmail: ({ target: { value } }) => {
            this.setState({ email: value });
          },
          setZip: ({ target: { value } }) => {
            this.setState({ zip: value });
          },
          setAcceptTerms: () => {
            this.setState((state) => {
              return { acceptedTerms: !state.acceptedTerms };
            });
          },
          setPictures: (value) => {
            this.setState({ pictures: value });
          },
          setDescription: ({ target: { value } }) => {
            this.setState({ description: value });
          },
          setYMMOptions: (type, data) => {
            this.handleSetOptions(type, data);
          },
          submitLeadToHubspot: this.handleSubmitLeadToHubspot,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default Provider;
