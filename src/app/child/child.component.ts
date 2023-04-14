import { Component, EventEmitter ,Output,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() public Myevent=new EventEmitter();
  public Myaction()
  {
    this.Myevent.emit("Hello Parent Component");
  }

  @Input() public FromParent=" ";




}
