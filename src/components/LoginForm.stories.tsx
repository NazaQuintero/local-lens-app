import type { Meta, StoryObj } from '@storybook/react-native';
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
    onSubmit: () => {},
  },
  parameters: {
    notes: 'Formulario de login con validación y interaction tests.',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyForm: Story = {
  parameters: {
    notes: 'Formulario vacío - intenta enviar para ver las validaciones.',
  },
};

export const ValidSubmission: Story = {
  parameters: {
    notes: 'Llena el formulario con datos válidos y envía para ver la acción en el panel.',
  },
};

export const InvalidEmail: Story = {
  parameters: {
    notes: 'Llena con email inválido para ver la validación de email.',
  },
};

export const ShortPassword: Story = {
  parameters: {
    notes: 'Llena con contraseña corta para ver la validación de longitud.',
  },
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    notes: 'Estado de carga - el botón está deshabilitado y muestra "Cargando...".',
  },
};

export const CompleteFlow: Story = {
  parameters: {
    notes: 'Prueba el flujo completo: formulario vacío → datos inválidos → datos válidos → envío exitoso.',
  },
};
