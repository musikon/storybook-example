import React from 'react';
import { storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button as ButtunAnt } from 'antd';
import Button from '../components/ButtonLocal'
import { withInfo } from '@storybook/addon-info';
import { linkTo } from '@storybook/addon-links'
import { withKnobs, object, text, select } from '@storybook/addon-knobs/react';

const optionsLinkDerictory = {
	['Buttons Example']: 'Buttons Example',
	Buttons: 'Buttons',
};

const optionsTypeButton = {
	dashed: 'dashed',
	primary: 'primary',
	danger: 'danger',
	link: 'link',
};

export const actions = {
	onClick: action('onClick'),
};

storiesOf('Buttons Example', module)
	.addDecorator(withKnobs)
	.addDecorator(withInfo)
	.addParameters({
		info: { inline: true, header: false }
	})
	.add('primary', () => (
		<ButtunAnt
			{...actions}
			type={select('type', optionsTypeButton, 'primary')}
			onClick={linkTo(select('Story', optionsLinkDerictory, 'Buttons Example'), select('Target', optionsTypeButton, 'dashed'))}
		>
			{text('text', 'primary')}
		</ButtunAnt>
	))
	.add('Local button', () => <Button {...actions} text={object('task', 'Local button')} />)
	.add('dashed', () => <ButtunAnt {...actions} type="dashed">dashed</ButtunAnt>)
	.add('danger', () => <ButtunAnt {...actions} type="danger">danger</ButtunAnt>)
	.add('link', () => <ButtunAnt onClick={linkTo('Buttons', 'dashed')} type="link">link to dashed</ButtunAnt>);
