import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer,
        login: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootRedusers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
