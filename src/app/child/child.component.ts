import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() selectedPizza:any
  @Output() checkedOutData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckedOut(selectedpizzadata:any){
    console.log('checked out data received',selectedpizzadata)
    this.checkedOutData.emit(selectedpizzadata)

  }

}
