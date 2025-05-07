// context/EmployeeContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { fetchEmployees, fetchEmployeesById } from '../services/employeeService';
import { paginateEmployees } from '../utils/employeeUtils';

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [all, setAll]         = useState([]);
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]   = useState('');
  const [inputValue, setInputValue] = useState('');
  const [page, setPage]       = useState(1);
  const perPage = 5;

  useEffect(() => {
    (async () => {
      try {
        const list = await fetchEmployees();
        setAll(list);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const recalc = useCallback(() => {
    setLoading(true);

    if (search) {
      fetchEmployeesById(Number(search))
        .then(emp => {
          setVisible(emp ? [emp] : []);
          setPage(1);
        })
        .catch(err => {
          console.error(err);
          setVisible([]);
        })
        .finally(() => setLoading(false));
    } else {
      const pageItems = paginateEmployees(all, page, perPage);
      setVisible(pageItems);
      setLoading(false);
    }
  }, [search, page, all]);

  useEffect(() => {
    recalc();
  }, [recalc]);

  const totalPages = search
    ? 1
    : Math.ceil(all.length / perPage);

  const nextPage = () => {
    if (page < totalPages) setPage(p => p + 1);
  };
  const prevPage = () => {
    if (page > 1) setPage(p => p - 1);
  };
  const allEmployees = () => {
    setSearch('');
    setInputValue('');
    setPage(1);
  };

  return (
    <EmployeeContext.Provider
      value={{
        visible,
        loading,
        search,
        setSearch,
        inputValue,
        setInputValue,
        page,
        totalPages,
        nextPage,
        prevPage,
        allEmployees
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
