import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const Lover = ({ name, image, hairColor, eyeColor }) => (
  <Grid doubling columns={5}>
    <Grid.Column>
      <Card
        image={image}
        header={name}
        meta={hairColor}
        description={eyeColor}
      />
    </Grid.Column>
  </Grid>
);

export default Lover;
