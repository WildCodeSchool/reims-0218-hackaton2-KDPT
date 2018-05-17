import React from 'react';
import {
  Card,
  Icon,
  Button,
  extra,
  Image,
  Menu,
  activeItem,
  Header,
  Container,
  mobile
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

//
// ──────────────────────────────────────────────── I ──────────
//   :::::: N A V B A R : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//

storiesOf('UI DESIGN', module).add('NAVBAR', () => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
));

storiesOf('HOME', module).add('BG WITH PLANET', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

//
// ──────────────────────────────────────────────── I ──────────
//   :::::: C A R D  R E S U L T : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────
//

storiesOf('RESULT SECTION', module).add('Card with text', () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="/assets/images/avatar/large/steve.jpg"
        />
        <Card.Header>Jawa</Card.Header>
        <Card.Meta>Human & male</Card.Meta>
        <Card.Description>
          Do you want to be in a relationship <strong>with me</strong>?
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Accept
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="/assets/images/avatar/large/molly.png"
        />
        <Card.Header>Dark Vador</Card.Header>
        <Card.Meta>Human & male</Card.Meta>
        <Card.Description>
          Do you want to be in a relationship <strong>with me</strong>?
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Accept
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="/assets/images/avatar/large/jenny.jpg"
        />
        <Card.Header>R2D2</Card.Header>
        <Card.Meta>Droid & male</Card.Meta>
        <Card.Description>
          Do you want to be in a relationship <strong>with me</strong>?
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Accept
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
));
