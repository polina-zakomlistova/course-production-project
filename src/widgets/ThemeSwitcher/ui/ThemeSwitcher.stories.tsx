import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
    args: {

    }
};

export const PrimaryDark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
