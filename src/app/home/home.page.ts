import { Component } from '@angular/core';
import { FakeApiService } from '../fake-api.service';
import { MenuController } from '@ionic/angular';

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
              private menu: MenuController ) {}
  
  ngOnInit() {
      this._fakeBlogs.getAllBlogs().subscribe(blogs => {
      this.blogs = blogs; 
      })
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  gotoArticle(b){
     return "#"+ b;
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
