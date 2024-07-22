import { useEffect } from 'react'
import useSWR from 'swr'
import UI from '../../../shared/ui'
import { data, dataTableColumns } from '../lib'

function EmployeesContent() {
	const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: dataEmployees, error, isLoading } = useSWR('https://21481c5a2a0ddb9a.mokky.dev/employees', fetcher)

	useEffect(() => {
		console.log(dataEmployees);
		
	}, [dataEmployees]);

	return (
		<>
			<UI.Searchbar title='Пользователи' />
			<UI.Table 
			 	data={data}
				columns={dataTableColumns}
			/>
		</>
	)
}

export default EmployeesContent
