import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[appLoadingBtn]' })

export class LoadingBtnDirective implements OnChanges {

  @Input('appLoadingBtn') appLoadingBtn: boolean;
  text = '';


  constructor(private el: ElementRef) {

  }
  ngOnChanges(changes) {
    if (changes.appLoadingBtn) {
      if (changes.appLoadingBtn.currentValue) {
        // keep original text
        this.text = this.el.nativeElement.childNodes[0].innerHTML;
        this.el.nativeElement.childNodes[0].innerHTML = `
        <div class="spinner spinner-sm">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>`;
        this.el.nativeElement.setAttribute('disabled', true);
      } else if (this.text) {
        this.el.nativeElement.childNodes[0].innerHTML = this.text;
        this.el.nativeElement.removeAttribute('disabled');
      }
    }
  }
}
