import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/react/demo';

storiesOf('Home anim', module).add('Button Search', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

storiesOf('Form', module).add('Button Search', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      Search!
    </span>
  </Button>
));

storiesOf('Result', module).add('Button Search', () => (
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
