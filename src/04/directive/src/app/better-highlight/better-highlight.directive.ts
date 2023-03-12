import { Input,Directive, ElementRef, Renderer2,OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highLighColor: string = 'green';
  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor: string ="";

  ngOnInit() { 
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue')
    this.backgroundColor= this.defaultColor;
  }
  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = this.highLighColor; 
  }
  @HostListener('mouseleave') mouseNotOver() {
    this.backgroundColor = this.defaultColor;
  }

  

}
