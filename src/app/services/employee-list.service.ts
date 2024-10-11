import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private employeeList: { name: string; position: string; department: string }[] = [];

  constructor() {
    this.employeeList.push({
      name: 'Avelino',
      position: 'Business Developer',
      department: 'Tiktok',
    });
  }

  getEmployees() {
    return this.employeeList;
  }

  addEmployee(employee: { name: string; position: string; department: string }) {
    this.employeeList.push(employee);
  }

  removeEmployee(index: number) {
    this.employeeList.splice(index, 1);
  }
}
