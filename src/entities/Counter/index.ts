import { Counter } from './ui/Counter';
import type { CounterShema } from './model/types/counterShema';
import { counterReducer } from './model/slice/CounterSlice';

export {
    Counter,
    CounterShema,
    counterReducer,
};
