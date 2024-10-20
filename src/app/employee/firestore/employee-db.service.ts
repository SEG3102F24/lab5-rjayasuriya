import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../employee'; // Define an Employee model with fields you need.

@Injectable({
  providedIn: 'root'
})
export class EmployeeDbService {
  private firestore: Firestore = inject(Firestore);

  getEmployees(): Observable<Employee[]> {
    const employeesCollection = collection(this.firestore, 'employees');
    return collectionData(employeesCollection, { idField: 'id' }) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee): Promise<void> {
    const employeesCollection = collection(this.firestore, 'employees');
    return addDoc(employeesCollection, employee);
  }
}
