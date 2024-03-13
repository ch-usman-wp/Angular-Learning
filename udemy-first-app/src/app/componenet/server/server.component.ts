import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.sass'
})
export class ServerComponent {
serverCreationStatus: string= 'No server was created';
serverId: number = 10;
serverStatus: string= 'offline';
serverName= 'Test Server';
serverCreated=false;
noServer: any;
allowNewServer: any;
servers = ['test server', 'test server 2']


onCreateServer()  {
  this.serverCreated= true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server Was created name is' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


constructor(){
  this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
}
getServerStatus(){
  return this.serverStatus;
}
getColor(){
  return this.serverStatus === 'online'? 'green' : 'red';
}
}
