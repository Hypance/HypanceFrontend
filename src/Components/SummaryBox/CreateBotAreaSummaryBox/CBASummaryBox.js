import * as BS from "react-bootstrap";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function CSASummaryBox() {
  const navigate = useNavigate();

  const navigateToCreateStrategies = () => {
    navigate("/strategy");
  };

  return (
    <>
      <BS.Container>
        <BS.Row>
          <BS.Button
            onClick={navigateToCreateStrategies}
            variant="primary"
            size="lg"
            active
          >
            Back to Strategies
          </BS.Button>
        </BS.Row>
        <BS.Row>
          <h5 className="mt-5" style={{ fontFamily: "Space Grotesk" }}>
            Create Bot Wizard
          </h5>
        </BS.Row>
        <BS.Row>
          <h5
            className="text-gray-900 mt-5 mb-2 "
            style={{ fontFamily: "Space Grotesk" }}
          >
            Summary
          </h5>
          <p className="text-gray-500 text-base mb-4">
            Enter the 4-digit code that we have sent to your phone number, +62
            8231234231
          </p>
        </BS.Row>
      </BS.Container>
    </>
  );
}

export default CSASummaryBox;
