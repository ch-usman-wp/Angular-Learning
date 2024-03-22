import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  [x: string]: any;
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: any;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true: false;
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }
  canDeactive(): Observable<boolean> | Promise<boolean> | boolean {
if(!this.allowEdit){
  return true;
}
if((this.serverName !== this.server.name || this.serverStatus !== this.server.status)&& !this.changesSaved){
return confirm('Do you want to discard the changes?');
  }else{
    return true;
  }

}
}
