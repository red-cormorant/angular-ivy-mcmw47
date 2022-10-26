import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StockTrackerListComponent } from './stock/stock-tracker-list/stock-tracker-list.component';
import { StockTrackerDetailComponent } from './stock/stock-tracker-detail/stock-tracker-detail/stock-tracker-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StockTrackerListComponent,
    StockTrackerDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
