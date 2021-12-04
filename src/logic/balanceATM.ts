import { IBanknotes, ICash } from "../types";

const balanceATM = (banknotsOnPeople: ICash, banknotsOnATM: IBanknotes): IBanknotes => {
	return Object.keys(banknotsOnATM).reduce((acc,i) =>{
		acc[i] = banknotsOnPeople[i] ? banknotsOnATM[i] - banknotsOnPeople[i] : banknotsOnATM[i]
		return acc
	},{} as IBanknotes) 
}


export default balanceATM