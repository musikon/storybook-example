import React from 'react';
import {addDecorator, storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button as ButtunAnt } from 'antd';
import Button from '../components/ButtonLocal'
import { withInfo } from '@storybook/addon-info';
import { linkTo } from '@storybook/addon-links'

export const text = 'Button';

export const actions = {
	onClick: action('onClick'),
};

storiesOf('Buttons Example', module)
	.addDecorator(withInfo)
	.addParameters({
		info: { inline: true, header: false }
	})
	.add('primary', () => <ButtunAnt {...actions} type="primary">primary</ButtunAnt>)
	.add('Local button', () => <Button {...actions} text="Local button" />)
	.add('dashed', () => <ButtunAnt {...actions} type="dashed">dashed</ButtunAnt>)
	.add('danger', () => <ButtunAnt {...actions} type="danger">danger</ButtunAnt>)
	.add('link', () => <ButtunAnt onClick={linkTo('Buttons', 'dashed')} type="link">link to dashed</ButtunAnt>);
