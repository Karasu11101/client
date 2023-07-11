import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [MessageService]
})
export class ContactsComponent {
  @ViewChild('messageModal', {static: false}) modalMess: ElementRef;
  Editor: any = ClassicEditor;
  editorconfig = {
    toolbar: {
      items: [
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'indent',
          'outdent',
          '|',
          'codeBlock',
          'insertTable',
          'undo',
          'redo',
      ]
  },
  image: {
      toolbar: [
          'imageStyle:full',
          'imageStyle:side',
          '|',
          'imageTextAlternative'
      ]
  },
  table: {
      contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells'
      ]
  },
  height: 300,
  }

  constructor(private modal: NgbModal, private message: MessageService, private router: Router) {}

  onSubmit(form) {
    console.log(form.value);
    this.open(this.modalMess);
  }

  open(content: any) {
    this.modal.open(content, {ariaLabelledBy: 'modale messaggio', size: 'xl', centered: true}).result
    .then((res) => {
      console.log('ringraziamento');
      this.message.add({severity: 'success', summary: 'Successo', detail: 'Messaggio inviato con successo!', life: 2000});
      setTimeout(() => {
        this.router.navigateByUrl('home');
      }, 2000);
    })
    .catch((res) => {
      console.log('errore pagina');
      this.message.add({severity: 'error', summary: 'Errore', detail: 'Errore durante l\'invio del messaggio!', life: 2000});
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
}

}
