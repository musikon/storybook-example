import React from 'react';
import { storiesOf  } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import readme from '../components/README.md'

export const text = 'Button';

export const actions = {
	onClick: action('onClick'),
};

storiesOf('Buttons', module)
	.addParameters({
		readme: {
			// override docs
			content: readme,
			sidebar: readme,
		},
	})
	.add('primary', () => (
		<div>
			<Button type="primary">primary</Button>
		</div>))
	.add('default', () => <Button {...actions}>default</Button>)
	.add('dashed', () => <Button {...actions} type="dashed">dashed</Button>)
	.add('danger', () => <Button {...actions} type="danger">danger</Button>)
	.add('link', () => <Button {...actions} type="link">link</Button>);