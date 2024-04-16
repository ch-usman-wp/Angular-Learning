import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
 
  title = 'routin-test';

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        localStorage.setItem("userid", "123");
        localStorage.setItem("Empid", "2343");
        console.log("Items set in localStorage successfully");
      } catch (e) {
        console.error("Error setting items in localStorage: ", e);
      }
    } else {
      console.error("localStorage is not supported in this browser");
    }
  }
}
