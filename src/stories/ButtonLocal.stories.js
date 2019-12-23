import React from 'react';
import { storiesOf  } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button as ButtunAnt } from 'antd';
import Button from '../components/ButtonLocal'
import readme from '../components/README.md'
import { linkTo } from '@storybook/addon-links'

export const text = 'Button';

export const actions = {
	onClick: action('onClick'),
};

storiesOf('Buttons', module)
	.add('primary', () => <ButtunAnt {...actions} type="primary">primary</ButtunAnt>, {
		readme: {
			content: readme,
			sidebar: readme,
		},
	})
	.add('Local button', () => <Button {...actions} text="Local button" />, {
		readme: {
			content: readme,
			sidebar: readme,
		},
	})
	.add('dashed', () => <ButtunAnt {...actions} type="dashed">dashed</ButtunAnt>, {
		readme: {
			content: readme,
			sidebar: readme,
		},
	})
	.add('danger', () => <ButtunAnt {...actions} type="danger">danger</ButtunAnt>, {
		readme: {
			content: readme,
			sidebar: readme,
		},
	})
	.add('link', () => (
		<ButtunAnt
			onClick={linkTo('Buttons Example', 'danger')}
			type="link"
		>
			link
		</ButtunAnt>
	), {
		readme: {
			content: readme,
			sidebar: readme,
		},
	});
