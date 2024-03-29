import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';
import { counterReducer } from './model/slice/CounterSlice';

export {
    Counter,
    CounterSchema,
    counterReducer,
};
