import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CommonControllerService} from '../../../../build/openapi';

@Component({
  selector: 'app-markdown-texteditor',
  templateUrl: './markdown-texteditor.component.html',
  styleUrls: ['./markdown-texteditor.component.scss']
})
export class MarkdownTexteditorComponent implements OnInit {

  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();
  @Input() description: string;
  @Input() labelLength = 2;
  @Input() textLength = 10;
  @Input() isTwoColumn = true;
  displayedTextLength: number;
  htmlDesc: string;


  constructor( private commonControllerService: CommonControllerService) {
  }

  ngOnInit(): void {
    if (this.isTwoColumn){
      const rightLength = this.textLength;
      this.textLength = Math.ceil(this.textLength / 2);
      this.displayedTextLength = rightLength - this.textLength;
    }
  }

  loadHtmlFromMd(event?): void {
    if (! event || event.keyCode === 13){
      this.commonControllerService.markDownToHtml(this.text, 'body', false, {httpHeaderAccept: 'text/html'}).subscribe(value => {
        this.htmlDesc = value;
        this.textChange.emit(this.text);
      });
    }
  }

}
