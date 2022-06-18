/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactModal from "react-modal";
import ImagesComponent from "./ImagesPage";
import InputMask from "react-input-mask";
import SelectorComponent from "./SelectorPage";
import { AppContext } from "./ContextProvider";
import ReactGA from "react-ga";
ReactGA.initialize("UA-69662644-1");

const CloseModalButton = ({ handleCloseModal }) => {
  return (
    <div className="myModalCloseButton" onClick={handleCloseModal}>
      <span>x</span>
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <p
      style={{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30,
        lineHeight: "40px",
        marginBottom: 15,
      }}
    >
      {text}
    </p>
  );
};

const NextStepButton = ({ text, next, id, isEnabled }) => {
  return (
    <div className="slide-button">
      <a
        className={`btn btn-small btn-maincolor nextStepButton ${
          !isEnabled ? "disabled" : ""
        }`}
        id={id}
        onClick={next}
      >
        {text}
      </a>
    </div>
  );
};

const Step0 = ({ handleCloseModal, next, isEnabled, landingName }) => {
  return (
    <div className="stepContainer">
      <CloseModalButton handleCloseModal={handleCloseModal} />
      <div className="firstStepModal">
        <Title text="Select Year, Make and Model" />
        <SelectorComponent landingName={landingName} />
        <NextStepButton
          text="Continue"
          next={next}
          id="continuePhotos"
          isEnabled={isEnabled}
        />
      </div>
    </div>
  );
};

const Step1 = ({ handleCloseModal, next, isEnabled, setDescription }) => {
  return (
    <div className="stepContainer">
      <CloseModalButton handleCloseModal={handleCloseModal} />
      <Title text="Upload photos of your car" />
      <div className="description">
        Please provide a few pictures both closeup and from far away.
      </div>
      <div className="marginB15">
        <b>
          It is important we see many pictures to provide you an accurate
          estimate.
        </b>
      </div>
      <div>
        <ImagesComponent />
      </div>
      <div>
        <textarea
          placeholder="Describe what happened to your car..."
          className="descriptionTextArea"
          onChange={setDescription}
        />
      </div>
      <NextStepButton
        text="Continue"
        next={next}
        id="continuePhotos"
        isEnabled={isEnabled}
      />
    </div>
  );
};

const InputComponent = ({
  placeholder,
  icon,
  onChange,
  value,
  type = "text",
}) => {
  if (icon === "mapicon") {
    const max_chars = 5;
    if (value.length > max_chars) {
      value = value.substr(0, max_chars);
    }
  }

  return (
    <div className="step2InputWrapper">
      <div className="icon">
        <img
          src={`images/${icon}.png`}
          alt={`images/${icon}.png?${Date.now()}`}
        />
      </div>
      {icon === "telephone" ? (
        <InputMask
          mask="999-999-9999"
          type="tel"
          maskPlaceholder={""}
          placeholder="Phone number"
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name="fName"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
      )}
    </div>
  );
};

const Step2 = ({
  handleCloseModal,
  next,
  isChecked,
  setFirstName,
  setLastName,
  setPhone,
  setEmail,
  setZip,
  setAcceptTerms,
  state,
}) => {
  return (
    <div className="stepContainer">
      <CloseModalButton handleCloseModal={handleCloseModal} />
      <Title text="Personal Information" />
      <InputComponent
        placeholder="First name"
        icon="user"
        onChange={setFirstName}
        value={state.firstName}
      />
      <InputComponent
        placeholder="Last name"
        icon="user"
        onChange={setLastName}
        value={state.lastName}
      />
      <InputComponent
        placeholder="Phone number"
        icon="telephone"
        onChange={setPhone}
        value={state.phone}
      />
      <InputComponent
        type="email"
        placeholder="E-mail address"
        icon="envelope"
        onChange={setEmail}
        value={state.email}
      />
      <InputComponent
        type="number"
        placeholder="Zip Code"
        icon="mapicon"
        onChange={setZip}
        value={state.zip}
      />
      <div className="termsAndConditionsLink">
        <input
          style={{ display: "none" }}
          type="checkbox"
          name="acceptTerms"
          checked={isChecked}
          onChange={setAcceptTerms}
        />
        <label htmlFor="acceptTerms" onClick={setAcceptTerms}>
          I accept the{" "}
          <a
            className="linkTermsConditions"
            target="_blank"
            href="/terms-and-conditions"
          >
            terms & conditions
          </a>{" "}
          of this page
        </label>
      </div>
      <NextStepButton
        text="send information"
        next={next}
        isEnabled={isChecked && (state.email || state.phone)}
        id="checkTerms"
      />
    </div>
  );
};

