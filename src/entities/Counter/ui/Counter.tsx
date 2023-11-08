import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = (props: CounterProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div className={classNames('', {}, [className])}>
            <h3 data-testid="value-title">
                {counterValue}
            </h3>
            <Button data-testid="increment-btn" theme={ButtonTheme.OUTLINE} onClick={increment}>
                +
            </Button>
            <Button data-testid="decrement-btn" theme={ButtonTheme.OUTLINE} onClick={decrement}>
                -
            </Button>
        </div>

    );
};
