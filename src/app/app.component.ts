import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { Moment } from 'moment';
import * as moment from 'moment-timezone';

import { OwlDateTimeComponent } from '../../projects/picker/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('date_range_component', { static: true })
  date_range_component: OwlDateTimeComponent<AppComponent>;

  @ViewChild('input', { static: true })
  inputRef;

  public selectedMoments: Moment[] = [
    moment('2019-03-11T08:00:00+11:00').tz('America/Los_Angeles'),
    moment('2019-03-11T15:00:00+11:00').tz('America/Los_Angeles')
  ];


  now = new Date();
  // currentValue: Date = new Date('4/21/2020, 12:00 AM');
  currentValue: Date = null;
  endValue: Date = new Date('4/21/2020, 11:59 PM');

  open_once = false;

  ngAfterViewInit() {
  }

  clickSchedule(i) {
    console.log(i);
  }

  onChange(ev) {
    console.log('onChange', ev);
    this.currentValue = ev;
  }
}
