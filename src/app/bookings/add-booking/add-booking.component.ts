import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/model/booking';
import { BookingService } from '../booking.service';

@Component({
    selector: 'app-add-bookings',
    templateUrl: './add-booking.component.html',
    styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit {

    booking: Booking = {
        id: 4,
        name: 'Max Mustermann',
        roomNumber: 143,
        startDate: new Date(),
        endDate: new Date()
    }

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private bookingService: BookingService) { }    

    ngOnInit(): void {
        if (this.router.url != "/addBooking") {
            var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
            this.bookingService.getBookingById(id).subscribe((result) => {
                this.booking = result;
            });
        }        
    }
    
    save(): void {
        this.bookingService.addBooking(this.booking).subscribe();
        this.router.navigate(['bookings']);
    }

    dateChanged(event: Event, isStart: boolean) {
        var val = (event.target as HTMLInputElement).value;

        if (isStart) {
            this.booking.startDate = new Date(val);
        } else {
            this.booking.endDate = new Date(val);
        }
    }
}
