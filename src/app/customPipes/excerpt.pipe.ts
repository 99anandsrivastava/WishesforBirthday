import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(content: string) {
    const wishSummary = content.replace(/(<([^>]+)>)/ig, '');
    if (wishSummary.length > 300) {
    return wishSummary.substr(0, 300) + ' [...]';
    } else {
    return wishSummary;
    }
    }

}
