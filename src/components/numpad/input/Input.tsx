import React, { FC } from 'react'
import styles from './Input.module.css'

interface Props {
	valData: string
	setValData : (e: React.ChangeEvent<HTMLInputElement>) => void
	incorrected: boolean
}

const Input:FC<Props> = ({setValData, incorrected, valData}) => {


	
	return (
	<div className={styles.input}>
		<input className={styles.input__text} type="text" value={valData} onChange={setValData}/>
		<div className={styles.input__error}>{incorrected ? "Enter valid amount" : ''}</div>
	</div>
	) 
}

export default Input
