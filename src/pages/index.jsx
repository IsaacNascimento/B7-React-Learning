import React from "react";

import { FuncState, InputState, Blog } from "./MainConcepts/baseConcepts";

import {
  Componente,
  CondionalRendering,
  State,
  TrainingState,
} from "./MainConcepts/conditionalRendering";

import {
  CicloVida,
  EffectPratica,
  RequisicaoGet,
  JsonPlaceholder,
  Reducer,
  UsoRealReducer,
  Reducer01,
} from "./MainConcepts/modulo5";

import Props from "./MainConcepts/props/Props";

const Index = () => {
  return (
    <div>
      {/* <Componente/> */}
      <hr />
      {/* <Props/> */}
      <hr />
      {/* <State/> */}
      <hr />
      {/* <FuncState/> */}
      <hr />
      {/* <CondionalRendering/>  */}
      <hr />
      {/* <TrainingState/> */}
      <hr />
      {/* <InputState/> */}
      <hr />
      {/* <CicloVida/> */}
      <hr />
      {/* <EffectPratica/> */}
      <hr />
      {/* <RequisicaoGET/> */}
      <hr />
      {/* <JsonPlaceholder /> */}
      <hr />
      <UsoRealReducer />
      {/* <JsonPlaceholder /> */}
      <hr />
      <Reducer />
    </div>
  );
};
export default Index;
