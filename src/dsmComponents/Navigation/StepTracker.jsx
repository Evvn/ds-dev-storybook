import React from "react";
import styled from "styled-components";

const StepTrackerContainer = styled.div``;

const StepLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StepLink = styled.a.attrs({ className: "font-button-text" })`
  display: inline-block;
  color: ${props => props.theme.colorCardomomText};
  width: 74px;
  margin-top: 12px;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.currentStep {
    color: ${props => props.theme.colorPaprika};
    font-family: "Muli-Bold";
  }
`;

const TotalBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 8px;
  border-radius: 8px;
  background-color: ${props => props.theme.colorPaprika5};
  margin: 0 33px;
  position: relative;
`;

const ProgressBar = styled.div`
  /* margin: 0 33px; */
  position: absolute;
  height: 8px;
  border-radius: 8px;
  background-color: ${props => props.theme.colorPaprika};
  transition: 400ms ease-in-out all;
`;

const StepDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${props => props.theme.colorPaprika};
  transition: 400ms ease-in-out all;
  /* transition-delay: 400ms; */
`;

class StepTracker extends React.Component {
  state = {
    currentStep: 1
  };

  drawProgressIndicator = numberOfSteps => {
    const { currentStep } = this.state;
    let progressIndicator = [];
    let stepDots = [];
    let mathsNum = (currentStep - 1) / (numberOfSteps - 1);
    const progressBarStyle = {
      width: `calc(${mathsNum * 100}% + ${currentStep === 1 ? 0 : 4}px)`
    };

    for (let step = 1; step <= numberOfSteps; step++) {
      const stepDotStyle = {
        // marginLeft: 160 * (step - 1),
        opacity: step <= currentStep ? 1 : 0.5
      };
      stepDots.push(<StepDot style={stepDotStyle} />);
    }

    progressIndicator.push(
      <TotalBar>
        <ProgressBar style={progressBarStyle} />
        {stepDots}
      </TotalBar>
    );

    return progressIndicator;
  };

  drawStepTracker = numberOfSteps => {
    const { currentStep } = this.state;
    let stepTracker = [];
    let steps = [];

    this.drawProgressIndicator(numberOfSteps).map(i => {
      return stepTracker.push(i);
    });

    for (let step = 1; step <= numberOfSteps; step++) {
      steps.push(
        <StepLink
          key={step}
          style={{ opacity: step > currentStep ? 0.5 : 1 }}
          className={step === currentStep && "currentStep"}
          onClick={() => {
            this.updateCurrentStep(step);
          }}
        >
          Step {step}
        </StepLink>
      );
    }

    stepTracker.push(<StepLinkContainer>{steps}</StepLinkContainer>);

    return stepTracker;
  };

  updateCurrentStep = step => {
    this.setState({ currentStep: step });
  };

  render() {
    const { numberOfSteps } = this.props;

    return (
      <StepTrackerContainer>
        {this.drawStepTracker(numberOfSteps)}
      </StepTrackerContainer>
    );
  }
}

export default StepTracker;
