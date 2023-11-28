import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: AvatarImg,
    alt: 'Аватар',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
    alt: 'Аватар',
};

export const Size = Template.bind({});
Size.args = {
    src: AvatarImg,
    alt: 'Аватар',
    size: 300,
};
