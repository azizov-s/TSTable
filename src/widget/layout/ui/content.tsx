import { makeStyles } from '@fluentui/react-components'
import ZOutlet from './outlet'
import SideBar from './sidebar'

const useStyles = makeStyles({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'start',
	},
	container: {
		maxWidth: '1024px',
		width: '100%',
		minHeight: '100vh',
		display: 'flex',
	}
})

const Layout = () => {
	const styles = useStyles()
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<SideBar/>
				<ZOutlet/>
			</div>
		</div>
	)
}

export default Layout
