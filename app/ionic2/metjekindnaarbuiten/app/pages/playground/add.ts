import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Playground} from '../../models/playground';
import {DataProvider} from '../../providers/data-provider/data-provider';

@Component({
    templateUrl: 'build/pages/playground/add.html',
    providers: [DataProvider]
})
export class PlaygroundAddPage {

    playground:Playground;

    constructor(private nav:NavController, private dataProvider:DataProvider) {
        this.playground = new Playground();
    }

    add() {
        this.dataProvider.playgroundAdd(this.playground).subscribe(
            data => {
                this.nav.pop();
            },
            err => {
                console.error(err);
            }
        );
    }
}
