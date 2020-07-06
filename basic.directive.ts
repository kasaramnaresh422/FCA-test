
import { Directive,HostListener,ElementRef,Input } from "@angular/core";

@Directive({
    selector:"[basic]"
})
export class BasicDirective{

    @Input("basic")
    color:string ;

    constructor(private element:ElementRef){
        console.log(element);        
    }

    @HostListener("click")
    m1(){
        this.element.nativeElement.style.backgroundColor = this.color;
        this.element.nativeElement.style.color = "white";
    }

    @HostListener("dblclick")
    m2(){
        this.element.nativeElement.style.backgroundColor = "";
        this.element.nativeElement.style.color = "black";
    }

}