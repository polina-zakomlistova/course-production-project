import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
    test('Test render', () => {
        render(<Input label="test" name="input" />);
        expect(screen.getByText('test')).toBeInTheDocument();
        expect(screen.getByTestId('input-label')).toBeInTheDocument();
        expect(screen.getByTestId('input')).toBeInTheDocument();
    });
});
