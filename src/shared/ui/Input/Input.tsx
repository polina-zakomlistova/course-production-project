import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    name: string;
    value?: string | number;
    onChange?: (value:string)=> void;
    label?: string;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        label = '',
        name,
        readonly,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => (
        onChange?.(e.target.value)
    );

    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <label htmlFor={name} data-testid="input-label">
                <span className={cls.label}>{label}</span>
                <input
                    name={name}
                    id={name}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    data-testid="input"
                    readOnly={readonly}
                />
            </label>

        </div>

    );
});
