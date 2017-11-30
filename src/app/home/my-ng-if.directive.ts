import { Directive, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective implements OnInit{

  constructor(private viewcontainer: ViewContainerRef, private template: TemplateRef<Object>) { }

  ngOnInit() {
    const condition = true;

    if(condition) {
      this.viewcontainer.createEmbeddedView(this.template);
    } else {
      this.viewcontainer.clear();
    }
  }
}
