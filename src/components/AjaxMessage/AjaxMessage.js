import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import "./ajaxMessage.css";

const ResultWrapper = styled.div`
  height: 60px;
  margin-top: -10px;
  margin-bottom: 20px;
  position: relative;
`;
const ResultMessage = styled.div`
  background: rgba(9, 103, 185, 0.7);
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
`;
const StyledText = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  padding: 0 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-size: 0.9em;
  @media (min-width: 768px) {
    font-size: 1em;
  }

  a {
    color: white;
    font-weight: 700;
    text-decoration: underline;
  }
  a:hover {
    color: #ccb821;
  }
`;

export function AjaxMessage(props) {
  return (
    <ResultWrapper>
      <CSSTransition
        in={props.in}
        classNames="slideUp"
        timeout={300}
        unmountOnExit
      >
        <ResultMessage>
          {props.dangerouslySetInnerHTML && (
            <StyledText
              dangerouslySetInnerHTML={{
                __html: props.dangerouslySetInnerHTML
              }}
            />
          )}
        </ResultMessage>
      </CSSTransition>
    </ResultWrapper>
  );
}
