
import { Bar } from "react-chartjs-2"

const Graph = (props) => {
    
        
    
    const formattedData = props.data


    console.log(formattedData)
    if(formattedData.length === 0){
        return (
            <>
            </>
        )

    }

    const getAges = formattedData.finalSavingsArray.map(year => year.age)

    const getSavings = formattedData.finalSavingsArray.map(year => year.endingSavings)

    const getWithdrawal = formattedData.finalSavingsArray.map(year => year.withdrawal)


    return (
    <>
        <Bar data={{
        labels: getAges,
        datasets: [{
        label: 'Ending Savings',
        data: getSavings,
        backgroundColor: '#00d9ff'
        }, {
            label: 'Withdrawal',
            data: getWithdrawal,
        backgroundColor: '#ff3400'
    
}
       ],
    
}}>
      </Bar>
      <h1 className="retirementCheck">{ formattedData.retirementCheck }</h1>
      
    </>
)

}

export default Graph