import React from 'react';
import { IBanknotes } from '../types';

const MainContext = React.createContext<{variant: IBanknotes, setVariant: Function}>(
	{variant:{'5000': 100, '2000':400, '1000': 1000, '500': 3000,'200': 5000, '100':8000,'50': 10000},
	setVariant: ()=> console.log('')
})

export default MainContext