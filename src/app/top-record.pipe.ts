import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topRecord',
  pure: true,
})
export class TopRecordPipe implements PipeTransform {
  transform(value: any[], ...args: number[]): any[] {
    const [top] = args;
    return [...value].splice(0, top) || [];
  }
}
