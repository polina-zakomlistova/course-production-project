import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args:{
        to:'/'
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'primary',
        theme: AppLinkTheme.PRIMARY,
    }
};
export const Secondary: Story = {
    args: {
        children: 'Secondary',
        theme: AppLinkTheme.SECONDARY,
    }
};
export const PrimaryDark: Story = {
    args: {
        children: 'primary',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
export const SecondaryDark: Story = {
    args: {
        children: 'Secondary',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
