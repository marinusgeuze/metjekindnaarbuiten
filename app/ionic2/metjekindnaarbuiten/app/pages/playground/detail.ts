import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Playground} from '../../models/playground';

declare var google;

@Component({
    templateUrl: 'build/pages/playground/detail.html'
})
export class PlaygroundDetailPage {

    playground:Playground;
    map:any = null;

    constructor(private nav:NavController, navParams:NavParams, private element:ElementRef) {
        this.playground = navParams.get('playground');
    }

    ionViewLoaded() {
        this.loadMap();
    }

    loadMap() {
        let latLng = new google.maps.LatLng(this.playground.latitude, this.playground.longitude);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        let mapElement = this.element.nativeElement.getElementsByClassName('map')[0];

        this.map = new google.maps.Map(mapElement, mapOptions);

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });

        let content = '<h4>' + this.playground.address + '</h4>';
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });

        google.maps.event.trigger(this.map, 'resize');
    }
}
