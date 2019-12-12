import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StorageServiceModule } from "ngx-webstorage-service";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StorageServiceModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
