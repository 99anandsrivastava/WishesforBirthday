import { Component, OnInit ,ViewChild, AfterViewInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Wish } from 'app/models/wishes';
import { DatePipe } from '@angular/common';
import { WishService } from 'app/services/wish.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from 'process';
import { SnackbarService } from 'app/services/snackbar.service';
import { TdTextEditorComponent } from '@covalent/text-editor';
@Component({
  selector: 'app-wish-editor',
  templateUrl: './wish-editor.component.html',
  styleUrls: ['./wish-editor.component.css'],
  providers: [DatePipe]
})
export class WishEditorComponent implements OnInit , AfterViewInit {
  @ViewChild('myeditor') editor: TdTextEditorComponent;
  public Editor = ClassicEditor;
  ckeConfig: any;
  wishData = new Wish();
  formTitle = 'Add';
  wishId = '';
  options: any = {
    lineWrapping: true,
    toolbar: false
  };
  constructor(private route: ActivatedRoute,
    private datePipe: DatePipe,
    private wishService: WishService,
    private router: Router,
    private snackService : SnackbarService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    this.editor.value = 'Wish..';
    
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
