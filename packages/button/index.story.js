import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

const t = {
  prosp: 'tot'
}
storiesOf('Button', module)
  .add('default', () => <Button label="yoip">text to pass ok </Button>)
