import React, {FC, useContext } from 'react'
import MainContext from '../../context/MainContext'
import { IBanknotes } from '../../types'
import styles from './Options.module.css'

interface Props {
	options: IBanknotes[]
}

 const Options:FC<Props> = ({options,}) => {
	 
	const {variant, setVariant}=useContext(MainContext)

	
	const defaultButtonColor = [styles.button].join(' ')
	const activeButtonColor = [styles.button, styles.active].join(' ')

	return (
		<div>
			<div className={styles.options__output}>
				{JSON.stringify(variant)}
			</div>
			<div className={styles.options__input} >
			{options.map((p, i) =>
				<div className={(JSON.stringify(p) === JSON.stringify(variant)) ? activeButtonColor : defaultButtonColor} 
				key={i} onClick={() => {
					setVariant(p)}}>
						{i+1}
				</div> 
				)}
			</div>
		</div>
	)
}
export default Options
