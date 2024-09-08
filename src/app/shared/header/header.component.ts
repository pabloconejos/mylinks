import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  isLooged: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) 
  {
    
  }
  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(response => {
      this.isLooged = response.authenticated
    })
  }

  isMenuOpen: boolean = false

  showMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  logOut() {
    this.authService.logOut().subscribe(respose => {
      this.router.navigate(['/'])
    });
    
  }
}
