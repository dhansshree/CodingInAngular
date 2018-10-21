import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { DatabindingsComponent } from './databindings/databindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,SuccessComponent, WarningComponent, ServersComponent, ServerComponent, DatabindingsComponent, DirectivesComponent, ComponentsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
