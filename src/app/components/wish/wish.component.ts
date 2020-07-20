import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Wish } from 'app/models/wishes';
import { ActivatedRoute } from '@angular/router';
import { WishService } from 'app/services/wish.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit , OnDestroy {

wishData: Wish = new Wish();
wishId;
private unsubscribe$ = new Subject<void>();

constructor(private route: ActivatedRoute,
private wishService: WishService)

{
if (this.route.snapshot.params['id']) {
this.wishId = this.route.snapshot.paramMap.get('id');
}
}


      ngOnInit() {
          this.wishService.getPostbyId(this.wishId)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(
          (result: Wish) => {
          this.wishData = result;
              }
                );
                  }

ngOnDestroy() {
this.unsubscribe$.next();
this.unsubscribe$.complete();
}

}
