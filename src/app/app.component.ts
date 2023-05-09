import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'froala';

  ngAfterViewInit(): void {
    // @ts-ignore
    FroalaEditor.DefineIcon('boton1', { NAME: 'info', SVG_KEY: 'help' });
    // @ts-ignore
    FroalaEditor.RegisterCommand('boton1', {
      title: 'Boton1',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function () {
        alert('boton1!');
      }
    });
    // @ts-ignore
    FroalaEditor.DefineIcon('boton2', { NAME: 'info', SVG_KEY: 'help' });
    // @ts-ignore
    FroalaEditor.RegisterCommand('boton2', {
      title: 'Boton2',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function () {
        alert('boton2!');
      }
    });
    // @ts-ignore
    FroalaEditor.DefineIcon('boton3', { NAME: 'info', SVG_KEY: 'help' });
    // @ts-ignore
    FroalaEditor.RegisterCommand('boton3', {
      title: 'Boton3',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function () {
        alert('boton3!');
      }
    });
    // @ts-ignore
    new FroalaEditor('#editor', {
      // Add the custom buttons in the toolbarButtons list, after the separator.
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', 'html', '|', 'undo', 'redo', 'trackChanges', 'markdown', '|', 'boton1', 'boton2', 'boton3'],
      dragInline: false,
    })
  }
}
