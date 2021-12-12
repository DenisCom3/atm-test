import { IBanknotes } from "../types";

const BiggestAmountCupure =  (amountOfBanknotes: IBanknotes) => {
    const amount = Math.max(...Object.values(amountOfBanknotes));
    const currentBiggestCupure =  Object.keys(amountOfBanknotes)
        .reverse()
        .find((key: string) => amountOfBanknotes[key] === amount);

		return currentBiggestCupure as string
};
const distribution = (amount: number, banknotes: IBanknotes) => {
	let result: IBanknotes = {
		'5000': 0,
		'2000': 0,
		'1000': 0,
		'500': 0,
		'200': 0,
		'100': 0,
		'50': 0
	}

	while (amount > 0) {
		let currentBiggestCupure = BiggestAmountCupure(banknotes)

		let balance = {...banknotes}

		while(Number(currentBiggestCupure) > amount ){
			delete balance[currentBiggestCupure]

			currentBiggestCupure = BiggestAmountCupure(balance)
		}

		if(amount >= Number(currentBiggestCupure)){
			banknotes[currentBiggestCupure] = banknotes[currentBiggestCupure] - 1
			amount -= Number(currentBiggestCupure)
			result[currentBiggestCupure] += 1  
		}
	}

	return result 

}

export default distribution