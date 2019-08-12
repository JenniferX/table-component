import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { CoreModule } from './core/core.module';
import { MockBackendProvider } from './mockup-server/mockup-server.provider';
import { FormsModule } from '@angular/forms';
import { TableFooterComponent } from './table-footer/table-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableFooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MockBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
