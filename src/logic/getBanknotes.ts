import { FailMessage, IBanknotes, ICash } from "../types";
import biggestAmmount from "./biggestAmount";
import distribution from "./distribution";
import residualAmmount from "./residualAmmount";

const getBanknotes = (amountRequired: number, limits: IBanknotes): ICash | FailMessage => {
  
	if(biggestAmmount(limits, amountRequired)){
		return {message: 'sorry'}
	}
	const Residue = residualAmmount(limits, amountRequired)
	const validAmmount = amountRequired - Residue

	const givedBanknotes = distribution(validAmmount, {...limits})

	return {...givedBanknotes, Residue} 
}

export default getBanknotes;