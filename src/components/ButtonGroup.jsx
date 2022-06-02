import React from "react";

import { Button, ButtonGroup } from "react-bootstrap";

const BtnGroup = (props) => {
  return (
    <ButtonGroup size="lg" className="mb-2">
      <Button variant="success" onClick={props.onClick}> Pessoa Física </Button>
      <Button variant="secondary" onClick={props.onClick}> Pessoa Jurídica </Button>
    </ButtonGroup>
  );
};

export default BtnGroup;
