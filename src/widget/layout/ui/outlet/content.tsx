import { makeStyles, tokens } from '@fluentui/react-components'
import { Outlet } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
		maxWidth: '100%',
		width: '100%',
		padding: '5vh 0'
	},
	container: {
		width: '100%',
		minHeight: '90vh',
		padding: '15px',
		borderRadius: '15px',
		backgroundColor: tokens.colorNeutralBackground1,

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'start',
		alignItems: 'start',
		gap: '20px'
	},
})

const ZOutlet = () => {
	const styles = useStyles();
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<Outlet/>
			</div>
		</div>
	);
};

export default ZOutlet;