import {ElementRef, OnInit, Directive } from "@angular/core";

@Directive({
    selector: '[appBasicHighLight]'
})

export class BasicHighLightDirective implements OnInit {

   constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';

    }

}