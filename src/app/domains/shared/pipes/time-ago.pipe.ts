import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
		const date = new Date(value).getTime();

	   // Not a valid date
	   if (isNaN(date)) return ''

	   const now = Date.now();
	   const diffInTime = now - date;
	   const diffInHours = Math.round(diffInTime / (1000 * 3600));

	   if (diffInHours < 24) {
		     return this.applyFormat(diffInHours, 'hour');
		   }

	   const diffInDays = Math.floor(diffInHours / 24);
	   if (diffInDays < 30) {
		     return this.applyFormat(diffInDays, 'day');
		   }

	   const diffInMonths = Math.floor(diffInDays / 30);
	   if (diffInMonths < 12) {
		     return this.applyFormat(diffInDays, 'month');
		   }

	   const diffInYears = Math.floor(diffInMonths / 12);
	   return this.applyFormat(diffInYears, 'year');
	 }

	private applyFormat(value: number, unit: string): string {
		const plural = value !== 1 ? 's' : '';
		return `${value} ${unit}${plural} ago`;
	}

  }
