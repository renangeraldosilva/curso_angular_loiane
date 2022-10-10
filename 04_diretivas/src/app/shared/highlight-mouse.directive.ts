import { Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  backgroundColor: any;

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseOut(){
    // this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'transparent';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra.
    return this.backgroundColor;
  };

  constructor(
    // private _elementRef: ElementRef, private _renderer2: Renderer2
    ) { }

}
