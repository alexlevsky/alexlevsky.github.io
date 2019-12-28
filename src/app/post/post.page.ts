import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { FakeApiService } from '../fake-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  private blog;
  constructor(public navCtrl: NavController, 
              private _data: DataService,
              private _fakeApi: FakeApiService,
              private route: ActivatedRoute
    ) {

   }

  ngOnInit() {
   // let id = this._data.getId();
   // console.log(id);
    let id = this.route.snapshot.paramMap.get('id');
    this._fakeApi.getBlog(id).subscribe(blog => {
      this.blog = blog; 
      })
  }



}
