# Frontend Employees

Este proyecto es una aplicación frontend desarrollada con **React** y **Vite** para gestionar empleados. Permite listar, buscar y paginar empleados obtenidos desde una API REST. La interfaz es responsiva y utiliza componentes reutilizables para una experiencia de usuario fluida.

## Tecnologías utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos frontend.
- **React Bootstrap**: Componentes estilizados para diseño responsivo.
- **@tanstack/react-table**: Biblioteca para la creación de tablas dinámicas.
- **Boring Avatars**: Generación de avatares personalizados.
- **SASS**: Preprocesador CSS para estilos avanzados.
- **ESLint**: Herramienta para mantener un código limpio y consistente.

## Estructura del proyecto

```plaintext
├── src/
│   ├── [App.jsx]
│   ├── [main.jsx]
│   ├── components/
│   │   ├── [EmptyState.jsx]
│   │   ├── [MainContext.jsx]
│   │   ├── [Pagination.jsx]
│   │   ├── [SearchInput.jsx]
│   │   ├── [Sidebar.jsx]
│   │   ├── EmployeeTable/
│   │   │   ├── [columns.jsx]
│   │   │   ├── [EmployeeTable.jsx]
│   │   │   ├── [TableBody.jsx]
│   │   │   └── [TableHeader.jsx]
│   │   └── TopBar/
│   │       ├── [TopBar.jsx]
│   │       └── [TopBar.module.css]
│   ├── context/
│   │   └── [EmployeeContext.jsx]
│   ├── services/
│   │   └── [employeeService.js]
│   ├── styles/
│   │   ├── [MainContext.module.css]
│   │   ├── [Sidebar.module.css]
│   │   └── [variables.scss]
│   └── utils/
│       └── [employeeUtils.js]
