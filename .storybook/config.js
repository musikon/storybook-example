import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import { addReadme } from 'storybook-readme';
import 'antd/dist/antd.less';

const styles = {
	padding: '20px 40px',
};

const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(CenterDecorator);
addDecorator(addReadme);

const req = requireContext('../src/stories', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
