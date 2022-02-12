import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  onProfileClcik() {
    this._router.navigate(['/profile']);
  }

  onLibraryClcik() {
    this._router.navigate(['/library/list']);
  }

}
