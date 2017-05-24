import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: String = "1";
  @Output() pageChanged = new EventEmitter();
  public pagination: Object = {};
  public pages: Number = 0;
  public error: String = "";

  constructor(private paginationSrv: PaginationService) { }

  ngOnInit() {
    this.getPagination(null);
  }

  getPagination(url: string) {
    this.paginationSrv.getPagination(url)
      .subscribe(
        result => {
          this.pagination = result;
          this.pages = Math.ceil(this.pagination['count'] / 10);
        },
        error => {
          this.error = "Impossible de récupérer la pagination";
          console.log(this.error + " : ", error);
        }
      );
  }

  changePage(url: string, button: string) {
     this.getPagination(url);

     if(button == "previous") {
       this.pageChanged.emit(this.pagination['previous']);
     } else {
       this.pageChanged.emit(this.pagination['next']);
     }
     
     this.page = url.charAt(url.length-1);
  }

}
