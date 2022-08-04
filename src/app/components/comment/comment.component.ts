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
//  commentHtml = "<p> System - " + this.commentDateTime + "</p>";
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
    //this.commentDateTime = "";
      this.commentDateTime = new Date().toLocaleString(); //not working to reset date time....
      //this.commentHtml = "<p> System - " + this.commentDateTime + "</p>";
      this.matchedUser = mention.match(/@(\w*)/, ' ');

    if(this.matchedUser) {alert(this.matchedUser[1] + " was mentioned in a comment");} 
    //wrapped in conditional to prevent null value of '1' when no one is mentioned
 
   }
   
  
  constructor() { }

  ngOnInit(): void {
 
    };


}
