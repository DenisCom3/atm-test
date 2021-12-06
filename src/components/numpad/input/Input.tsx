import React, { useState } from 'react'
import styles from './Input.module.css'

interface Props {
	
}

const Input = (props: Props) => {


	const [incorrect, setIncorrect] = useState<boolean>(false)
	const [validInputValues, setValidInputValues] = useState<string>('')


	const setValidInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.replace(/[^0-9.]/g, () => '')
		setValidInputValues(value)
		let corrected = true
		if(value === '') corrected = false
		else if (value[0]=== '0' || value[0] === '.') corrected = false
		else if (value.includes('.') && (value.match(/\./g)!.length > 1 || value.split('.')[1].length > 2)) corrected = false
		setIncorrect(!corrected)
    };
	return (
	<div className={styles.input}>
		<input className={styles.input__text} type="text" value={validInputValues} onChange={setValidInputData}/>
		<div className={styles.input__error}>{incorrect ? "Enter valid amount" : ''}</div>
	</div>
	) 
}

export default Input
