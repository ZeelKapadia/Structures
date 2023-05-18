import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-call',
  templateUrl: './pagination-call.component.html',
  styleUrls: ['./pagination-call.component.css']
})
export class PaginationCallComponent implements OnInit {

  @Input() object: any;
  @Input() maxVisiblePages: any;
  @Input() sidePages: any;

  @Output() pageDetails = new EventEmitter<any>();

  currentPage = 1;
  currentClass = "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  defaultClass = "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"

  //! for show the pages in Prev 1,2,3,...,8,9,10 Next
  visiblePages: any[];
  startPage: number;
  endPage: number;
  totalPages = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalPages = this.onGetTotalPage();
  }

  ngOnChanges() {
    this.calculateVisiblePages();
  }

  // calculateVisiblePages() {
  //   const maxVisiblePages = this.maxVisiblePages ?? 6; // Maximum number of visible pages
  //   const sidePages = this.sidePages ?? 3; // Number of pages on each side of the current page

  //   const totalPages = this.onGetTotalPage();
  //   const middlePages = maxVisiblePages - 2 * sidePages;

  //   if (totalPages <= maxVisiblePages) {
  //     this.visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
  //   } else {
  //     if (this.currentPage <= sidePages + 1) {
  //       this.visiblePages = Array.from({ length: maxVisiblePages - 1 }, (_, i) => i + 1);
  //       this.visiblePages.push('...');
  //       this.visiblePages.push(totalPages);
  //     } else if (this.currentPage > totalPages - sidePages) {
  //       this.visiblePages = [1, '...'];
  //       this.visiblePages.push(...Array.from({ length: maxVisiblePages - 1 }, (_, i) => totalPages - maxVisiblePages + i + 2));
  //     } else {
  //       const start = this.currentPage - sidePages;
  //       const end = this.currentPage + sidePages;

  //       this.visiblePages = [1, '...'];
  //       this.visiblePages.push(...Array.from({ length: middlePages }, (_, i) => start + i));
  //       this.visiblePages.push('...', totalPages);
  //     }
  //   }

  // }

  calculateVisiblePages() {
    const maxVisiblePages = this.maxVisiblePages ?? 6; // Maximum number of visible pages
    const sidePages = this.sidePages ?? 3; // Number of pages on each side of the current page

    const totalPages = this.onGetTotalPage();

    this.visiblePages = [];
    if (totalPages <= maxVisiblePages) {
      this.visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (this.currentPage <= sidePages) {
        this.visiblePages = Array.from({ length: sidePages }, (_, i) => i + 1);
        this.visiblePages.push('...');
        const endPages = Array.from({ length: sidePages }, (_, i) => totalPages - sidePages + (i + 1));
        this.visiblePages.push(...endPages)

      } else if (this.currentPage >= totalPages - sidePages) {
        this.visiblePages.push(1);
        this.visiblePages.push('...');
        for (let page = totalPages - (maxVisiblePages - 2); page <= totalPages; page++) {
          this.visiblePages.push(page);
        }
      } else {
        this.visiblePages.push(1);
        this.visiblePages.push('...');
        const startPage = this.currentPage - (sidePages - 1);
        const endPage = this.currentPage + (sidePages - 1);
        const middlePages = maxVisiblePages - 2 - sidePages * 2;

        const leftOffset = Math.floor(middlePages / 2);
        const rightOffset = Math.ceil(middlePages / 2);

        for (let i = startPage - leftOffset; i <= endPage + rightOffset; i++) {
          this.visiblePages.push(i);
        }

        this.visiblePages.push('...');
        this.visiblePages.push(totalPages);
      }
    }
  }




  onGetTotalPage() {
    return Math.ceil(this.object.totalRecords / this.object.singlePageRecords);
  }

  onCurrentPage() {
    return this.currentPage;
  }

  onLastPage() {
    this.currentPage = this.onGetTotalPage();
    let pageObject = {
      currentPage: this.currentPage,
      totalPage: this.onGetTotalPage(),
      pageSize: this.object.singlePageRecords,
      hasPrevious: !(this.currentPage == 1),
      hasNext: !(this.currentPage == this.onGetTotalPage())
    }
    this.pageDetails.emit(pageObject);
  }
  onFirstPage() {
    this.currentPage = 1
    let pageObject = {
      currentPage: this.currentPage,
      totalPage: this.onGetTotalPage(),
      pageSize: this.object.singlePageRecords,
      hasPrevious: !(this.currentPage == 1),
      hasNext: !(this.currentPage == this.onGetTotalPage())
    }
    this.pageDetails.emit(pageObject);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.calculateVisiblePages();
    let pageObject = {
      currentPage: this.currentPage,
      totalPage: this.onGetTotalPage(),
      pageSize: this.object.singlePageRecords,
      hasPrevious: !(this.currentPage == 1),
      hasNext: !(this.currentPage == this.onGetTotalPage())
    }
    this.pageDetails.emit(pageObject);
  }

  disabledPrevButton() {
    return this.currentPage == 1;
  }

  disabledNextButton() {
    return this.currentPage == this.onGetTotalPage();
  }
}
