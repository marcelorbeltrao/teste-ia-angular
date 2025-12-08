import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from "@ngx-translate/core";

export class MatPaginationTranslate {

  private lblOf = "";

  translateRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) { return `0 ${this.lblOf} ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} ${this.lblOf} ${length}`;
  };


  injectTranslateService(translate: TranslateService) {

    const paginatorIntl = new MatPaginatorIntl();

    translate.get([
      "PAGINATION.LBL_OF",
      "PAGINATION.LBL_ITENS_PER_PAGE",
      "PAGINATION.LBL_NEX_PAGE",
      "PAGINATION.LBL_PREVIUNS_PAGE",
      "PAGINATION.LBL_FIRST_PAGE",
      "PAGINATION.LBL_LAST_PAGE",
    ]).subscribe((text:any) => {
      paginatorIntl.itemsPerPageLabel = text['PAGINATION.LBL_ITENS_PER_PAGE'];
      paginatorIntl.nextPageLabel = text['PAGINATION.LBL_NEX_PAGE'];
      paginatorIntl.previousPageLabel = text['PAGINATION.LBL_PREVIUNS_PAGE'];
      paginatorIntl.firstPageLabel = text['PAGINATION.LBL_FIRST_PAGE'];
      paginatorIntl.lastPageLabel = text['PAGINATION.LBL_LAST_PAGE'];
      this.lblOf = text['PAGINATION.LBL_OF'];
    });

    paginatorIntl.getRangeLabel = this.translateRangeLabel;

    return paginatorIntl;
  }
}
