import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Sit debet platonem diam nonumes graece. Dicta eos delectus eripuit luctus viverra propriae iusto morbi. Nulla ut fusce finibus eos menandri in ludus. Semper mazim veri dolore maluisset. Dicant tibique repudiandae persequeris lacus voluptatibus consetetur saepe meliore. Delicata viris vel odio neque simul condimentum eam graeco solet. Elit harum offendit veritus idque. Non id iaculis ex veniam. Interdum tempor euismod eam fringilla volumus eruditi graeci convenire vehicula. Dapibus maiorum maiestatis euismod consequat nonumes.',
    isOpen: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Sit debet platonem diam nonumes graece. Dicta eos delectus eripuit luctus viverra propriae iusto morbi. Nulla ut fusce finibus eos menandri in ludus. Semper mazim veri dolore maluisset. Dicant tibique repudiandae persequeris lacus voluptatibus consetetur saepe meliore. Delicata viris vel odio neque simul condimentum eam graeco solet. Elit harum offendit veritus idque. Non id iaculis ex veniam. Interdum tempor euismod eam fringilla volumus eruditi graeci convenire vehicula. Dapibus maiorum maiestatis euismod consequat nonumes.',
    isOpen: true,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
