import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

storiesOf("Home anim", module).add("Button Search", () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

storiesOf("Form", module).add("Button Search", () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

storiesOf("Result", module).add("Button Search", () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

storiesOf("Choice", module).add("Button Search", () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));
storiesOf("");
