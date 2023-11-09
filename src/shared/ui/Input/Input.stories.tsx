import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    name: 'input',
    children: 'Text',
};

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
    name: 'inputDark',
    children: 'Text',
};
PrimaryTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryWithLabel = Template.bind({});
PrimaryWithLabel.args = {
    children: 'Text',
    name: 'input',
    label: 'Label',
};

export const PrimaryWithLabelDark = Template.bind({});
PrimaryWithLabelDark.args = {
    children: 'Text',
    name: 'inputDark',
    label: 'Label',
};
PrimaryWithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];
