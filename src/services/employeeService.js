const BASE_URL = 'https://springboot-employees-00129f302300.herokuapp.com'

export async function fetchEmployees() {
  const response = await fetch(`${BASE_URL}/employees`);
  const json = await response.json();


  if (!response.ok) {
    throw new Error(`Error al obtener empleados: ${response.status} ${response.statusText}`);
  }

  if (!Array.isArray(json)) {
    throw new Error('La respuesta no es un array');
  }

  return json.map(emp => ({
    id: emp.id,
    name: emp.employee_name,
    salary: emp.employee_salary,
    age: emp.employee_age,
    avatar: emp.profile_image
  }));
}

export async function fetchEmployeesById(id) {
  const response = await fetch(`${BASE_URL}/employees/${id}`);
  
  if (!response.ok) {
    throw new Error(`Error al obtener empleado: ${response.status} ${response.statusText}`);
  }
  const emp = await response.json();
  
  return {
    id: emp.id,
    name: emp.employee_name,
    salary: emp.employee_salary,
    age: emp.employee_age,
    avatar: emp.profile_image,
    salary_anual: emp.employee_anual_salary

  };
}
