import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme{
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT= 'left'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;
    const { t } = useTranslation();

    const mods = {};

    return (
        <div className={classNames(cls.Text, mods, [className, cls[align], cls[theme]])}>
            {title && <p className={cls.title}>{title }</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
