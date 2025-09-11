// Simple setup for Jest
global.__DEV__ = true;
global.__fbBatchedBridgeConfig = {};

// Mock React Native modules
jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => ({}));
jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => ({
  get: jest.fn(() => ({
    getConstants: jest.fn(() => ({})),
  })),
  getEnforcing: jest.fn(() => ({
    getConstants: jest.fn(() => ({})),
  })),
}));

// Mock Platform
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn((obj) => obj.ios || obj.default),
}));

// Mock Dimensions
jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn(() => ({ width: 375, height: 812 })),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

// Mock PixelRatio
jest.mock('react-native/Libraries/Utilities/PixelRatio', () => ({
  get: jest.fn(() => 2),
  getFontScale: jest.fn(() => 1),
  getPixelSizeForLayoutSize: jest.fn((size) => size * 2),
  roundToNearestPixel: jest.fn((size) => Math.round(size)),
}));

// Mock StyleSheet
jest.mock('react-native/Libraries/StyleSheet/StyleSheetExports', () => ({
  roundToNearestPixel: jest.fn((size) => Math.round(size)),
}));

jest.mock('react-native/Libraries/StyleSheet/StyleSheet', () => ({
  create: jest.fn((styles) => styles),
  flatten: jest.fn((style) => style),
  absoluteFill: {},
  absoluteFillObject: {},
  hairlineWidth: 1,
}));

// Mock the main React Native module
jest.mock('react-native', () => {
  const React = require('react');
  
  const mockStyleSheet = {
    create: jest.fn((styles) => styles),
    flatten: jest.fn((style) => style),
    absoluteFill: {},
    absoluteFillObject: {},
    hairlineWidth: 1,
  };

  const mockDimensions = {
    get: jest.fn(() => ({ width: 375, height: 812 })),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };

  const mockPixelRatio = {
    get: jest.fn(() => 2),
    getFontScale: jest.fn(() => 1),
    getPixelSizeForLayoutSize: jest.fn((size) => size * 2),
    roundToNearestPixel: jest.fn((size) => Math.round(size)),
  };

  const mockPlatform = {
    OS: 'ios',
    select: jest.fn((obj) => obj.ios || obj.default),
  };

  const TouchableOpacity = React.forwardRef(({ children, onPress, disabled, testID, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onPress) {
        onPress();
      }
    };
    
    return React.createElement('TouchableOpacity', {
      ...props,
      onPress: handlePress,
      disabled,
      testID,
      ref,
    }, children);
  });

  const Text = React.forwardRef(({ children, ...props }, ref) => {
    return React.createElement('Text', { ...props, ref }, children);
  });

  return {
    StyleSheet: mockStyleSheet,
    Dimensions: mockDimensions,
    PixelRatio: mockPixelRatio,
    Platform: mockPlatform,
    TouchableOpacity,
    Text,
  };
});

require('@testing-library/jest-native/extend-expect');
