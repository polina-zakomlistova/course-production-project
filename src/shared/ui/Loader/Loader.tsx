import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.loadingWrapper, {}, [className])}>
        <div className={classNames(cls.loading, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>

    </div>

);
