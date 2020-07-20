import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Wish } from 'app/models/wishes';
import { DatePipe } from '@angular/common';
import { WishService } from 'app/services/wish.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from 'process';
import { SnackbarService } from 'app/services/snackbar.service';

@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.css'],
  providers: [DatePipe]
})
export class WishEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  ckeConfig: any;
  wishData = new Wish();
  formTitle = 'Add';
  wishId = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private wishService: WishService,
    private router: Router,
    private snackService : SnackbarService) { }

  ngOnInit(): void {
    
  }

  saveWishPost() {
    this.wishData.createdDate = this.datePipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');
    this.wishService.createWish(this.wishData).then(
    () => {
      this.snackService.showSnackBar('Wish Successfully Posted');
      this.router.navigate(['/']);
    }
    );
    }

    

    cancel() {
      this.router.navigate(['/']);
      }

}
