import '../../shared/main.css'
import { BrowserRouter } from './router/RouterProvider'
import UIKit from './ui-kit'

export function Providers() {
	return (
		<UIKit>
			<BrowserRouter />
		</UIKit>
	)
}
