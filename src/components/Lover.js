import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const Lover = ({ name, image, hairColor, eyeColor }) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={image} />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          My hair are: {hairColor} and my eyes are {eyeColor}
        </Card.Meta>
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
);

export default Lover;
