import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    test('LoginForm render', () => {
        render(<LoginForm />);
        expect(screen.getByLabelText('username')).toBeInTheDocument();
        expect(screen.getByLabelText('password')).toBeInTheDocument();
        expect(screen.getByText('Войти')).toBeInTheDocument();
    });
});
