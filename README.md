# Prueba Mobile Gestión

Una aplicación móvil desarrollada con Expo React Native, Storybook y testing completo.

## 🚀 Características

- **Expo React Native** con TypeScript
- **Storybook** para desarrollo de componentes aislados
- **Testing** con Jest y React Native Testing Library
- **Docker** para desarrollo y CI/CD
- **GitHub Actions** para integración continua

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

# Iniciar en Web
npm run web
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

## 🐳 Docker

### Desarrollo
```bash
# Iniciar la aplicación en Docker
docker-compose up app

# Ejecutar tests en Docker
docker-compose run --rm test

# Iniciar Storybook en Docker
docker-compose up storybook
```

## 📱 Uso de Storybook

Para ver los componentes en Storybook:

1. Cambia `SHOW_STORYBOOK = true` en `App.tsx`
2. Ejecuta `npm run storybook`
3. Abre la aplicación en tu dispositivo/emulador

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
.github/workflows/       # GitHub Actions
```

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env` con:
```
EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
```

### Jest
La configuración de Jest está en `jest.config.js` y `jest.setup.js`.

### Storybook
La configuración está en `.storybook/main.ts`.

## 🚀 CI/CD

El proyecto incluye GitHub Actions que:
- Ejecutan tests en cada push/PR
- Construyen Storybook
- Ejecutan tests en Docker
- Suben reportes de coverage

## 📝 Desarrollo

1. Crea componentes en `src/components/`
2. Añade stories en `*.stories.tsx`
3. Escribe tests en `__tests__/`
4. Usa Storybook para desarrollo aislado
5. Ejecuta tests antes de hacer commit

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request
