import { Component } from '@angular/core';
import { EmployeeDbService } from './firestore/employee-db.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
  employee: Employee = {
    name: '',
    position: '',
    department: '',
    email: ''
  };

  constructor(private employeeService: EmployeeDbService) {}

  addEmployee() {
    this.employeeService.addEmployee(this.employee).then(() => {
      console.log('Employee added successfully!');
      this.employee = { name: '', position: '', department: '', email: '' }; // Reset form
    });
  }
}
