import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Input() sideLists:any[]=[];
  @Input() Subject:any;
  @Input() subgrade:any;

}

