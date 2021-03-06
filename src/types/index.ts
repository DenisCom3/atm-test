export interface IBanknotes {
    '5000': number;
    '2000': number;
    '1000': number;
    '500': number;
    '200': number;
    '100': number;
    '50': number;
	[key: string]: number;
}


export interface ICash extends IBanknotes {
	Residue: number
}


export interface FailMessage{
	message: string
}

