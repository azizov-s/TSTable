import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EmployeesContent from '../../../pages/employees'
import SportListContent from '../../../pages/sportList'
import Layout from '../../../widget/layout'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				index: true,
				path: '/',
				element: <EmployeesContent />,
			},
			{
				index: true,
				path: '/sport',
				element: <SportListContent />,
			},
		],
	},
])

export function BrowserRouter() {
	return <RouterProvider router={router} />
}
