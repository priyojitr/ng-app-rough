import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee('', '', '');

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.employee).subscribe(data => {
      alert('new employee added');
      // reset add form fields to blank
      this.employee = new Employee('', '', '');
    });
  }

}
