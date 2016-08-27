import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import '../../models/playground';
import {Playground} from "../../models/playground";

@Injectable()
export class DataProvider {
    playgrounds:Playground[];

    constructor(private http:Http) {
        this.playgrounds = null;
    }

    playgroundFindAll(refresh?:boolean) {
        if (!refresh && this.playgrounds) {
            return Promise.resolve(this.playgrounds);
        }

        return new Promise(resolve => {

            this.http.get('data/playgrounds.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.playgrounds = data;
                    resolve(this.playgrounds);
                });
        });
    };

    public playgroundSearch(searchTerm:String) {

        if (searchTerm.trim() == '') {
            return this.playgroundFindAll();
        }

        return new Promise(resolve => {

            this.playgroundFindAll().then(playgrounds => resolve(this.playgroundSearchOverload1(searchTerm, this.playgrounds)));
        });

    };

    private playgroundSearchOverload1(searchTerm:String, playgrounds:Playground[]):Playground[] {

        let foundPlaygrounds : Playground[] = [];

        for (let playground of playgrounds) {
            for(let field in playground) {
                let value = playground[field];
                if(value && typeof value === "string" && value.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1) {
                    foundPlaygrounds.push(playground);
                    break;
                }
            }
        }
        return foundPlaygrounds;
    }
}

