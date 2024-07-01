export interface ITableColumn<T> {
  key: string;
  headerText: string;
  styles?: React.CSSProperties;
  classes?: any;
  html?(data: T): any;
  sortable?: boolean;
}

export interface PersonCollection {
	id: string;
	name: string;
	lastUpdate: string;
	lastUpdated: string;
}

export interface SportList {
	id: string;
	name: string,
	from: string,
	countMatches: number,
	teamName: string,
}

export type T  =  { [key: string]: any; };
