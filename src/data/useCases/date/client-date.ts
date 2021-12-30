import { GetYearsByRecords } from '../../../domain/useCases/DatesByRecords/year-by-records';
import { FormatDateRecord } from '../../../domain/useCases/DatesByRecords/format-date-record';
export class DateClientFormatter
  implements GetYearsByRecords, FormatDateRecord
{
  getYears({ records }: GetYearsByRecords.Params) {
    if (!records) return [new Date().getFullYear()];
    const years: Array<number> = [];
    records.forEach(({ createdAt }) => {
      const year = new Date(createdAt).getFullYear();
      if (!years.includes(year)) years.push(year);
    });

    return years;
  }
  formatDate({ date }: FormatDateRecord.Params): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay() + 1;

    const stringedMonth = month < 10 ? `0${month}` : month;
    const stringedDay = day < 10 ? `0${day}` : day;

    return `${stringedDay}/${stringedMonth}/${year}`;
  }
}
