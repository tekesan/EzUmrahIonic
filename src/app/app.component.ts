import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
import { TabsPage } from '../pages/tabs/tabs';

=======
import { HomePage } from '../pages/home/home';
>>>>>>> de6c535c707d667f95a2f5db7013f14cee80b4b3
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = TabsPage;
=======
  rootPage:any = HomePage;
>>>>>>> de6c535c707d667f95a2f5db7013f14cee80b4b3

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
<<<<<<< HEAD
      splashScreen.hide();
    });
  }
}
=======
      splashScreen.show();
    });
  }
}

>>>>>>> de6c535c707d667f95a2f5db7013f14cee80b4b3
