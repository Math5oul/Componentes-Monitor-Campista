import DropDownMenu from '../src/Components/DropDownMenu'
import DateSelect from '../src/Components/DateSelect'
import SliderBar from './Components/SliderBar';
import GraficoLinhas from './Components/GraficoLinhas';


const options = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
];

const vendas = [
    
  { month: 'Jan', sales: 1000, m2: 600, anuncios: 3 }, { month: 'Fev', sales: 1220, m2: 650, anuncios: 3 },
  { month: 'Mar', sales: 1400, m2: 650, anuncios: 4 }, { month: 'Abr', sales: 3153, m2: 600, anuncios: 3 },
  { month: 'Mai', sales: 1321, m2: 700, anuncios: 2 }, { month: 'Jun', sales: 3132, m2: 670, anuncios: 4 },
  { month: 'Jul', sales: 1323, m2: 850, anuncios: 5 }, { month: 'Ago', sales: 2154, m2: 750, anuncios: 3 },
  { month: 'Set', sales: 1231, m2: 800, anuncios: 1 }, { month: 'Out', sales: 1212, m2: 850, anuncios: 2 },
  { month: 'Nov', sales: 1212, m2: 900, anuncios: 2 }, { month: 'Dez', sales: 1300, m2: 800, anuncios: 1 }
  ];


function App() {
  
  return (
    <div className="App">
        
        <DropDownMenu lista={options} />
        <DateSelect/>
        <SliderBar min={10} max={100}/>
        <GraficoLinhas data={vendas}/>

        
    </div>
  );
}

export default App;