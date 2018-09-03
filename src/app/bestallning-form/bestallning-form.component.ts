import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Bestallning} from '../bestallning';

@Component({
  selector: 'app-bestallning-form',
  templateUrl: './bestallning-form.component.html',
  styleUrls: ['./bestallning-form.component.css']
})
export class BestallningFormComponent implements OnInit {


  timeOfDayOptions = ['Förmiddag', 'Eftermiddag', 'lunch'];
  apiUrl = '/api/order';

  model = new Bestallning(18, 'RISE Samlade Verk', this.timeOfDayOptions[0], 'Alla publikationer från 2018');

  submitted = false;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  newBestallning() {
    this.model = new Bestallning(42, '', '');
  }

  onSubmit() {
     this.submitted = true;
     const modellen = {titel: this.model.title, kommentar: this.model.comment, tidpunkt: this.model.timeOfDay};
     this.http.post(this.apiUrl,  modellen).subscribe(data => {
       console.log(data);
     });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
