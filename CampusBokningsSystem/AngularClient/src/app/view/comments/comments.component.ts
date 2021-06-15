import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { apiConnection } from "../../services/data/apiConnection.service";
import { IconList } from '../../services/data/iconsList.service';
import { IComments } from "../../services/models/IComments";
import { IRooms } from "../../services/models/IRooms";

@Component({
    selector: 'comment-components',
    templateUrl: 'comments.component.html',
    styles: []
})

export class CommentsView implements OnInit{
    thisRoomId: number = 0;
    private comment: IComments = {} as IComments;
    public roomObjects: IRooms = {} as IRooms;
    public listroomsObject: IRooms[] = [];

    constructor(public icons: IconList,
        private route: ActivatedRoute,
        private apiData: apiConnection,
        private formBuilder: FormBuilder)
    {

    }

    public postComment = this.formBuilder.group({
        comment: ''
    });
    rate(data: any) {
        data.rating = data.rating + 1;
        this.comment = {
            id: data.id,
            comment: data.comment,
            rating:data.rating
        }
        this.apiData.updateCommentRating(this.comment);
    }

    keyDownFunction(event:any,value:any) {
        if (event.keyCode === 13) {
            this.comment.comment = value.comment;
            this.apiData.postComment(this.comment,String(this.thisRoomId));
        }
    }

    async ngOnInit(): Promise<void> {
        this.thisRoomId = Number(this.route.snapshot.paramMap.get('id'));
        (await this.apiData.getRoomDataById(this.thisRoomId)).subscribe(data => {
            this.roomObjects = data;
        })
    }

}