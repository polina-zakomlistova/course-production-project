import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    alt: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className, src, alt, size = 100,
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            src={src}
            alt={alt}
            style={styles}
        />

    );
});
