import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MentionModule } from 'angular-mentions';
//import { MentionDirective } from './mention.directive';
//import { MentionListComponent } from './mention-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
  //  MentionDirective,
  //  MentionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MentionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
