import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-stock-tracker-list',
  templateUrl: './stock-tracker-list.component.html',
  styleUrls: ['./stock-tracker-list.component.css'],
})
export class StockTrackerListComponent implements OnInit {
  private readonly STOCK_KEY = 'stocks';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {}

  public trackSymbol(stockId: string) {
    this.localStorageService.setItemToLocalStorage(this.STOCK_KEY, stockId);
  }
}
