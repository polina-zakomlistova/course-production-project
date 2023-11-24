import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
    className?: string;
    onSuccess: ()=>void
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const initialReducers: ReducersList = { login: loginReducer };

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogInClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        const isSuccess = result.meta.requestStatus === 'fulfilled';
        if (isSuccess) {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (

        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>

    );
});

export default LoginForm;
