import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface Food {
  value: string;
  viewValue: string;
}

interface exprange {
  value: string;
  viewValue: string;
}

interface position {
  value: string;
  viewValue: string;
}

interface manager {
  value: string;
  viewValue: string;
}

interface created {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-requirementsform',
  templateUrl: './requirementsform.component.html',
  styleUrls: ['./requirementsform.component.css']
})
export class RequirementsformComponent implements OnInit {

  foods: Food[] = [
    {value: 'Tcs-0', viewValue: 'TCS'},
    {value: 'Cognizant-1', viewValue: 'Cognizant'},
    {value: 'Wipro-2', viewValue: 'Wipro'}
  ];

  managers: manager[] = [
    {value: 'Harshada-0', viewValue: 'Harshada'},
    {value: 'Prince-1', viewValue: 'Prince'},
    {value: 'Vijayeta-2', viewValue: 'Vijayeta'}
  ];

  
  createds: created[] = [
    {value: 'Mathivanan-0', viewValue: 'Mathivanan'},
    {value: 'Suresh Babu-1', viewValue: 'Suresh Babu'},
    {value: 'Sufiyan-2', viewValue: 'Sufiyan'},
    {value: 'Ashima-3', viewValue: 'Ashima'},
    {value: 'Vidhya R-4', viewValue: 'Vidhya R'},
    {value: 'Dhanashri-5', viewValue: 'Dhanashri'},
    {value: 'Shabber Shaik-6', viewValue: 'Shabber Shaik'}

  ];

  expranges: exprange[] = [
    {value: 'Zero-one-0', viewValue: 'zero-one'},
    {value: '1-2-1', viewValue: '1-2'},
    {value: '2-3-2', viewValue: '2-3'},
    {value: '3-4-3', viewValue: '3-4'},
    {value: '4-5-4', viewValue: '4-5'},
    {value: '5-6-5', viewValue: '5-6'},
    {value: '6-7-6', viewValue: '6-7'},
    {value: '7-8-7', viewValue: '7-8'},
    {value: '8-9-8', viewValue: '8-9'},
    {value: '9-10-9', viewValue: '9-10'},
    {value: '10+-10', viewValue: '10+'}
  ];

  positions: position[] = [
    {value: '0-0', viewValue: '0'},
    {value: '1-1', viewValue: '1'},
    {value: '2-2', viewValue: '2'},
    {value: '3-3', viewValue: '3'},
    {value: '4-4', viewValue: '4'},
    {value: '5-5', viewValue: '5'},
    {value: '6-6', viewValue: '6'},
    {value: '7-7', viewValue: '7'},
    {value: '8-8', viewValue: '8'},
    {value: '9-9', viewValue: '9'},
    {value: '10-10', viewValue: '10'},
    {value: '10+-10', viewValue: '10+'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
