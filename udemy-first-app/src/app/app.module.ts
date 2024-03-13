import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './componenet/test/test.component';
import { WarningAlertComponent } from './componenet/warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './componenet/server/server.component';
import { ServersComponent } from './componenet/servers/servers.component';
import { NewServerComponent } from './componenet/new-server/new-server.component';
import { CockpitComponent } from './componenet/cockpit/cockpit.component';
import { ServerElementComponent } from './componenet/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WarningAlertComponent,
    ServerComponent,
    ServersComponent,
    NewServerComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
