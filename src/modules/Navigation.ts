import { Month } from "./Month";

export class Navigation {
  months: Month[];

  constructor(months: Month[]) {
    this.months = months;
  }

  getMonth(value: string | number) {
    const selectedMonth = this.months.find(month => month.name === value || month.month === value);

    if (!selectedMonth) return;

    return {
      name: selectedMonth.name,
      value: selectedMonth.month
    };
  }

  getMonths() {
    return this.months.map(month => ({
      name: month.name,
      value: month.month,
    }));
  }

  getDaysOfMonth(value: string | number) {
    const days = this.months.find(month => month.name === value || month.month === value)?.days;

    return days?.map(day => ({
      name: day.name,
      value: day.date
    }));
  }

  getNavLinksForMonth(value: string | number) {
    const month = this.getMonth(value);

    if (!month) return;

    const days = this.getDaysOfMonth(month.value);

    return days?.map(day => ({
      day,
      label: `${month.value}/${day.value} ${day.name}`,
      value: `#${month.value}-${day.value}`
    }));
  }

  getNavLinks() {
    const months = this.getMonths();

    return months.map(month => ({
      month,
      links: this.getNavLinksForMonth(month.name)
    }));
  }
}