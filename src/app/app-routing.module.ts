import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './bookings/add-booking/add-booking.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
    {path:'', redirectTo: 'bookings', pathMatch:'full'},
    {path:'bookings', component: BookingsComponent},
    {path:'addBooking', component: AddBookingComponent},
    {path:'editBooking/:id', component: AddBookingComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }
