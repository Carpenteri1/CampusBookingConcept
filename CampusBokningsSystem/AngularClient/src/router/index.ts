import { RouterModule } from "@angular/router";
import BookingView from "../app/view/bookings/booking.component";
import SearchView from "../app/view/search/search.component";

const routes =
    [
        { path: "", component: SearchView },
        {path:"bokning",component:BookingView}
    ]

const router = RouterModule.forRoot(routes, {
    useHash: false
});
export default router;