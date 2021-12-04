import { IBanknotes } from "../types";

// Вычисление максимальной величины суммы, которую банкомат сможет выдать
const biggestAmmount = (banknotes: IBanknotes, amount: number): boolean => {
	const maxAmmount: number = Object.keys(banknotes).reduce((acc, i) => {
		acc = acc + (banknotes[i]*parseInt(i) )
		
		return acc
	}, 0)

	return maxAmmount < amount
}

export default biggestAmmount;