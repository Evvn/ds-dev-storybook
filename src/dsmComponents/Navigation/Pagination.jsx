import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { ReactComponent as ChevronLeft12 } from "../Icons/chevron-left-12px.svg";
import { ReactComponent as ChevronRight12 } from "../Icons/chevron-right-12px.svg";

const PaginationContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;

const PageNumber = styled.a.attrs({ className: "font-body-2" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;

  &.current-page {
    background-color: ${props => props.theme.colorPaprika15};
    font-family: "Muli-Bold";
  }

  &:hover:not(.current-page, .placeholder) {
    background-color: ${props => props.theme.colorPaprika5};
  }
`;

const ChevronCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

class Pagination extends React.Component {
  state = {
    currentPage: 1
  };

  createPages = numberOfPages => {
    const { currentPage } = this.state;
    let pages = [];

    if (numberOfPages > 10) {
      let cutOffCounter = currentPage > 5 ? currentPage + 4 : 9;
      let firstPage = currentPage > 5 ? currentPage - 4 : 1;

      for (let i = firstPage; i < cutOffCounter; i++) {
        pages.push(
          <PageNumber
            className={i === currentPage ? "current-page" : ""}
            onClick={() => {
              this.setPage(i);
            }}
          >
            {i}
          </PageNumber>
        );
      }

      currentPage + 4 <= numberOfPages &&
        pages.push(<PageNumber className={"placeholder"}>...</PageNumber>);

      pages.push(
        <PageNumber
          className={numberOfPages === currentPage ? "current-page" : ""}
          onClick={() => {
            this.setPage(numberOfPages);
          }}
        >
          {numberOfPages}
        </PageNumber>
      );
    } else {
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(
          <PageNumber
            className={i === currentPage ? "current-page" : ""}
            onClick={() => {
              this.setPage(i);
            }}
          >
            {i}
          </PageNumber>
        );
      }
    }
    return pages;
  };

  setPage = pageNumber => {
    const { currentPage } = this.state;

    if (pageNumber === currentPage) {
      return;
    } else {
      this.setState({
        currentPage: pageNumber
      });
    }
  };

  onChevronClick = direction => {
    const { currentPage } = this.state;
    const { numberOfPages } = this.props;

    if (direction === "pageDown" && currentPage - 1 >= 1) {
      this.setState({
        currentPage: currentPage - 1
      });
    } else if (direction === "pageUp" && currentPage + 1 <= numberOfPages) {
      this.setState({
        currentPage: currentPage + 1
      });
    } else {
      return;
    }
  };

  render() {
    const { currentPage } = this.state;
    const { numberOfPages } = this.props;
    let chevronLeftOpacity = 1;
    let chevronRightOpacity = 1;

    if (currentPage === 1) {
      chevronLeftOpacity = 0.5;
    } else if (currentPage === numberOfPages) {
      chevronRightOpacity = 0.5;
    }

    const chevronLeftStyle = {
      opacity: chevronLeftOpacity
    };
    const chevronRightStyle = {
      opacity: chevronRightOpacity
    };

    return (
      <PaginationContainer>
        <ChevronCont
          style={chevronLeftStyle}
          onClick={() => {
            this.onChevronClick("pageDown");
          }}
        >
          <ChevronLeft12 />
        </ChevronCont>
        {this.createPages(numberOfPages)}
        <ChevronCont
          style={chevronRightStyle}
          onClick={() => {
            this.onChevronClick("pageUp");
          }}
        >
          <ChevronRight12 />
        </ChevronCont>
      </PaginationContainer>
    );
  }
}

export default withTheme(Pagination);
