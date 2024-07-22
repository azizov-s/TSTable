import { ITableColumn } from '../../../shared/types'
import { PersonCollection } from './types'

export const data: PersonCollection[] = [
	{
		id: '1',
		name: 'Джейк',
		lastUpdate: '20-12-2022',
		lastUpdated: '19-11-2021',
	},
	{
		id: '2',
		name: 'Бейл',
		lastUpdate: '20-12-2001',
		lastUpdated: '19-11-2021',
	},
	{
		id: '3',
		name: 'Kонстантин',
		lastUpdate: '20-12-2022',
		lastUpdated: '19-11-2021',
	},
	{
		id: '4',
		name: 'Рон',
		lastUpdate: '20-12-2022',
		lastUpdated: '19-11-2021',
	},
	{
		id: '5',
		name: 'Док Стивен',
		lastUpdate: '20-12-2022',
		lastUpdated: '19-11-2021',
	},
]

export const dataTableColumns: ITableColumn<PersonCollection>[] = [
	{
		headerText: 'Автор',
		key: 'name',
		classes: 'align-center',
		sortable: true,
	},
	{
		headerText: 'Последнее обновление',
		key: 'lastUpdate',
		classes: 'align-center',
		sortable: true,
	},
	{
		headerText: 'Первое обновление',
		key: 'lastUpdated',
		classes: 'align-center',
		sortable: true,
	}
]