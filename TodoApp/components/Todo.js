import React, {propTypes} from 'react';

const Todo = ({onClick, completed, text}) => (
  <li
    onClick={onClick}
    style = {{textDecoration: completed ? 'line-through' : 'none'}}
     >
    {text}
  </li>
)

export defaul Todo
