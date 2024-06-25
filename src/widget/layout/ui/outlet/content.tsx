import { makeStyles, tokens } from '@fluentui/react-components'
import { Outlet } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
		maxWidth: '100%',
		width: '100%',
		padding: '5vh 0'
	},
	conteiner: {
		borderRadius: '15px',
		padding: '15px',
		width: '100%',
		height: '100%',
		backgroundColor: tokens.colorNeutralBackground1,
	}
})

const ZOutlet = () => {
	const styles = useStyles();
	return (
		<div className={styles.root}>
			<div className={styles.conteiner}>
				<Outlet/>
			</div>
		</div>
	);
};

export default ZOutlet;