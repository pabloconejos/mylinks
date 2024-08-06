import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
          return true;
        } else {
          this.router.navigate(['admin/create']);
          return false;
        }
      }),
      catchError((error) => {
        this.router.navigate(['/login']);  // Manejar el error redirigiendo al login u otra página
        return of(false);
      })
    );
  }
}
