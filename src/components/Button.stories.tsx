import type { Meta, StoryObj } from '@storybook/react-native';
import { fn, expect, userEvent } from 'storybook/test';
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
    onPress: fn(),
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
  play: async ({ canvas, args }) => {
    const button = canvas.getByTestId('button');
    await userEvent.click(button);
    expect(args.onPress).toHaveBeenCalledTimes(1);
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
  play: async ({ canvas, args }) => {
    const button = canvas.getByTestId('button');
    await userEvent.click(button);
    expect(args.onPress).not.toHaveBeenCalled();
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
      <Button title="Primary" variant="primary" onPress={fn()} />
      <Button title="Secondary" variant="secondary" onPress={fn()} />
      <Button title="Disabled Primary" variant="primary" disabled onPress={fn()} />
      <Button title="Disabled Secondary" variant="secondary" disabled onPress={fn()} />
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
  play: async ({ canvas, args, step }) => {
    await step('Press button multiple times', async () => {
      const button = canvas.getByTestId('button');
      
      await userEvent.click(button);
      expect(args.onPress).toHaveBeenCalledTimes(1);
      
      await userEvent.click(button);
      expect(args.onPress).toHaveBeenCalledTimes(2);
      
      await userEvent.click(button);
      expect(args.onPress).toHaveBeenCalledTimes(3);
    });
    
    await step('Verify button is still functional', async () => {
      const button = canvas.getByTestId('button');
      expect(button).toBeTruthy();
    });
  },
  parameters: {
    notes: 'Este test verifica que el botón puede ser presionado múltiples veces y mantiene su funcionalidad.',
  },
};
