import React from 'react'
import { storiesOf } from '@storybook/react'

import StyledButton from '.'

storiesOf('Button', module)
.add('default', () => (<div><StyledButton>dsf</StyledButton></div>));
