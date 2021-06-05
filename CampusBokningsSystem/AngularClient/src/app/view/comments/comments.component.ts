import { Component, OnInit } from "@angular/core";
import { IconList } from '../../services/data/iconsList.service';

@Component({
    selector: 'comment-components',
    templateUrl: 'comments.component.html',
    styles: []
})

export class CommentsView implements OnInit{

    constructor(public icons: IconList) {

    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }


}