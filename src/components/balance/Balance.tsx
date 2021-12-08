import React, { FC } from 'react'
import { IBanknotes } from '../../types'
import styles from './Balance.module.css'


interface Props {
	balance: IBanknotes
}

const Balance: FC<Props> = ({balance}) => {
	return (
		<div className={styles.balance}>
			<div className={styles.balance__item}>Banknotes on ATM</div>
			{Object.keys(balance).reverse().map((key) =>
          <div key={key} className={styles.balance__item}>{key}: {balance[key]} </div>
          )}
		</div>
	)
}

export default Balance
