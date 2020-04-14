import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ["./post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {
  postId: string
  post: Post
  constructor(public postsService: PostsService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.postId = this.route.snapshot.params['postId'];
      this.postsService.getPost(this.postId)
      .subscribe(post => {
        this.post = {
          id: post._id,
          title: post.title,
          content: post.content,
          imagePath: post.imagePath,
          creator: post.creator
        };
      })
  }
}
