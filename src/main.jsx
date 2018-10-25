//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
import reactShim from "./react-shim";
import React from "react";
import { render as _render } from "react-dom";

class LogoColors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form style={{ width: 300 }}>
        <h1>Logo Colors</h1>
      </form>
    );
  }
}

let dialog;
const getDialog = () => {
  if (dialog == null) {
    dialog = document.createElement("dialog");
    _render(<LogoColors dialog={dialog} />, dialog);
  }
  return dialog;
};

export const commands = {
  menuCommand: () => {
    document.body.appendChild(getDialog()).showModal();
  }
};
