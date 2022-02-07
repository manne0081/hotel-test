import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { BookingService } from './booking.service';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.component.html',
    styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

    bookings: Booking[] = [];

    constructor(private bookingService: BookingService) { }

    ngOnInit(): void {
        this.bookingService.getBookings().subscribe((result) => {
            this.bookings = result;
        });
    }

    deleteBooking(booking: Booking): void {
        this.bookingService.deleteBooking(booking).subscribe();
        this.bookings = this.bookings.filter(b => b != booking)
    }

}
