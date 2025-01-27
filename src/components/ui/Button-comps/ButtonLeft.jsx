import React, { useState } from "react";
import { BoxComp } from "./BoxComp";
import { Text } from "./Text";
import { Padding } from "./Padding";

import { Border } from "./Border";
import { Shadow } from "./Shadow";
import { Color } from "./Color";

export default function ButtonLeft({ className }) {
  return (
    <div
      className={`w-[50%] border-r-2 h-[87vh] border-gray-400/20 grid sm:px-12 px-2 py-8 ${className}`}
    >
      <div className="mx-auto">
        <h2 className="text-xl mb-4">
          Use the controls below to style the component on your right.
        </h2>
        <h3 className="mb-13">Click on "Get CSS" when you're done.</h3>
        <div className="flex flex-col gap-5">
          <Text />
          <Padding />
          <Color />
          <Border />
          <Shadow />
        </div>
      </div>
    </div>
  );
}
