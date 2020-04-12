import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent {
  enteredValue = '';
  newPost = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = this.enteredValue
  }
}
