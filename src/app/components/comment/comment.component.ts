import { Component, OnInit } from '@angular/core';
import { faComment as fasComment } from '@fortawesome/free-regular-svg-icons';
import { faComment as farComment } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  fasComment = fasComment;
  farComment = farComment;
  comment:any = "";
  postComment: Array<any> = [];
  commentDateTime = new Date().toLocaleString();
  commentHtml = '<p>' + this.comment + "<span> System - " + this.commentDateTime + "</span></p>";
  mention = "";
  matchedUser = "";

  items: any[] = [
    {'userID' : 1, 'name' : 'Kevin'},
    {'userID' : 2, 'name' : 'Jeff'},
    {'userID' : 3, 'name' : 'Bryan'},
    {'userID' : 4, 'name' : 'Gabbey'},
]
 
  post(mention) {
    this.postComment.push(this.comment);
    this.comment = "";
    this.commentDateTime = new Date().toLocaleString(); //not working to reset date time....

      this.matchedUser = mention.match(/@(\w*)/, ' ');

    alert(this.matchedUser[1] + " was mentioned in a comment");
 
   }
   
  
  constructor() { }

  ngOnInit(): void {
 
    };


}
