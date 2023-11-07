import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { CounterShema } from '../../types/counterShema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, (counter: CounterShema) => counter.value);
