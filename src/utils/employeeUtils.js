export function filterEmployeesBySearch(employees, id) {
  return employees;
}

export function paginateEmployees(employees, page, perPage) {
  const start = (page - 1) * perPage;
  return employees.slice(start, start + perPage);
}