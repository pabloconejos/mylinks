import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { PageService } from '../services/page.service';

@Injectable({
  providedIn: 'root'
})
export class HavePageGuard implements CanActivate {
  constructor(private pageService: PageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.pageService.havePage().pipe(
      map(response => {
        if (response.page) {
          this.router.navigate(['/admin']);
          return false;
        } else {
          return true;
        }
      }),
      catchError((error) => {
        this.router.navigate(['/login']);  // Manejar el error redirigiendo al login u otra página
        return of(false);
      })
    );
  }
}

