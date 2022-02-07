import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Booking } from './model/booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        const bookings: Booking[] = [
            {'id': 0, 'name': 'Dagobert Duck', 'roomNumber': 100, 'startDate': new Date('2022-2-2'), 'endDate': new Date('2022-2-10')},
            {'id': 1, 'name': 'Daniel Düsentrieb', 'roomNumber': 101, 'startDate': new Date('2022-2-2'), 'endDate': new Date('2022-2-10')},
            {'id': 2, 'name': 'Gustav Gans', 'roomNumber': 105, 'startDate': new Date('2022-2-2'), 'endDate': new Date('2022-2-10')},
            {'id': 3, 'name': 'Gundel Gaukeley', 'roomNumber': 117, 'startDate': new Date('2022-2-2'), 'endDate': new Date('2022-2-10')},
        ]
        return {bookings};
    }

    constructor() { }
}
