import { OnInit, Input, Component } from '@angular/core';

@Component({
     selector: 'app-demo',
     templateUrl: './demo.component.html',
     styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
     @Input() product;
     hola = '';
     constructor() {
          console.log(this.hola);
     }

     ngOnInit() {
          let t = '';
          console.log(t);
          t = '100';
     }
}
