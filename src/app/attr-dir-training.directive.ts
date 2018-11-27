import { Directive } from '@angular/core';

import {ElementRef } from '@angular/core';

import {HostListener } from '@angular/core';

import { Input } from '@angular/core'

@Directive({
  selector: '[appHighlight]'
})
export class AttrDirTrainingDirective {

  //@Input() highlightColor: string;

  @Input('appHighlight') highlightColor: string;

  constructor(private el:ElementRef) { 
    //el.nativeElement.style.backgroundColor = 'yellow';

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
