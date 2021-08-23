import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
    listOfPosts: Post[] = [
        new Post("First",
            "This is the first post",
            "https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
            "test@test.com",
            new Date()
        ),
        new Post("Second",
            "This is the second post",
            "https://cdn.cnn.com/cnnnext/dam/assets/170315091222-the-wisdom-project-spring-ahead-illustration-exlarge-169.jpg",
            "test@test.com",
            new Date()
        )
    ]
    // facility 1
    getPosts(){
        return this.listOfPosts;
    }

    //facility 2
    //delete 1 post from given index
    deletePost(index: number) {
        this.listOfPosts.splice(index, 1);
    }

    //facility 3
    addPost(post: Post) {
        this.listOfPosts.push(post);
    }

    //facility 4
    updatePost(index:number, post: Post){
        this.listOfPosts[index] = post;
    }
}