import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  isVisible =true;
  items= ['item1', 'item2', 'item3'];
  currentValue = 'case1';
  isActive = true;
  isDisabled = false;
  color = 'blue';
  fontSize = 16;
  username = 'John Doe';

  tooltipText = 'This is a tooltip!';

  onButtonClick(){
    alert('Button clicked!');
  }

}
