import type { Meta, StoryObj } from '@storybook/react';

import  NotFoundPage  from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof NotFoundPage> = {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Primary: Story = {
    args: {

    }
};

export const PrimaryDark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
