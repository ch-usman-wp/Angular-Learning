import { Component } from '@angular/core';
import { EditServerComponent } from "./edit-server/edit-server.component";
import { ServerComponent } from "./server/server.component";
// import { ServersService } from './servers.service';

@Component({
    selector: 'app-srrvers',
    standalone: true,
    templateUrl: './srrvers.component.html',
    styleUrl: './srrvers.component.css',
    imports: [EditServerComponent, ServerComponent]
})
export class SrrversComponent {
  public servers: {id: number, name: string, status: string}[] = [];

  // constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
