import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginState = useSelector(getLoginState);
    const {
        password, username, isLoading, error,
    } = loginState;

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogInClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неправильный пароль или логин')} theme={TextTheme.ERROR} />}
            <Input
                name="username"
                className={cls.input}
                label={t('username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                name="password"
                className={cls.input}
                label={t('password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.login_btn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLogInClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
