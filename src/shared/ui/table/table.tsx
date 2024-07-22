import { Body2, Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '@fluentui/react-components'
import { Edit, InfoCircle } from 'iconsax-react'
import { memo } from 'react'
import { ITableColumn } from '../../types'
interface IProps<T> {
	data: T[],
	columns: ITableColumn<T>[]
	editClick?: (item: T) => void,
	infoClick?: (item: T) => void,
}

const ZTable = <T,> (props: IProps<T>) => {
	const {columns, data} = props

	return (
		<Table
			sortable
			aria-label="Table with controlled sort"
			style={{ minWidth: "500px" }}
		>
			<TableHeader>
				<TableRow>
					{
						columns?.map( ( item, index: number ) => (
							<TableHeaderCell key={'headerCell' + index}>
								<Body2 children={item.headerText}/>
							</TableHeaderCell>
						))
					}
				</TableRow>
			</TableHeader>
			<TableBody>
				{
					data?.length ? 
					data?.map((item, index) => (
						<TableRow key={'row' + index}>
							{
								columns?.map(( column, ind ) => 
									<TableCell
										key={column.key + ind}
								  	children={column.html ? column.html(item) :
										item[column.key as keyof typeof item]}
									/>
								)
							}
							<TableCell width='88px'>
							 <Button 
							  appearance='transparent' 
							  icon={<Edit size={14}/>}/>	
							 <Button 
							  appearance='transparent' 
							  icon={<InfoCircle size={14}/>}/>	
							</TableCell>
						</TableRow>		
					)) : null
				}
			</TableBody>
		</Table>
	);
};

export default memo(ZTable);