import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  transform(name: string) {
    const urlSlug = name.trim().toLowerCase().replace(/ /g, '-');
    return urlSlug;
    }

}
