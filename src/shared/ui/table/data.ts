import { ITableColumn, PersonCollection, SportList } from './types'

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

export const dataTableColumns2: ITableColumn<SportList>[] = [
	{
		headerText: 'Название спорта',
		key: 'name',
		classes: 'align-center',
		sortable: true,
	},
	{
		headerText: 'Место проведения',
		key: 'from',
		classes: 'align-center',
		sortable: true,
	},
	{
		headerText: 'Общее количество матчей',
		key: 'countMatches',
		classes: 'align-center',
		sortable: true,
	},
	{
		headerText: 'Нац. команда',
		key: 'teamName',
		classes: 'align-center',
		sortable: true,
	},
]

export const data2: SportList[] = [
	{
		id: '1',
		name: 'Баскетбол',
		from: 'Москва',
		countMatches: 100,
		teamName: 'Мароко',
	},
	{
		id: '2',
		name: 'Футбол',
		from: 'Питер',
		countMatches: 32,
		teamName: 'Испания',
	},
	{
		id: '3',
		name: 'Футбол',
		from: 'Москва',
		countMatches: 122,
		teamName: 'Италия',
	},
	{
		id: '4',
		name: 'Хокей',
		from: 'Дублин',
		countMatches: 143,
		teamName: 'Канада',
	}
]