import React from 'react';
import ReactDOM from 'react-dom';
import Board from "./modules/Board/index";
import { observe } from "./modules/Game/index";

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);