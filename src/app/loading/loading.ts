import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-container">
      <img src="assets/loading-logo.gif" alt="Loading Logo" />
    </div>
  `,
  styles: [`
    .loading-container {
      background-color: #FFEA35; /* your yellow */
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed; /* on top */
      top: 0; left: 0;
      z-index: 9999;
    }
    img {
      max-width: 300px;
      max-height: 300px;
    }
  `]
})
export class LoadingComponent implements OnInit {
  ngOnInit() {}
}
