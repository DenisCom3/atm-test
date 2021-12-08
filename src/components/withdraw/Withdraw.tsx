import React, { FC } from 'react'
import { FailMessage, ICash } from '../../types'
import styles from './Withdraw.module.css'

interface Props {
	result: ICash | FailMessage | undefined
}

const Withdraw:FC<Props> = ({result}) => {

	if(result === undefined) return <div className={styles.std}></div>


	const renderICash = (result: ICash) => {
		const renderICash = Object.keys(result)
		renderICash.unshift(...renderICash.slice(renderICash.length-1, 1))
		return renderICash
	}  





	return (
		<div className={styles.output}>
		{(Object.keys(result).length > 1) 
		?
		renderICash(result as ICash).map((key) => 
		<div className={styles.output__item} key={key} >{key} : {(result as ICash)[key]} </div>) 
		:
		<div className={styles.output__item} >{result.message === undefined ? `Residue: ${(result as ICash).residue}` : 'ATM cannot dispense this amount'}</div>
		}
		</div>
	)
}

export default Withdraw
