import { ITableColumn } from '../../../shared/types'
import { SportList } from './types'

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
	}
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
	},
]