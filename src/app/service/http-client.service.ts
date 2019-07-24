import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})

// this class is responsible for making service calls
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  // get employees service
  getEmployees() {
    console.log('calling employees service...');
    return this.httpClient.get<Employee[]>(`http://localhost:8080/employees/`);
  }

  // create employee service
  createEmployee(emp: Employee) {
    console.log('calling create employee service');
    return this.httpClient.post<Employee>(`http://localhost:8080/employees`, emp);
  }

  // delete employees service
  deleteEmployee(emp: Employee) {
    console.log('calling delete employee service', emp);
    return this.httpClient.get<Employee>(`http://localhost:8080/employees/${emp.id}`);
  }
}
