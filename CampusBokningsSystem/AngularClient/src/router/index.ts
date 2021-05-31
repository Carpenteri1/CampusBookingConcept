import { RouterModule } from "@angular/router";
import SearchView from "../app/view/search/search.component";

const routes =
    [
        { path: "", component: SearchView },
        //{path:"",component:}
    ]

const router = RouterModule.forRoot(routes, {
    useHash: false
});
export default router;