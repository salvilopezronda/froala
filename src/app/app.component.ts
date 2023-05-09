import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'froala';
  ngAfterViewInit(): void {
    // @ts-ignore
    new FroalaEditor('#editor');
  }
}
