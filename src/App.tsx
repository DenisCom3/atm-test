import { useContext, useMemo, useState } from 'react';
import './App.css';
import Balance from './components/balance/Balance';
import Modal from './components/modal/Modal';
import Numpad from './components/numpad/Numpad';
import Options from './components/options/Options';
import Withdraw from './components/withdraw/Withdraw';
import MainContext from './context/MainContext';
import balanceATM from './logic/balanceATM';
import getBanknotes from './logic/getBanknotes';
import { IBanknotes, ICash, } from './types';

function App() {


 const options: IBanknotes[] = [
   {'5000': 100, '2000':400, '1000': 1000, '500': 3000,'200': 5000, '100':8000,'50': 10000},
   {'5000': 476, '2000':345, '1000': 6741, '500': 4362,'200': 234, '100':1643,'50': 3450},
   {'5000': 234, '2000':678, '1000': 845, '500': 2451,'200': 9654, '100':2345,'50': 234},
   {'5000': 546, '2000':562, '1000': 2543, '500': 4365,'200': 2154, '100':124,'50': 342},
   {'5000': 2732, '2000':347, '1000': 479, '500': 7556,'200': 3296, '100':1257,'50': 3854},
   {'5000': 73, '2000':147, '1000': 279, '500': 356,'200': 696, '100':857,'50': 854}
 ]

 const [overflow, setOwerflow] = useState(false)

const {variant} = useContext(MainContext)
 const [visible, setVisible] = useState(false)

 const [result, setResult] = useState<ICash>()


 const [balance, setBalance] = useState(variant)

 const getResult = (amount: number) => {
   const res = getBanknotes(amount, variant);

   (typeof res.message !== undefined) ? setResult(res as ICash) : setOwerflow(true);
 }

 useMemo(() => {
  setBalance(variant)
 }, [variant])

useMemo(() => {
  if(result === undefined) return 
  setBalance(prev => 
    balanceATM(result, prev)
  )
}, [result])


  return (
   <div className="App">
     <Options options={options} />
      <div className="container">
      <Numpad getResult={getResult}/>
      <Withdraw result={result} />
        </div>   
      <Modal visible={visible} setVisible={setVisible}>
        <Balance balance={balance} />
      </Modal> 
      <div className="info" onClick={()=>setVisible(true)}></div>


     
    </div>
    
  );
}

export default App;
