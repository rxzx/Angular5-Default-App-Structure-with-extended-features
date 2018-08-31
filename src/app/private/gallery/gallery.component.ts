import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public iframe_html:any;
  public vimeoUrl = "https://vimeo.com/197933516";
  public images:any;
  public urls:string[] = [];
  public videoUrls:string[] = [];
  public iframes:any;

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

    this.urls = [
      "../../assets/images/1.jpg",
      "../../assets/images/2.jpg",
      "../../assets/images/3.jpg",
      "../../assets/images/1.jpg",
      "../../assets/images/2.jpg",
      "../../assets/images/3.jpg"
    ];

    this.videoUrls = [
      "https://www.youtube.com/watch?v=HgBFtoiEsh4",
      "https://vimeo.com/197933516",
      "https://www.youtube.com/watch?v=kstz-XYdas0",
      "https://www.youtube.com/watch?v=HgBFtoiEsh4",
      "https://vimeo.com/197933516",
      "https://www.youtube.com/watch?v=kstz-XYdas0"
    ];

    this.iframes = [];

    this.videoUrls.forEach( (item) =>{
      this.iframes.push(this.embedService.embed(item));
    });
   
  }

}
