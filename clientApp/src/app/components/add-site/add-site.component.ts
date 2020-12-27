import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/modules/site';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {

  imageUrl = "../../../assets/default-image.png";
  fileToUpload: any;
  files : any;
  successfulMessage = '';
  site : Site;

  constructor(
    private siteService : SiteService
  ) { }

  ngOnInit(): void {
    this.site = {name:"", description: "", infoInterest: "", nameImg:"", imgPath:""}
  }

  handleFileInput(files: FileList) {
    this.files = files;

    //Show image preview
    this.fileToUpload = files.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  post(){
    this.siteService.post(this.site).subscribe(
      siteRes => {
        console.log(siteRes);
      }, error => {
        console.log(error);
      }
    );
  }
  onSubmit() {

  }

}
