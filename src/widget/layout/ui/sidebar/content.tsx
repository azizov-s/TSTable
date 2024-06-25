import { Button, makeStyles, tokens } from '@fluentui/react-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../lib'

const useStyles = makeStyles({
	root: {
		maxWidth: '280px',
		width: '100%',
		maxHeight: '100vh',
		padding: '5vh 30px',
	},
	container: {
		position: 'sticky',
		width: '220px',
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
			borderRadius: '12px',
		}
	}
})

const SideBar = () => {
	const styles = useStyles();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{
					routes.map((route) => (
						<Button
							key={route.id}
							children={route.name}
							onClick={() => navigate(route.path)}
							appearance={pathname === route.path ? 'primary' : 'transparent'}
						/>
					))
				}
			</div>
		</div>
	);
};

export default SideBar;