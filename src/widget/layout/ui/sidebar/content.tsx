import { Button, makeStyles, tokens } from '@fluentui/react-components'
import { Activity } from 'iconsax-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../lib'

const useStyles = makeStyles({
	root: {
		maxWidth: '280px',
		width: '100%',
		maxHeight: '100vh',
		padding: '5vh 15px',
	},
	container: {
		// width: '250px',
		// position: 'fixed',
		position: 'sticky',
		height: '90vh',
		padding: '15px',
		backgroundColor: tokens.colorNeutralBackground1,
		borderRadius: '15px',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'start',
		gap: '10px',

		'> button': {
			width: '100%',
			borderRadius: '6px',
			display: 'flex',
			justifyContent: 'start',
			alignItems: 'center'
		}
	}
})

const SideBar = () => {
	const styles = useStyles();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{
					routes.map((Route) => (
						<Button
							key={Route.id}
							icon={<Activity/>}
							children={Route.name}
							onClick={() => navigate(Route.path)}
							appearance={pathname === Route.path ? 'primary' : 'transparent'}
						/>
					))
				}
			</div>
		</div>
	);
};

export default SideBar;