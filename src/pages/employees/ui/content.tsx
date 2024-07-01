import UI from '../../../shared/ui'
import { data, dataTableColumns } from '../../../shared/ui/table/data'

function EmployeesContent() {
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
