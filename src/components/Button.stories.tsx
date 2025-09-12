import type { Meta, StoryObj } from '@storybook/react-native';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    title: 'Button',
    onPress: () => {},
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
    notes: 'Este es un componente Button reutilizable con diferentes variantes y estados.',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    title: 'This is a very long button text',
    variant: 'primary',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Button',
    variant: 'primary',
  },
  parameters: {
    notes: 'Prueba cambiar el texto, variante y estado disabled usando los controles.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <Button title="Primary" variant="primary" onPress={() => {}} />
      <Button title="Secondary" variant="secondary" onPress={() => {}} />
      <Button title="Disabled Primary" variant="primary" disabled onPress={() => {}} />
      <Button title="Disabled Secondary" variant="secondary" disabled onPress={() => {}} />
    </>
  ),
  parameters: {
    notes: 'Comparación de todas las variantes del botón en una vista.',
  },
};

export const InteractionFlow: Story = {
  args: {
    title: 'Test Interaction Flow',
    variant: 'primary',
  },
  parameters: {
    notes: 'Prueba interactiva del botón - puedes presionarlo múltiples veces para ver las acciones en el panel de acciones.',
  },
};
