import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  // get employees service
  getEmployees() {
    console.log('calling employees service...');
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees/');
  }

  // create employee service
  createEmployee(emp: Employee) {
    console.log('calling create employee service');
    return this.httpClient.post<Employee>('http://localhost:8080/employees', emp);
  }

  // delete employees service
  deleteEmployee(emp: Employee) {
    console.log('calling delete employee service', emp);
    return this.httpClient.get<Employee>('http://localhost:8080/employees/' + emp.id);
  }
}
