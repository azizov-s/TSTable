import { Button, Title3, makeStyles } from '@fluentui/react-components'
import { Add, SearchNormal } from 'iconsax-react'
import { memo } from 'react'

interface PropsTypes {
	title: string
}

const useStyles = makeStyles({
	root: {
		width: '100%',
		gap: '15px',

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'start',
		alignItems: 'start',
	'> div' : {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
			'> button' : {
				borderRadius: '6px',
			},
		}
	},
	span : {
		width: '100%',
		border: '1px solid #e0e0e0',
		borderRadius: '6px',
	},
})

const Searchbar = (props: PropsTypes) => {
	const styles = useStyles();
	return (
		<div className={styles.root}>
			<Title3 children={props.title}/>
			<span className={styles.span}/>
			<div>
				<Button
					icon={<SearchNormal/>}
					appearance='primary'
				/>
				<Button
					icon={<Add/>}
					appearance='primary'
					children='Добавить'
				/>
			</div>
		</div>
	);
};

export default memo(Searchbar);