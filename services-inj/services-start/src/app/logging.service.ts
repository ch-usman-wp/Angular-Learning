import { Injectable } from '@angular/core';

@Injectable() // Add @Injectable decorator
export class LoggingService {
  logStatusChange(status: string) {
    console.log('Status changed: ' + status);
  }
}
