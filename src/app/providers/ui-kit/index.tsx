import { FluentProvider, tokens, webLightTheme } from '@fluentui/react-components'
import { ReactNode } from 'react'

const UIKit = (props: {children: ReactNode}) => {
	return (
		<FluentProvider 
			style={{background: tokens.colorNeutralBackground4}}
			theme={webLightTheme}
			children={props.children}
		/>
	);
};

export default UIKit;