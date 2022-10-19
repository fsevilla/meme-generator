import { Component, ViewChild } from '@angular/core';
import { toJpeg } from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meme-generator';
  file: any;
  upper: string = 'Hola <br> mundo';
  lower: string = 'mundo';
  color: string = '';
  size: number = 16;
  dataUrl: string = 'https://pbs.twimg.com/media/EKM5TznXsAAyos1.jpg';

  doOnChange(target: any) {
    const file = target.files[0];

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
      anchor.download = 'mi-meme.jpg';
      anchor.href = e;
      anchor.click();
    })
  }
}
