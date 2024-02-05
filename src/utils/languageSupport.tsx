import enGB from 'date-fns/locale/en-GB';

export const dateFormat = 'yyyy/MM/dd';

const Calendar = {
  sunday: '日',
  monday: '月',
  tuesday: '火',
  wednesday: '水',
  thursday: '木',
  friday: '金',
  saturday: '土',
  ok: 'OK',
  today: '今日',
  yesterday: '昨日',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',

  /**
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * */
  formattedMonthPattern: 'M月 yyyy',
  formattedDayPattern: dateFormat,
  dateLocale: enGB,
};

export default {
  common: {
    loading: 'Loading...',
    emptyMessage: 'No data found',
    remove: 'remove',
    clear: 'clear',
  },
  Plaintext: {
    unfilled: 'Unfilled',
    notSelected: 'Not selected',
    notUploaded: 'Not uploaded',
  },
  Pagination: {
    more: 'More',
    prev: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    limit: '{0} / page',
    total: 'Total Rows: {0}',
    skip: 'Go to{0}',
  },
  Calendar,
  DatePicker: {
    ...Calendar,
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: '過去7日間',
  },
  Picker: {
    noResultsText: 'No results found',
    placeholder: 'Select',
    searchPlaceholder: 'Search',
    checkAll: 'All',
  },
  InputPicker: {
    newItem: 'New item',
    createOption: 'Create option "{0}"',
  },
  Uploader: {
    inited: 'Initial',
    progress: 'Uploading',
    error: 'Error',
    complete: 'Finished',
    emptyFile: 'Empty',
    upload: 'Upload',
    removeFile: 'Remove File',
  },
  CloseButton: {
    closeLabel: 'Close',
  },
  Breadcrumb: {
    expandText: 'Show path',
  },
  Toggle: {
    on: 'Open',
    off: 'Close',
  },
};
