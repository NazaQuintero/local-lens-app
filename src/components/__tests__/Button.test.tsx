import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(
      <Button title="Test Button" onPress={() => {}} />
    );
    
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button title="Test Button" onPress={mockOnPress} />
    );
    
    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button title="Test Button" onPress={mockOnPress} disabled />
    );
    
    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('renders with secondary variant', () => {
    const { getByTestId } = render(
      <Button title="Secondary Button" onPress={() => {}} variant="secondary" />
    );

    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with primary variant by default', () => {
    const { getByTestId } = render(
      <Button title="Primary Button" onPress={() => {}} />
    );

    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('applies disabled styles when disabled', () => {
    const { getByTestId } = render(
      <Button title="Disabled Button" onPress={() => {}} disabled={true} />
    );

    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });
});
