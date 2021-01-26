import { Component, OnInit } from '@angular/core';
import { EditorModule } from '@store/editor';
import Vditor from 'vditor';
// import 'node_modules/vditor/dist/index.css';

@Component({
  selector: 'app-vditor',
  templateUrl: './vditor.component.html',
  styleUrls: ['./vditor.component.scss']
})
export class VditorComponent implements OnInit {

  vditor!: Vditor;
  // mdValue = 'Hello, Vditor + Angular!';

  constructor(public editorModule: EditorModule) {

  }

  toolbar = [
    'emoji',
    'headings',
    'bold',
    'italic',
    'strike',
    'link',
    '|',
    'list',
    'ordered-list',
    'check',
    'quote',
    'line',
    'code',
    'inline-code',
    'table',
    '|',
    'undo',
    'redo',
    'edit-mode',
  ];

  ngOnInit(): void {
    this.vditor = new Vditor('vditor', {
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: true,
      },
      mode: 'sv',
      toolbar: this.toolbar,
      after: () => {
        this.vditor.setValue(this.editorModule.state.mdValue);
      },
      input: (value: string) => {
        this.editorModule.state.mdValue = value;
        console.log(this.editorModule.state.mdValue);
      }
    });
  }

}
