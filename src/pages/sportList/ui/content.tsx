import UI from '../../../shared/ui'
import { data2, dataTableColumns2 } from '../../../shared/ui/table/data'

function SportListContent() {
	return (
		<>
			<UI.Searchbar title='Спортивный лист'/>
			<UI.Table 
			 	data={data2}
				columns={dataTableColumns2}
			/>
		</>
	)
}

export default SportListContent
