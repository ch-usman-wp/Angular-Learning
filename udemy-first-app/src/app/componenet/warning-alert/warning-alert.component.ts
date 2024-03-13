import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 




@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.sass'
})
export class WarningAlertComponent {
  serverId:number = 10;
  serverName:string = "Cpenal";

  allowNewServer = false;
  serverCreatedStatus = 'no server was created';

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
      this.serverCreatedStatus = "server was created";
    }
    onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
    }

    serversName = 'Test Server';

    username = '';
    serverNameAdd = ''
    serverCreated = false;
    

    OncreatedServer(){
      this.serverCreated = true;
      // this.serversName
    }
  }



