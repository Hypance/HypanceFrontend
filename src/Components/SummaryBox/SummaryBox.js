import Button from "react-bootstrap/Button";

import React from "react";

const SummaryBox = () => {
  return (
    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4 ..."></div>
      <div class="col-end-7 col-span-2 ...">
        <div class="flex justify-center">
          <div class=" bg-white max-w-sm">
            <div class="p-6">
              <Button variant="primary">Back to Strategies</Button>{" "}
              <h1
                class="text-gray-900 text-xl mb-2 mt-14 font-bold"
                style={{ fontFamily: "Space Grotesk" }}
              >
                Create Strategy Wizard
              </h1>
              <h5
                class="text-gray-900 text-md mt-5  mb-2 font-bold "
                style={{ fontFamily: "Space Grotesk" }}
              >
                Summary
              </h5>
              <p class="text-gray-500 text-base mb-4">
                Enter the 4-digit code that we have sent to your phone number,
                +62 8231234231
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
