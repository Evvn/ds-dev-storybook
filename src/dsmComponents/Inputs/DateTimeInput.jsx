import React from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import ChevronLeft from "../Icons/chevron-left-12px.svg";
import ChevronRight from "../Icons/chevron-right-12px.svg";
import { ReactComponent as CalendarIcon } from "../Icons/calendar-16px.svg";

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

const DateTimeCont = styled.div`
  .react-datetime-picker {
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

  .react-datetime-picker__inputGroup__input {
    &:focus {
      outline: none;
    }
  }

  .react-datetime-picker__wrapper {
    border: none;
  }

  .react-datetime-picker__button {
    padding: 0;
  }

  /* padding between date and time */
  .react-datetime-picker__inputGroup__hour {
    margin-left: 25px;
  }

  .react-calendar {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 0 4px 0 rgba(0, 0, 0, 0.05),
      0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    border: none;
    margin-top: 4px;
    padding: 18px 16px;
    width: 312px;
    color: ${props => props.theme.colorCardomomText};
  }

  /* day tiles */
  .react-calendar__tile {
    font-size: 12px;
    border-radius: 3px;

    /* hovered day (also enabled) */
    &:enabled:hover,
    &:enabled:focus {
      background-color: ${props => props.theme.colorPaprika5};
    }
  }

  /* current day */
  .react-calendar__tile--now {
    abbr {
      color: ${props => props.theme.colorPaprika};
      font-family: "Muli-Bold";
    }
  }

  /* active/selected day */
  .react-calendar__tile--active {
    background-color: ${props => props.theme.colorPaprika15};
    
    /* hovered day (also enabled) */
    &:enabled:hover,
    &:enabled:focus {
      background-color: ${props => props.theme.colorPaprika15};
    }

    abbr {
      /* color: ${props => props.theme.colorPaprika}; */
      font-family: "Muli-Bold";
    }
  }

  /* weekend days */
  .react-calendar__month-view__days__day--weekend {
    color: inherit;
  }

  /* next/prev month days */ 
  .react-calendar__month-view__days__day--neighboringMonth {
    abbr {
      color: ${props => props.theme.colorChia}
    }
  }

  /* day labels */
  .react-calendar__month-view__weekdays__weekday {
    /* font-size: ${props => props.theme.fontCaption1FontSize}; */
    line-height: ${props => props.theme.fontCaption1LineHeight};
    text-align: ${props => props.theme.fontCaption1TextAlign};
    color: ${props => props.theme.fontCaption1Color};
    letter-spacing: ${props => props.theme.fontCaption1LetterSpacing};
    font-style: ${props => props.theme.fontCaption1FontStyle};
    font-weight: ${props => props.theme.fontCaption1FontWeight};
    font-family: ${props => props.theme.fontCaption1FontFamily};

    abbr {
      font-size: 12px;
      text-decoration: none;
    }
  }

  /* month labels, current month */
  .react-calendar__tile--hasActive {
    background-color: #ffffff;
  }

  /* Year nav << / >> */
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__navigation__arrow,
  .react-calendar__navigation__label {
    border-radius: 3px;

    &:disabled {
      background-color: white;
    }

    &:enabled:hover,
    &:enabled:focus {
      background-color: ${props => props.theme.colorPaprika5};
    }
  }

  .react-calendar__navigation {
    margin-bottom: 0;
  }
  
  .react-calendar__navigation__prev-button {
    background-image: url(${ChevronLeft});
  }

  .react-calendar__navigation__next-button {
    background-image: url(${ChevronRight});
  }

  .react-calendar__navigation__label {
    height: 38px;
  }

  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    width: 28px;
    height: 38px;
  }

`;

const InputLabel = styled.label.attrs({ className: "font-caption-1" })`
  display: block;
`;

class DateTimeInput extends React.Component {
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
      .querySelector(".react-datetime-picker__inputGroup__hour")
      .addEventListener("click", this.toggleMultiSelect);
    document
      .querySelector(".react-datetime-picker__inputGroup__minute")
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
      <DateTimeCont>
        <InputLabel htmlFor={id}>{labelText}</InputLabel>
        <DateTimePicker
          id={id}
          onChange={this.onChange}
          // value={this.state.date}
          disableClock={true}
          calendarIcon={<CalendarIcon />}
          clearIcon={null}
          minDetail={"year"}
          dayPlaceholder={"DD"}
          monthPlaceholder={"MM"}
          yearPlaceholder={"YYYY"}
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
      </DateTimeCont>
    );
  }
}

export default DateTimeInput;
