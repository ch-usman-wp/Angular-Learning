 import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
 
  constructor(private elRef: ElementRef ,private renderr: Renderer2) { }
// propert binding 
@HostBinding('style.backgroundColor') backgroundColor: string | undefined;


@Input() defaultColor:string = 'transparent';
@Input('appBetterHighlight') hightlightColor:string = 'blue';
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderr.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseenter(eventData: Event){
    // this.renderr.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.hightlightColor;

  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderr.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


}
