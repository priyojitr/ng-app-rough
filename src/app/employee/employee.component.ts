import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Employee } from 'src/app/model/employee.model';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators/';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => this.handleSuccessResponse(response),
    );
  }

  handleSuccessResponse(response) {
    console.log('response recevied', response);
    this.employees = response;
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(emp => emp !== employee);
    });
  }

}
