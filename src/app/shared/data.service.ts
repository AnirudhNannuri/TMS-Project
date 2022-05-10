import { Address } from '../address';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
      providedIn: 'root'
})
export class DataService {
       searchOption=[];
       public postsData: Address[];
       postUrl : string = "https://jsonplaceholder.typicode.com/posts";
      constructor(private http: HttpClient) { }
      getPosts(): Observable<Address[]>{
            return this.http.get<Address[]>(this.postUrl);
      }

      filteredListOptions() {
        let posts = this.postsData;
        let filteredPostsList = [];
        for (let post of posts) {
          for (let options of this.searchOption) {
            if(options.title === post.title) {
              filteredPostsList.push(post);
            }
          }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
      }
}


