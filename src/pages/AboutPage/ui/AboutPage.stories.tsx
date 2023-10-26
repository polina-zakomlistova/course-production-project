import type { Meta, StoryObj } from '@storybook/react';

import  AboutPage  from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AboutPage> = {
    title: 'Pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {
    args: {

    }
};

export const PrimaryDark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
