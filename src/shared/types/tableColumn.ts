export interface ITableColumn<T> {
  key: string;
  headerText: string;
  styles?: React.CSSProperties;
  classes?: any;
  html?(data: T): any;
  sortable?: boolean;
}
