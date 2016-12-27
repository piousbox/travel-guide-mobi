
import { Page, Platform, NavParams } from 'ionic/ionic';

@Page({
    templateUrl: 'app/other/other.html',
})

export class OtherPage {
    constructor(platform: Platform, navParams: NavParams) {
        this.platform = platform;
        this.navParams = navParams;
        this.firstname = navParams.get("firstname");
        this.lastname = navParams.get("lastname");
    }
}
