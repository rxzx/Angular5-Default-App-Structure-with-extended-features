import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public iframe_html:any;
  public vimeoUrl = "https://vimeo.com/197933516";
  public images:any;
  constructor(
    private embedService: EmbedVideoService
  ) { 
    this.iframe_html = this.embedService.embed(this.vimeoUrl);
  }

  ngOnInit() {
    this.images = [
      {
        thumb:'../../assets/images/1.png',
        url:'https://vimeo.com/197933516',
      },
      {
        thumb:'../../assets/images/2.png',
        url:'https://vimeo.com/197933516',
      },
      {
        thumb:'../../assets/images/3.png',
        url:'../../assets/images/3.png',
      },
    ]
   
  }

}
