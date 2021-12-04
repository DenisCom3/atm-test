import { IBanknotes } from "../types";

// Вычисление остатка, который не может быть выдан
const residualAmmount = (banknotes: IBanknotes, amount: number): number => {
	const minBill = Object.keys(banknotes).map(Number).reduce((min,i)=>{
		return min < i ? min : i
	}) 
	let residual = amount % minBill

	return parseFloat(residual.toFixed(2))
}

export default residualAmmount;
