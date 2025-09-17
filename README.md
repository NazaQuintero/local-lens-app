# Local Lens

Una aplicación móvil desarrollada con Expo React Native y Storybook.

## 🚀 Características

- **Expo React Native** con TypeScript
- **Storybook** para desarrollo de componentes aislados
- **Testing** con Jest y React Native Testing Library

## 📦 Instalación

```bash
npm install
```

## 🛠️ Scripts Disponibles

### Desarrollo
```bash
# Iniciar la aplicación
npm start

# Iniciar en Android
npm run android

# Iniciar en iOS
npm run ios

```

### Storybook
```bash
# Iniciar Storybook
npm run storybook

# Construir Storybook estático
npm run build:storybook
```

### Testing
```bash
# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con coverage
npm run test:coverage
```

## 📱 Uso de Storybook

Para ver los componentes en Storybook:

1. Ejecuta `npm run storybook`
2. Abri la aplicación en tu dispositivo/emulador

## 🧪 Testing

Los tests están organizados en:
- `src/components/__tests__/` - Tests unitarios de componentes
- Cada componente tiene su archivo `.test.tsx`

### Ejecutar tests específicos
```bash
# Test de un componente específico
npm test Button.test.tsx

# Test con coverage
npm run test:coverage
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Button.tsx       # Componente de ejemplo
│   ├── Button.stories.tsx # Story de Storybook
│   └── __tests__/       # Tests unitarios
├── stories/             # Stories adicionales
└── ...

.storybook/              # Configuración de Storybook
```

## 🔧 Configuración

### Jest
La configuración de Jest está en `jest.config.js` y `jest.setup.js`.

### Storybook
La configuración está en `.storybook/main.ts`.
