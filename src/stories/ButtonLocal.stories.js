import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonLocal from '../components/ButtonLocal';

export const text = 'Button';

export const actions = {
	onClick: action('onClick'),
};

storiesOf('Buttons Local', module)
	.add('default', () => <ButtonLocal text={text} {...actions} />)