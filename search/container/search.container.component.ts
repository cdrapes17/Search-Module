import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login/services/login.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search.container.component.html',
  styleUrls: ['./search.container.component.scss']
})

export class SearchContainerComponent implements OnInit {
  links;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.links()
      .subscribe(links => this.links = links);
  }
}
