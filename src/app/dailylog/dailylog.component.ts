import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



interface Food {
  value: string;
  viewValue: string;
}

interface Hire {
  value: string;
  viewValue: string;
}

interface relocate {
  value: string;
  viewValue: string;
}

interface source {
  value: string;
  viewValue: string;
}

interface exprange {
  value: string;
  viewValue: string;
}

interface notice {
  value: string;
  viewValue: string;
}

interface consent {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dailylog',
  templateUrl: './dailylog.component.html',
  styleUrls: ['./dailylog.component.css']
})
export class DailylogComponent implements OnInit {
  selectedValue: string;
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  foods: Food[] = [
    { value: 'Tcs-0', viewValue: 'TCS' },
    { value: 'Cognizant-1', viewValue: 'Cognizant' },
    { value: 'Wipro-2', viewValue: 'Wipro' }
  ];

  type: Hire[] = [

    { value: 'c2h', viewValue: 'C2H' },
    { value: 'Direct', viewValue: ' Direct Hire' },
    { value: 'Fixed', viewValue: 'Fixed Term' }
  ]

  location: relocate[] = [
    { value: 'yes', viewValue: 'YES' },
    { value: 'no', viewValue: ' NO' },
    { value: 'maybe', viewValue: 'Maybe' }
  ]


  sources: source[] = [
    { value: 'Naukri-0', viewValue: 'Naukri' },
    { value: 'Monster-1', viewValue: 'Monster' },
    { value: 'LinkedIN-2', viewValue: 'LinkedIN' },
    { value: 'Referral-3', viewValue: 'Referral' },
    { value: 'Others-4', viewValue: 'Others' }
  ];

  expranges: exprange[] = [
    { value: 'Zero-one-0', viewValue: 'zero-one' },
    { value: '1-2-1', viewValue: '1-2' },
    { value: '2-3-2', viewValue: '2-3' },
    { value: '3-4-3', viewValue: '3-4' },
    { value: '4-5-4', viewValue: '4-5' },
    { value: '5-6-5', viewValue: '5-6' },
    { value: '6-7-6', viewValue: '6-7' },
    { value: '7-8-7', viewValue: '7-8' },
    { value: '8-9-8', viewValue: '8-9' },
    { value: '9-10-9', viewValue: '9-10' },
    { value: '10+-10', viewValue: '10+' }
  ];

  notices: notice[] = [
    { value: 'immediate-0', viewValue: 'Immediate' },
    { value: '15-30-1', viewValue: '15-30' },
    { value: '30-45-2', viewValue: '30-45' },
    { value: '45-60-3', viewValue: '45-60' },
    { value: '60-90-4', viewValue: '60-90' }
  ];

  consents: consent[] = [
    { value: 'Direct-0', viewValue: 'Direct' },
    { value: 'Fixed term-1', viewValue: 'Fixed term' },
    { value: 'C2H-2', viewValue: 'C2H' },
    { value: 'Okay for any-3', viewValue: 'Okay for any' }
  ];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  // dailylogFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  // dailyform:FormGroup = new FormGroup({
  //   sgsempid: new FormControl('', Validators.required),
  //   sgsempname: new FormControl('', Validators.required),
  //   clientname: new FormControl('', Validators.required),
  //   internalreqid: new FormControl('', Validators.required),
  //   hiringtype: new FormControl('', Validators.required), 
  //   source: new FormControl('', Validators.required),
  //   profilecount: new FormControl('', Validators.required),
  //   candidatename: new FormControl('', Validators.required),
  //   candidatemobile: new FormControl('', Validators.required),
  //   candidateemailild: new FormControl('', Validators.required),
  //   experiencerange: new FormControl('', Validators.required),
  //   noticeperiod: new FormControl('', Validators.required),
  //   candidateconsent: new FormControl('', Validators.required),
  //   preferredlocation: new FormControl('', Validators.required),
  //   relocation: new FormControl('', Validators.required),
  //   currentctc: new FormControl('', Validators.required),
  //   expectedctc: new FormControl('', Validators.required),
  //   skills: new FormControl('', Validators.required),
  //   oskills: new FormControl('', Validators.required)
  // });

  ngOnInit() {
    // this.dailylogFormGroup = this.fb.group({
    //   firstCtrl: ['', Validators.required]
    // });
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

  // uploadFileToActivity() {
  //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });

  // }
}
