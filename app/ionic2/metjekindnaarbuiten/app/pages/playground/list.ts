import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

import {DataProvider} from '../../providers/data-provider/data-provider';
import {Playground} from '../../models/playground';

declare var google;

@Component({
    templateUrl: 'build/pages/playground/list.html',
    providers: [DataProvider]
})
export class PlaygroundListPage {

    playgrounds:Playground[];

    constructor(private nav:NavController, private dataProvider:DataProvider) {

        dataProvider.playgroundFindAll().then(playgrounds => this.loadData(playgrounds));
    }

    search(searchTerm) {

        let term = searchTerm.target.value;

        this.dataProvider.playgroundSearch(term).then(playgrounds => this.loadData(playgrounds));
    }

    private loadData(playgrounds:Playground[]) {

        this.playgrounds = playgrounds;

        Geolocation.getCurrentPosition().then((position) => {

            var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            for (let playground of this.playgrounds) {

                var playgroundLocation = new google.maps.LatLng(playground.latitude, playground.longitude);
                let distance = google.maps.geometry.spherical.computeDistanceBetween(currentLocation, playgroundLocation);
                playground.distanceToCurrentLocation = Math.round(distance);
            }
        }, (err) => {
            if (err.code == 1) {
                //User denied Geolocation
            }
            else {
                console.log(err);
            }
        });
    }
}
