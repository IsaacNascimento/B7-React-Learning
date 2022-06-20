import React from "react";
import { Reducer } from "../newReducers/reducer";
import { UsoRealReducer } from "../newReducers/usoReal";
import Componente from "./MainConcepts/BotaoPFePJ";
import CondionalRendering from "./MainConcepts/CondionalRendering";
import FuncState from "./MainConcepts/FuncState";
import InputState from "./MainConcepts/inputState";
import CicloVida from "./MainConcepts/modulo5/01CicloVida";
import EffectPratica from "./MainConcepts/modulo5/02EffectPratica";
import RequisicaoGET from "./MainConcepts/modulo5/03RequisicaoGET";
import JsonPlaceholder from "./MainConcepts/modulo5/04JsonPlaceholder";

import Props from "./MainConcepts/Props";
import State from "./MainConcepts/State";
import TrainingState from "./MainConcepts/TrainingState";

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
      {/* <Reducer />  */}
      <hr />
      <UsoRealReducer />
    </div>
  );
};
export default Index;
