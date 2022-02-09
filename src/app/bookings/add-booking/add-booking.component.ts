import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/model/booking';
import { BookingService } from '../booking.service';
import { FormBuilder, Validators } from '@angular/forms';

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

    bookingForm = this.formBuilder.group({
        id:['', Validators.required],
        name:['', Validators.compose([Validators.required, Validators.minLength(5)])],
        roomNumber:['', Validators.required],
        startDate:['', Validators.required],
        endDate:['', Validators.required],
    })

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private bookingService: BookingService,
                private formBuilder: FormBuilder) { }    

    ngOnInit(): void {
        if (this.router.url != "/addBooking") {
            var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

            this.bookingService.getBookingById(id).subscribe((result) => {                
                this.booking = result;
                this.bookingForm.setValue({
                    id: this.booking.id,
                    roomNumber: this.booking.roomNumber,
                    name: this.booking.name,
                    startDate: this.booking.startDate,
                    endDate: this.booking.endDate,
                });
            });
        }        
    }
    
    save(): void {
        this.booking.id = this.bookingForm.get('id')?.value;
        this.booking.name = this.bookingForm.get('name')?.value;
        this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
        this.booking.startDate = this.bookingForm.get('startDate')?.value;
        this.booking.endDate = this.bookingForm.get('endDate')?.value;

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
