import { Component, OnInit } from '@angular/core';

import { toJpeg } from 'html-to-image';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  title = 'meme-generator';
  file: any;
  filename: string = '';
  upper: string = 'Hola <br> mundo';
  lower: string = 'mundo';
  color: string = '';
  size: number = 16;
  dataUrl: string = 'https://pbs.twimg.com/media/EKM5TznXsAAyos1.jpg';

  ngOnInit() {}
  
  doOnChange(target: any) {
    const file = target.files[0];
    this.filename = file.name;

    const reader = new FileReader();

    reader.onload = (e:any) => {
      console.log('Ya se cargo el archivo', e);
      this.dataUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  saveImage() {
    const node: any = document.getElementById('meme');

    toJpeg(node).then((e:any) => {
      const anchor = document.createElement('a');
      anchor.download = this.filename;
      anchor.href = e;
      anchor.click();
    })
  }
}
