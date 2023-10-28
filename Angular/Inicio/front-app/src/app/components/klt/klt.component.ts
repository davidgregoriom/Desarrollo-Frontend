import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { KLT_type } from "../../models/KLT";

@Component({
  selector: 'app-klt',
  templateUrl: './klt.component.html',
  styleUrls: ['./klt.component.css']
})
export class KLTComponent implements OnChanges {

  @Input() klt: KLT_type | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (this.klt && this.klt.date) {
      this.klt.date = new Date(this.klt.date);
    }
  }

}
