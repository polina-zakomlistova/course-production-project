import { classNames } from 'shared/lib/classNames/classNames';
import {
    ReactNode, useRef, useState, MouseEvent, useEffect, useCallback,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
}

const ANIMATION_DELAY = 200;

export const Modal = ({
    className, children, isOpen, onClose,
}: ModalProps) => {
    const [isClosing, setIsCLosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const contentClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsCLosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsCLosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={contentClickHandler}>
                        {children}
                    </div>

                </div>
            </div>
        </Portal>

    );
};
