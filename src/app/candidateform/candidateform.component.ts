import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


interface Food {
  value: string;
  viewValue: string;
}

interface Hire {
  value: string;
  viewValue: string;
}

interface Date {
  value:string;
  viewValue: string;
}

interface exprange {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrls: ['./candidateform.component.css']
})
export class CandidateformComponent implements OnInit {



  foods: Food[] = [
    {value: 'Tcs-0', viewValue: 'TCS'},
    {value: 'Cognizant-1', viewValue: 'Cognizant'},
    {value: 'Wipro-2', viewValue: 'Wipro'}
  ];

  year: Date[] = [
    {value: 'Jan', viewValue: 'Jan 2020'},
    {value: 'Feb', viewValue: 'February 2020'},
    {value: 'Mar', viewValue: 'March 2020'},
    {value: 'Apr', viewValue: 'April 2020'},
    {value: 'May', viewValue: 'May 2020'},
    {value: 'june', viewValue: 'June 2020'},
    {value: 'July', viewValue: 'July 2020'},
    {value: 'Aug', viewValue: 'August 2020'},
    {value: 'Sep', viewValue: 'September 2020'},
    {value: 'Oct', viewValue: 'October 2020'},
    {value: 'Nov', viewValue: 'November 2020'},
    {value: 'Dec', viewValue: 'December 2020'},


  ];

  type: Hire[] = [

    { value: 'c2h', viewValue: 'C2H' },
    { value: 'Direct', viewValue: ' Direct Hire' },
    { value: 'Fixed', viewValue: 'Fixed Term' }
  ]


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

  myControl = new FormControl();
  options: string[] = ['xzx', 'xyx', 'zx'];
  filteredOptions: Observable<string[]>;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

 this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
