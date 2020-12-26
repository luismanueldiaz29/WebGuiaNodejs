import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material';
import { site } from 'src/app/modules/site';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.css']
})
export class ListSiteComponent implements OnInit {
  
  sites : any;

  constructor(
    private siteServices : SiteService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.siteServices.get().subscribe(
      (data) => {
        this.sites = data;
        console.log(data);
      },(error) => {
      console.error(error)
    });
  }

}
