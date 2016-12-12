import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import '../../models/playground';
import {Playground} from "../../models/playground";

@Injectable()
export class DataProvider {
    private playgrounds:Playground[];
    //url:string = 'data/playgrounds.json';
    private url:string = 'http://localhost:8080/playground';

    constructor(private http:Http) {
        this.playgrounds = null;
    }

    playgroundFindAll(refresh?:boolean) {
        if (!refresh && this.playgrounds) {
            return Promise.resolve(this.playgrounds);
        }

        return new Promise(resolve => {

            this.http.get(this.url)
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

    public playgroundAdd(playground:Playground) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(playground);

        return this.http.post(this.url, body, options);
    }
}

