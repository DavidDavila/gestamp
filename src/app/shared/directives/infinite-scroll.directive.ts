import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[appInfiniteScroll]",
})
export class InfiniteScrollDirective {
  @Output() scrollPosition = new EventEmitter();
  @Input("loading") loading: boolean;
  constructor(public el: ElementRef) {}
  @HostListener("scroll", ["$event"])
  onScroll(event) {
    if (this.loading) {
      event.preventDefault();
    }
    const top = event.target.scrollTop;
    const height = this.el.nativeElement.scrollHeight;
    const offset = this.el.nativeElement.offsetHeight;

    // emit bottom event
    if (top > height - offset - height / 2) {
      this.scrollPosition.emit();
    }
  }
}
