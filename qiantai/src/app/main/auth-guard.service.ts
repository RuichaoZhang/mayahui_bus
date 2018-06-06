import {Injectable} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad,
  Route
} from '@angular/router';
import {LocalStorageService} from '../shared/storage/local-storage.service';

export const CURRENTUSE = 'currentUser';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private stroage: LocalStorageService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {

    return true;
    // 当前登录用户
    // const currentUser = this.stroage.getObject(CURRENTUSE);
    // if (currentUser && '{}' !== JSON.stringify(currentUser)) {
    //   return true;
    // }
    //
    // // Create a dummy session id
    // const sessionId = 123456789;
    //
    // // Set our navigation extras object
    // // that contains our global query params and fragment
    // const navigationExtras: NavigationExtras = {
    //   queryParams: {'session_id': sessionId},
    //   fragment: 'anchor'
    // };
    //
    // // Navigate to the login page with extras
    // this.router.navigate(['/login']);
    // return false;
  }
}