const Step3 = ({ handleCloseModal, next }) => {
  return (
    <div className="stepContainer">
      <CloseModalButton handleCloseModal={handleCloseModal} />
      <div className="step3Content">
        <Title text="Information Sent" />
        <p>
          Thank you for choosing FYXME. If you submitted this request during
          regular business hours 8am-6pm PST, we will get right back to you.
        </p>
        <div className="imageSuccess">
          <img
            src="images/success-orange.png"
            alt="success-orange"
            width={150}
          />
        </div>
        <p className="step3lastp">
          Need help now? Call{" "}
          <a href="tel:9493567737" className="step3Link2">
            949-356-7737
          </a>
        </p>
        <div>
          <a
            onClick={() => {
              next();
              handleCloseModal();
            }}
            className="step3Link"
          >
            Close this window
          </a>
        </div>
      </div>
    </div>
  );
};

class ModalPage extends React.Component {
  static contextType = AppContext;
  state = {
    index: 0,
  };

  updateState = (index) => {
    ReactGA.event({
      category: "event",
      action: `show_current_step_${index}`,
    });

    this.setState(function (state) {
      return { index };
    });
  };

  showStep1 = () => {
    this.updateState(1);
  };

  showStep2 = () => {
    this.updateState(2);
  };

  showStep3 = () => {
    const { submitLeadToHubspot } = this.context;
    submitLeadToHubspot(this.updateState);
  };

  resetModal = () => {
    ReactGA.event({
      category: "event",
      action: `form_completed`,
    });
    this.updateState(0);
  };

  updateAcceptTerms = () => {
    this.setState(function (state) {
      if (!state.acceptedTerms) {
        document.getElementById("checkTerms").classList.remove("disabled");
      } else {
        document.getElementById("checkTerms").classList.add("disabled");
      }

      return {
        acceptedTerms: !state.acceptedTerms,
      };
    });
  };

  afterModalOpen = () => {
    const { year, make, model } = this.context.state;
    if (year === "" || make === "" || model === "") {
      this.updateState(0);
    } else if (this.state.index === 0) {
      this.updateState(1);
    }
  };

  showCurrentStep = (index) => {
    const { year, make, model, pictures, description } = this.context.state;
    const { landingName } = this.props;
    switch (index) {
      default:
        //show step 0 only if the user has not selected YMM
        return (
          <Step0
            {...this.props}
            next={this.showStep1}
            isEnabled={year && make && model}
            landingName={landingName}
          />
        );
      case 1:
        return (
          <Step1
            {...this.props}
            next={this.showStep2}
            setDescription={this.context.setDescription}
            isEnabled={pictures.length > 0 || description.length > 4}
          />
        );
      case 2:
        return (
          <Step2
            {...this.props}
            {...this.context}
            next={this.showStep3}
            isChecked={this.context.state.acceptedTerms}
            toggleAcceptTerms={this.updateAcceptTerms}
          />
        );
      case 3:
        return <Step3 {...this.props} next={this.resetModal} />;
    }
  };

  render() {
    return (
      <ReactModal
        style={{
          overlay: {
            display: "flex",
            backgroundColor: "rgba(86, 86, 86, 0.80)",
          },
        }}
        className="myModal"
        bodyOpenClassName="openBody"
        isOpen={this.props.showModal}
        onRequestClose={this.props.handleCloseModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        onAfterOpen={this.afterModalOpen}
      >
        {this.showCurrentStep(this.state.index)}
      </ReactModal>
    );
  }
}

export default ModalPage;
