import React, { FC } from 'react'
import { IBanknotes } from '../../types'

interface Props {
	balance: IBanknotes
}

const Balance: FC<Props> = ({balance}) => {
	return (
		<div>
			{Object.keys(balance).reverse().map((key) =>
          <div key={key} className="">{key}: {balance[key]} </div>
          )}
		</div>
	)
}

export default Balance
