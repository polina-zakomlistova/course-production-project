import { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
    args: {}
};
export const Dark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};
