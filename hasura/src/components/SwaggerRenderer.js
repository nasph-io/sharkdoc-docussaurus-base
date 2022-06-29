import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"

export default function SwaggerRenderer() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const queryParams = new URLSearchParams(window.location.search);

        const swagger = queryParams.get("swagger");

        const url = new URL("", window.location);

        const hostname = `${url.protocol}//${url.hostname}:${url.port}`;

        console.log("Full API ==>" + `${hostname}${swagger}`);

        console.log("Swagger: " + swagger);

        return <SwaggerUI url={`${hostname}${swagger}`} />;
      }}
    </BrowserOnly>
  );
};

