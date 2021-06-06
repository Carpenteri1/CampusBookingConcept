import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FetchData } from "../../services/data/fetchData";
import { IconList } from '../../services/data/iconsList.service';
import { IComments } from "../../services/models/IComments";
import { IRooms } from "../../services/models/IRooms";

@Component({
    selector: 'comment-components',
    templateUrl: 'comments.component.html',
    styles: []
})

export class CommentsView implements OnInit{
    thisRoomId: any;
    public roomObjects: IRooms = {} as IRooms;
    public listroomsObject: IRooms []= [];
    constructor(public icons: IconList, private route: ActivatedRoute, private apiData: FetchData){

    }
    ngOnInit(): void {
        this.thisRoomId = this.route.snapshot.paramMap.get('id')
        this.apiData.getRoomDataById(this.thisRoomId).subscribe(data => {
            this.roomObjects = data;
        })

    }


}