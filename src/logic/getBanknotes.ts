import { FailMessage, IBanknotes, ICash } from "../types";
import biggestAmmount from "./biggestAmount";
import residualAmmount from "./residualAmmount";

const getBanknotes = (amountRequired: number, limits: IBanknotes): ICash | FailMessage => {
  
	if(biggestAmmount(limits, amountRequired)){
		return {message: 'sorry'}
	}
	const Residue = residualAmmount(limits, amountRequired)
	const validAmmount = amountRequired - Residue



	function distribution(amount: number, nominals: number[]) : any{
		if(amount === 0 ) return {}
		if( !nominals.length) return;
	
		let currentNominal = nominals[0]
		//сколько банкнот текущего номинала
		let avaibleNotes = limits[currentNominal ]
		// сколько нужно банкнот
		let notesNeeded = Math.floor(amount/ currentNominal)
		// сколько будет выдано
		let numberOfNotes = Math.min(avaibleNotes, notesNeeded)
		
		for (let i = numberOfNotes; i >= 0; i--) {
			
	
		  let result = distribution(amount - i* currentNominal, nominals.slice(1))
		  if(result){
			  return i ? {[currentNominal]: i,  ...result} : result
		  }
			
		}
	}
	const nominals = Object.keys(limits).map(Number).sort((a,b)=> b-a)
	const givedBanknots = distribution(validAmmount, nominals)

	return {...givedBanknots, Residue}
}


export default getBanknotes;