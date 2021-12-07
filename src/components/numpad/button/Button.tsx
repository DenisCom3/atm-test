import React, { FC } from 'react'
import styles from './Button.module.css'

interface Props {
	type: string
	click: (e:React.MouseEvent<HTMLButtonElement>)=> void
}

const Button:FC<Props> = ({type, click}) => {
	return (
		<button className={styles.button} onClick={click}>{type}</button>
	)
}

export default Button
