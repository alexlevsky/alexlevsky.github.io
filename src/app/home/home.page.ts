import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { FakeApiService } from '../fake-api.service';
import { DataService } from '../services/data.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private blogs;
  private searchBarText;
  private isShowSearchBar = false;
  private isShowBar = true;

  constructor(private _fakeBlogs : FakeApiService,
              private menu: MenuController,
              private _data: DataService,
              private _routing: AppRoutingModule,
              private router: Router
              ) {}
  
  ngOnInit() {
      this._fakeBlogs.getAllBlogs().subscribe(blogs => {
      this.blogs = blogs; 
      })
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  gotoArticle(id){
     console.log(id);
    // this._data.setId(id);
     this.router.navigateByUrl('/post/'+id);
  }
  
  changeSearchBar(){
    console.log(this.searchBarText);
  }

   showSearchBar(){
     this.isShowSearchBar = true;
     this.isShowBar = false;
   }
   hideSearchBar(){
     this.searchBarText = "";
    this.isShowSearchBar = false;
    this.isShowBar = true; 
  }
  
}
