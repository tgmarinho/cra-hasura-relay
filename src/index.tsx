import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import "./index.css";

import environment from "./environment";

import Members from "./modules/members/Members";

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={"loading..."}>
      <Members />
    </Suspense>
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
