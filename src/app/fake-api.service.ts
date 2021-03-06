import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private _http: HttpClient) {  }

  public getAllBlogs(){
    return this._http.get('http://5d668943520e1b00141ee3bd.mockapi.io/api/blogs');
  }
  public getBlog(id){
    return this._http.get('http://5d668943520e1b00141ee3bd.mockapi.io/api/blogs/' + id );
  }
}
