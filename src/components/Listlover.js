import React from 'react';
import { ListGroup } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import Lover from './Lover';

const ListLover = ({ lovers }) => (
  <ListGroup >
    {lovers.map((lover, index) => <Lover key={index} {...lover} />)}
  </ListGroup>
);

export default ListLover;
