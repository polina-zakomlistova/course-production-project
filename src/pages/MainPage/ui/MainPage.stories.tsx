import type { Meta, StoryObj } from '@storybook/react';

import  MainPage  from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof MainPage> = {
    title: 'Pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
    args: {

    }
};

export const PrimaryDark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
