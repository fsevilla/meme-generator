import { Component } from '@angular/core';

import { SocialAuthService, GoogleLoginProvider } from "@abacritt/angularx-social-login";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(socialAuthService: SocialAuthService) {
    socialAuthService.authState.subscribe(user => {
      console.log('Usuario', user);
    })
  }

  googleLogin() {
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  
}
