import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, StateSchemaKeys, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    StateSchemaKeys,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
