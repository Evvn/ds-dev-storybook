import React from "react";
import styled from "styled-components";
import DatePicker from "react-date-picker";
import ChevronLeft from "../Icons/chevron-left-12px.svg";
import ChevronRight from "../Icons/chevron-right-12px.svg";
import { ReactComponent as CalendarIcon } from "../Icons/calendar-16px.svg";

const DateCont = styled.div`
  .react-date-picker {
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

  .react-date-picker__inputGroup__input {
    &:focus {
      outline: none;
    }
  }

  .react-date-picker__wrapper {
    border: none;
  }

  .react-date-picker__button {
    padding: 0;
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

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  onChange = date => this.setState({ date });

  render() {
    const { disabled, labelText, id } = this.props;
    const style = {};
    disabled && (style["opacity"] = ".5");

    return (
      <DateCont>
        <InputLabel htmlFor={id}>{labelText}</InputLabel>
        <DatePicker
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
        />
      </DateCont>
    );
  }
}

export default DateInput;
