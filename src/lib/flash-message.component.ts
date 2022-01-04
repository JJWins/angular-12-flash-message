import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jjwins-flash-message',
  template: `
    <div *ngIf="grayOut" [ngClass]="{ grayOut: grayOut }"></div>
    <div
      class="flash-message alert"
      [ngClass]="{'alert-primary':alertPrimary,'alert-secondary':alertSecondry,'alert-success':alertSuccess, 'alert-warning': alertWarning, 'alert-danger':alertDanger, 'alert-info':alertInfo, 'alert-light':alertLight, 'alert-dark':alertDark, cssClass: _showContent}"
      [hidden]="!_showContent">
      {{ message }}
      <button *ngIf="showCloseBtn"
        class="btn-close position-absolute end-0 pe-4"
        aria-label="Close"
        (click)="closeAlert()"
      ></button>
    </div>
  `,
  styles: [
    '.grayOut {background-color: #333;opacity: 0.7;position: fixed;top: 0px;left: 0px;height: 100%;width: 100%;overflow: hidden;z-index: 9998;} .flash-message{z-index:10000}'
  ],
})
export class FlashMessageComponent implements OnInit {
    @Input() alertPrimary = false;
    @Input() alertSecondry = false;
    @Input() alertSuccess = false;
    @Input() alertDanger = false;
    @Input() alertWarning = false;
    @Input() alertInfo = false;
    @Input() alertLight = false;
    @Input() alertDark = false;
    @Input() cssClass = '';
    @Input() message = '';
    @Input() grayOut = false;
    @Input() timeOut = 0
    

    _showContent: boolean = false;
    showCloseBtn = false;

    constructor() {}

    ngOnInit(): void {
      this._showContent = true;
        if(this.timeOut){
            setTimeout(() => {
                this.grayOut = false;
                this._showContent = false;
            }, this.timeOut);
        }
        else{
            this.showCloseBtn = true
        }
    }

    closeAlert() {
        this.grayOut = false;
        this._showContent = false;
    }
}
