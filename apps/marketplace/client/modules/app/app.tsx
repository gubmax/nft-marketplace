import { useRoutes } from 'react-router-dom'

import { routes } from 'client/routes.js'
import CommonSvg from './common-svg/common-svg.js'
import ProgressBar from './progress-bar/progress-bar.js'

function App() {
	const route = useRoutes(routes)

	return (
		<>
			<ProgressBar />
			{route}
			<CommonSvg />
		</>
	)
}

export default App
