import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/API/api.service';
import { PaginatorInterface } from 'src/app/types/paginator-interface';

@Component({
  selector: 'app-paginator',
  template: `
    <mat-paginator #paginator
      (page)="handlePageEvent($event)"
      [length]="this.paginatorOptions.length"
      [pageSize]="this.paginatorOptions.pageSize"
      [showFirstLastButtons]="true"
      [pageSizeOptions]="this.paginatorOptions.pageSizeOptions"
      [pageIndex]="this.paginatorOptions.pageIndex"
      aria-label="Select page"
      class="paginator">
    </mat-paginator>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() loading!: boolean;
  @Output() changePageOptionsEvent = new EventEmitter<any[]>();
  @Output() updateLoadingEvent = new EventEmitter<boolean>();

  paginatorOptions: PaginatorInterface = {
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20]
  }

  pageEvent!: PageEvent;
  typeOfData: string = 'games';
  data?: any[];

  constructor(private api: ApiService) {
  
  }

  ngOnInit(): void {
    this.fetchData(this.paginatorOptions, this.typeOfData);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.paginatorOptions.pageSize = e.pageSize;
    this.paginatorOptions.pageIndex = e.pageIndex;
    this.fetchData(this.paginatorOptions, this.typeOfData)
  }

  fetchData(paginatorOptions: PaginatorInterface, typeOfData: string) {
    
    this.loading = true;

    return this.api.getAllGames(this.paginatorOptions, this.typeOfData)
      .subscribe( response => {
        this.paginatorOptions.length = response.meta.total_count;
        this.paginatorOptions.pageIndex = response.meta.current_page;
        this.data = response.data;
        this.passDataToParent();
        this.loading = false;
      });

  }

  passDataToParent() {
    this.changePageOptionsEvent.emit(this.data);
    this.updateLoadingEvent.emit(this.loading);
  }

  ngAfterViewChecked(): void {
    this.updateLoadingEvent.emit(this.loading);
  }

}
