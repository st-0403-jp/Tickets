import "core-js";
import "rxjs/Rx";
import "zone.js/dist/zone";

import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
// myAppコンポーネント定義
@Component({
  selector: "my-app",
  template: `
    <h1>Hello World!</h1>
  `
})
class MyAppComponent {
}
//index.htmlで使うための準備
bootstrap(MyAppComponent);
