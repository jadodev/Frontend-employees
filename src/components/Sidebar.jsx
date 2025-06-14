import React from 'react';
import { Nav } from 'react-bootstrap';

export const Sidebar = () => {
  return (
    <aside className="bg-white border-end d-flex flex-column p-3" style={{ width: '200px' }}>
      <h2 className="text-primary mb-4">Empleados</h2>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link active>Listado</Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  );
};
