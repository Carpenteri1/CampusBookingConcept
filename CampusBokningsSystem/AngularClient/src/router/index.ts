import { RouterModule } from "@angular/router";
import BookingView from "../app/view/bookings/booking.component";
import { CommentsView } from "../app/view/comments/comments.component";
import SearchView from "../app/view/search/search.component";

const routes =
    [
        { path: "", component: SearchView },
        { path: "NyBokning", component: BookingView },
        { path: "Kommentarer/:id", component: CommentsView}
    ]

const router = RouterModule.forRoot(routes, {
    useHash: false
});
export default router;