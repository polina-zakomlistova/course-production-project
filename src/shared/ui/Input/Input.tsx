import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    name: string;
    value?: string;
    onChange?: (value:string)=> void;
    label?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label = '',
        name,
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => (
        onChange?.(e.target.value)
    );

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <label className={cls.label} htmlFor={name} data-testid="input-label">
                {label}
                <input
                    name={name}
                    id={name}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    data-testid="input"
                />
            </label>

        </div>

    );
});
