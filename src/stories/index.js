import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Home anim', module).add('Button Search', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

storiesOf('Result', module).add('Card with text', () => (
  <CardGroup>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </CardText>
        <Button>Choose</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </CardText>
        <Button>Choose</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </CardText>
        <Button>Choose</Button>
      </CardBody>
    </Card>
  </CardGroup>
));

storiesOf('Form', module).add('Button Search', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

storiesOf('Choice', module).add('Button Search', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));
storiesOf('');
