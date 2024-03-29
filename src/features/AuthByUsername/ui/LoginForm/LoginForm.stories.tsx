import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
    StoreDecorator({ login: { password: '123', username: 'admin' } })];

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [
    StoreDecorator({ login: { password: '123', username: 'admin' } }),
    ThemeDecorator(Theme.DARK),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    login: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    login: { isLoading: true },
})];
