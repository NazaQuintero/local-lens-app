import type { Meta, StoryObj } from '@storybook/react-native';
import { fn, expect, userEvent } from 'storybook/test';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
    },
  },
  args: {
    onSubmit: fn(),
  },
  parameters: {
    notes: 'Formulario de login con validación y interaction tests.',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
  play: async ({ canvas, args }) => {
    const submitButton = canvas.getByTestId('submit-button');
    await userEvent.press(submitButton);
    expect(args.onSubmit).not.toHaveBeenCalled();
  },
};

export const ValidSubmission: Story = {
  play: async ({ canvas, args, step }) => {
    await step('Fill in valid email and password', async () => {
      const emailInput = canvas.getByTestId('email-input');
      const passwordInput = canvas.getByTestId('password-input');
      
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password123');
    });
    
    await step('Submit the form', async () => {
      const submitButton = canvas.getByTestId('submit-button');
      await userEvent.press(submitButton);
      
      expect(args.onSubmit).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  },
};

export const InvalidEmail: Story = {
  play: async ({ canvas, args, step }) => {
    await step('Fill in invalid email', async () => {
      const emailInput = canvas.getByTestId('email-input');
      const passwordInput = canvas.getByTestId('password-input');
      
      await userEvent.type(emailInput, 'invalid-email');
      await userEvent.type(passwordInput, 'password123');
    });
    
    await step('Try to submit and verify validation', async () => {
      const submitButton = canvas.getByTestId('submit-button');
      await userEvent.press(submitButton);
      
      expect(args.onSubmit).not.toHaveBeenCalled();
      expect(canvas.getByText('Email inválido')).toBeTruthy();
    });
  },
};

export const ShortPassword: Story = {
  play: async ({ canvas, args, step }) => {
    await step('Fill in email and short password', async () => {
      const emailInput = canvas.getByTestId('email-input');
      const passwordInput = canvas.getByTestId('password-input');
      
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, '123');
    });
    
    await step('Try to submit and verify validation', async () => {
      const submitButton = canvas.getByTestId('submit-button');
      await userEvent.press(submitButton);
      
      expect(args.onSubmit).not.toHaveBeenCalled();
      expect(canvas.getByText('Contraseña debe tener al menos 6 caracteres')).toBeTruthy();
    });
  },
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
  play: async ({ canvas, args }) => {
    const submitButton = canvas.getByTestId('submit-button');
    expect(submitButton).toBeTruthy();
    
    await userEvent.press(submitButton);
    expect(args.onSubmit).not.toHaveBeenCalled();
  },
};

export const CompleteFlow: Story = {
  play: async ({ canvas, args, step }) => {
    await step('Start with empty form', async () => {
      const submitButton = canvas.getByTestId('submit-button');
      await userEvent.press(submitButton);
      expect(args.onSubmit).not.toHaveBeenCalled();
    });
    
    await step('Fill invalid data and see errors', async () => {
      const emailInput = canvas.getByTestId('email-input');
      const passwordInput = canvas.getByTestId('password-input');
      
      await userEvent.type(emailInput, 'bad-email');
      await userEvent.type(passwordInput, '123');
      
      const submitButton = canvas.getByTestId('submit-button');
      await userEvent.press(submitButton);
      
      expect(args.onSubmit).not.toHaveBeenCalled();
      expect(canvas.getByText('Email inválido')).toBeTruthy();
      expect(canvas.getByText('Contraseña debe tener al menos 6 caracteres')).toBeTruthy();
    });
    
    await step('Fix data and submit successfully', async () => {
      const emailInput = canvas.getByTestId('email-input');
      const passwordInput = canvas.getByTestId('password-input');
      
      await userEvent.clear(emailInput);
      await userEvent.clear(passwordInput);
      
      await userEvent.type(emailInput, 'user@example.com');
      await userEvent.type(passwordInput, 'securepassword');
      
      const submitButton = canvas.getByTestId('submit-button');
      await userEvent.press(submitButton);
      
      expect(args.onSubmit).toHaveBeenCalledWith('user@example.com', 'securepassword');
    });
  },
  parameters: {
    notes: 'Flujo completo: formulario vacío → datos inválidos → datos válidos → envío exitoso.',
  },
};
