import React, { FC,  useState } from 'react'
import Button from './button/Button'
import Input from './input/Input'
import styles from './Numpad.module.css'

interface Props {
	getResult: (v: number) => void
	setLoader: (v:boolean) => void
}

const Numpad:FC<Props> = ({getResult,setLoader}) => {

	const buttons = ['1','2','3','4','5','6','7','8','9','.','0','$']

	const [incorrect, setIncorrect] = useState<boolean>(false)
	const [InputValues, setInputValues] = useState<string>('')

	const audio = new Audio('http://docs.google.com/uc?export=open&id=1xBome5Z7igOBG67mOZMWBL9mfX2ihdu2')
	

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
					setLoader(true)
					audio.play()
					setTimeout(() => {
						getResult(parseFloat(InputValues))
						setLoader(false)
					},3000)

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
