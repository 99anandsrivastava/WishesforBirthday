import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { WishService } from 'app/services/wish.service';
import { Wish } from 'app/models/wishes';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SnackbarService } from 'app/services/snackbar.service';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'app/models/appuser';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.css']
})
export class WishCardComponent implements OnInit , OnDestroy {
  wishPost: Wish[] = [];
  config: any; pageSizeOptions = [];
  private unsubscribe$ = new Subject<void>();
  appUser: AppUser;
  constructor(private wishService: WishService , private snackBarService: SnackbarService , private route: ActivatedRoute ,
    private authService: AuthService) {
    this.pageSizeOptions = [5, 10, 15];
const pageSize = localStorage.getItem('pageSize');
this.config = {
currentPage: 1,
itemsPerPage: pageSize ? +pageSize : this.pageSizeOptions[0]
};
   }

   ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.route.params.subscribe(
    params => {
    this.config.currentPage = +params['pagenum'];
    this.getBlogPosts();
    }
    );
    }

  getBlogPosts() {
    this.wishService.getAllWishes()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
    this.wishPost = result;
    });
}

delete(postId: string) {
  if (confirm('Are you sure')) {
  this.wishService.deleteWish(postId).then(
  () => {
  this.snackBarService.showSnackBar('Wish deleted successfully');
  }
  );
}
}

ngOnDestroy() {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
  }
}
