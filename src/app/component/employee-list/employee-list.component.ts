import { Component } from '@angular/core';
import {EmployeeListService} from "../../services/employee-list.service";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  name: string = '';
  position: string = '';
  department: string = '';

  constructor(private employeeListService: EmployeeListService) {}

  get employeeList() {
    return this.employeeListService.getEmployees();
  }

  addEmployee() {
    if (this.name.trim() && this.position.trim() && this.department.trim()) {
      const newEmployee = {
        name: this.name.trim(),
        position: this.position.trim(),
        department: this.department.trim(),
      };

      this.employeeListService.addEmployee(newEmployee);

      this.name = '';
      this.position = '';
      this.department = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeEmployee(index: number) {
    this.employeeListService.removeEmployee(index);
  }
}
