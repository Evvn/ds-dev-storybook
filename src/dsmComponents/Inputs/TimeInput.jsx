import React from "react";
import styled from "styled-components";
import TimePicker from "react-time-picker";
import { ReactComponent as CalendarIcon } from "../Icons/calendar-16px.svg";

const TimeCont = styled.div`
  .react-time-picker {
    height: 36px;
    width: 240px;
    border: 1px solid #737373;
    border-radius: 3px;
    outline: none;
    padding: 8px;
    margin: 4px 0;
    transition: 200ms ease-in-out all;

    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colorPaprika5};
    }

    &:active,
    &:focus {
      border-color: ${props => props.theme.colorCayenneActive};
    }
  }

  .react-time-picker__inputGroup__input {
    &:focus {
      outline: none;
    }
  }

  .react-time-picker__wrapper {
    border: none;
  }

  .react-time-picker__button {
    padding: 0;
  }
`;

const TimeSelectDropdown = styled.div`
  margin-top: 4px;
  border-radius: 3px;
  width: 240px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.05),
    0 2px 10px 0 rgba(0, 0, 0, 0.05);
`;

const TimeSelectOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background-color: none;
  border: 1px solid transparent;
  padding: 8px;

  &:focus {
    outline: none;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.colorPaprikaActive};
  }

  &:hover {
    background-color: ${props => props.theme.colorSalt};
  }

  &:active {
    border: none;
    background-color: ${props => props.theme.colorFlour};
  }
`;

const InputLabel = styled.label.attrs({ className: "font-caption-1" })`
  display: block;
`;

class TimeInput extends React.Component {
  constructor(props) {
    super(props);
    const { startTime, endTime, minuteInterval } = this.props;

    this.state = {
      dropdownOpen: false,
      date: new Date(),
      times: this.getTimes(startTime, endTime, minuteInterval)
    };
  }

  componentDidMount = () => {
    document
      .querySelector(".react-time-picker__inputGroup__hour")
      .addEventListener("click", this.toggleMultiSelect);
    document
      .querySelector(".react-time-picker__inputGroup__minute")
      .addEventListener("click", this.toggleMultiSelect);
  };

  getTimes = (startTime, endTime, minuteInterval) => {
    let start = new Date();
    let end = new Date();

    start.setHours(startTime.split(":")[0]);
    start.setMinutes(startTime.split(":")[1]);
    start.setSeconds(0);
    end.setHours(endTime.split(":")[0]);
    end.setMinutes(endTime.split(":")[1]);
    end.setSeconds(0);

    let times = [this.concatTime(start)];

    while (start.getHours() < end.getHours()) {
      start = this.addMinutes(start, Number(minuteInterval));
      times.push(this.concatTime(start));
    }

    times.push(this.concatTime(end));

    return times;
  };

  addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  concatTime = time => {
    let minutes = time.getMinutes();
    if (minutes === 0) {
      minutes = "00";
    }
    return time.getHours() + ":" + minutes;
  };

  toggleMultiSelect = e => {
    const { dropdownOpen } = this.state;
    !dropdownOpen &&
      document.addEventListener("mousedown", this.handleOutsideClick);
    this.setState({ dropdownOpen: !dropdownOpen });
  };

  handleOutsideClick = () => {
    this.toggleMultiSelect();
    document.removeEventListener("mousedown", this.handleOutsideClick);
  };

  onChange = date => this.setState({ date });

  render() {
    const { disabled, labelText, id } = this.props;
    const { times, dropdownOpen, selectedTime } = this.state;
    const style = {};
    disabled && (style["opacity"] = ".5");

    console.log(selectedTime);

    return (
      <TimeCont>
        <InputLabel htmlFor={id}>{labelText}</InputLabel>
        <TimePicker
          id={id}
          onChange={this.onChange}
          // value={this.state.date}
          disableClock={true}
          clearIcon={null}
          hourPlaceholder={"HH"}
          minutePlaceholder={"MM"}
          timeValue={"13:13:13"}
        />
        {dropdownOpen && (
          <TimeSelectDropdown>
            {times.map(time => {
              return (
                <TimeSelectOption
                  className="font-body-1"
                  onClick={() => {
                    this.setState({ dropdownOpen: false, selectedTime: time });
                  }}
                >
                  {time}
                </TimeSelectOption>
              );
            })}
          </TimeSelectDropdown>
        )}
      </TimeCont>
    );
  }
}

export default TimeInput;
