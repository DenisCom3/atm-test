import React, { FC,  useState } from 'react'
import Button from './button/Button'
import Input from './input/Input'
import styles from './Numpad.module.css'

interface Props {
	getResult: (v: number) => void
}

const Numpad:FC<Props> = ({getResult}) => {

	const buttons = ['1','2','3','4','5','6','7','8','9','.','0','$']

	const [incorrect, setIncorrect] = useState<boolean>(false)
	const [InputValues, setInputValues] = useState<string>('')

	const isCorrected = (value: string) => {
		let corrected = true
		if(value === '') corrected = false
		else if (value[0]=== '0' || value[0] === '.') corrected = false
		else if (value.includes('.') && (value.match(/\./g)!.length > 1 || value.split('.')[1].length > 2)) corrected = false
		setIncorrect(!corrected)
	}


	const setValidInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.replace(/[^0-9.]/g, () => '')
		setInputValues(value)
		isCorrected(value)
    };

	const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const value = (e.target as HTMLButtonElement).innerText
		
		switch (value) {
			case '$':
				if(!incorrect) {
					getResult(parseFloat(InputValues))
					;}
				break;
			default:
				setInputValues((prev) => prev+value)
				isCorrected(InputValues+value)
				break;
		}
	
	  
	}


	return (
		<div>
		<Input incorrected={incorrect} valData={InputValues} setValData={setValidInputData} />
		<div className={styles.buttons}>
      {buttons.map(btn => 
        <Button key={btn} type={btn} click={handlerClick} />
      )}  
     
      </div>
		</div>
	)
}

export default Numpad
