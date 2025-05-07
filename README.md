# Employees FrontEnd

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
front-employyes/
├── .gitignore
├── [eslint.config.js](http://_vscodecontentref_/0)
├── [index.html](http://_vscodecontentref_/1)
├── [package.json](http://_vscodecontentref_/2)
├── [README.md](http://_vscodecontentref_/3)
├── [vite.config.js](http://_vscodecontentref_/4)
├── public/
│   └── vite.svg
├── src/
│   ├── [App.jsx](http://_vscodecontentref_/5)
│   ├── [main.jsx](http://_vscodecontentref_/6)
│   ├── components/
│   │   ├── [EmptyState.jsx](http://_vscodecontentref_/7)
│   │   ├── [MainContext.jsx](http://_vscodecontentref_/8)
│   │   ├── [Pagination.jsx](http://_vscodecontentref_/9)
│   │   ├── [SearchInput.jsx](http://_vscodecontentref_/10)
│   │   ├── [Sidebar.jsx](http://_vscodecontentref_/11)
│   │   ├── EmployeeTable/
│   │   │   ├── [columns.jsx](http://_vscodecontentref_/12)
│   │   │   ├── [EmployeeTable.jsx](http://_vscodecontentref_/13)
│   │   │   ├── [TableBody.jsx](http://_vscodecontentref_/14)
│   │   │   └── [TableHeader.jsx](http://_vscodecontentref_/15)
│   │   └── TopBar/
│   │       ├── [TopBar.jsx](http://_vscodecontentref_/16)
│   │       └── [TopBar.module.css](http://_vscodecontentref_/17)
│   ├── context/
│   │   └── [EmployeeContext.jsx](http://_vscodecontentref_/18)
│   ├── services/
│   │   └── [employeeService.js](http://_vscodecontentref_/19)
│   ├── styles/
│   │   ├── [MainContext.module.css](http://_vscodecontentref_/20)
│   │   ├── [Sidebar.module.css](http://_vscodecontentref_/21)
│   │   └── [variables.scss](http://_vscodecontentref_/22)
│   └── utils/
│       └── [employeeUtils.js](http://_vscodecontentref_/23)
