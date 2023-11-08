export interface ColumnInterface {
  name: string;
  label: string;
  field: string | ((row: any) => any);
  required?: boolean;
  align?: 'center' | 'left' | 'right';
  sortable?: boolean;
  sort?: (a: any, b: any, rowA: any, rowB: any) => number;
  headerClasses?: string;
}
