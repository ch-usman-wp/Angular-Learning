import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.sass'
})
export class ServersComponent {
  shoeSecret = false;
  log=[];
  servers=[];
  onAddServer(){
    this.servers.push('Another server')

  }

  onToggleDetails(){
    this.shoeSecret = !this.shoeSecret;
    this.log.push(this.log.length + 1);
  }
}
