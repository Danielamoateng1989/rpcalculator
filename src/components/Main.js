import { Container, Row, Col} from "react-bootstrap"
import React, { useState} from "react"
import calculator from "../utils/calculator"
import { ToolTipLite } from 'tooltip-lite';





const Main = (props) => {
  
let defaultCalcOptions = {  
    startAge: 25,
    income: 50000, 
    spouseIncome: 0, 
    amountSaved: 1000,
    retirementAge: 65,
    yearsRetired: 20,
    savingsRate: 5,
    inflation: 3,
    preRoi: 8, 
    postRoi: 6,
    incomeRetirementPercent: 80,
    salaryIncrease: 3  

}

let setGraphData = props.setterFunction

let [calcOptions, setCalcOptions] = useState(defaultCalcOptions)

const updateGraph = (event) => {
    event.preventDefault()
    setGraphData(calculator(calcOptions))

}

    return (
        <Container fluid className="App" >
            
        <Row>
            <h1 className="heading-1">Retirement Planner Calculator</h1>
            <p className="App">This retirement planner calculator estimate yours expected total retirement savings based on your annual contributions</p>
       </Row>

       <Row>
        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content={(
            <div>
              <p>Your current age.</p>
              <p>If you have a spouse,</p>
              <p>please use older age amongst the two</p>
            </div>
          )}
            direction="top">
            <label for="ageInput" className="pr-5 mt-2">
            Age
            </label>
          </ToolTipLite>
          <input  value={calcOptions.startAge} onChange={event => setCalcOptions({...calcOptions, startAge: event.target.value})} id="ageInput"></input>
        
        </Col>
        
        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content="Current yearly income" direction="top">
            <label for="incomeInput" className="pr-5 mt-2">Income</label>
          </ToolTipLite> 
        <input value={calcOptions.income} onChange={event => setCalcOptions({...calcOptions, income: event.target.value})} id="incomeInput"></input>
       </Col>


        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content="Spouse's current yearly income (if applicable)" direction="top">
            <label for="spouseIncome" className="pr-5 mt-2">Spouse's Income Savings</label>
          </ToolTipLite>    
          <input  value={calcOptions.spouseIncome} onChange={event => setCalcOptions({...calcOptions, spouseIncome: event.target.value})} id="spouseIncome"></input>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content="Current balance in retirement accounts (if applicable)" direction="top">
            <label for="accountBalance" className="pr-5 mt-2">Amount In Retirement Account </label>
          </ToolTipLite> 
        <input value={calcOptions.amountSaved} onChange={event => setCalcOptions({...calcOptions, amountSaved: event.target.value})} id="accountBalance"></input>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content="The age you wish to retire" direction="top">
            <label for="retireAge" className="pr-5 mt-2">Retirement Age</label>
          </ToolTipLite> 
          <input value={calcOptions.retirementAge} onChange={event => setCalcOptions({...calcOptions, retirementAge: event.target.value})} id="retireAge"></input>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content="Number of years you wish to remain in retirement" direction="top">
            <label for="retireYears" className="pr-5 mt-2">Desired Retirement Years</label>
          </ToolTipLite> 
          <input value={calcOptions.yearsRetired} onChange={event => setCalcOptions({...calcOptions, yearsRetired: event.target.value})} id="retireYears"></input>
        </Col>


        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content="% of income saved per year" direction="top">
            <label for="savingsPercent" className="pr-5 mt-2">Income Saved (%) </label>
          </ToolTipLite> 
          <input value={calcOptions.savingsRate} onChange={event => setCalcOptions({...calcOptions, savingsRate: event.target.value})} id="savingsPercent"></input>
        </Col>

        <Col sm={12} md={6} lg={4}>
            <ToolTipLite content="% growth rate of investments before retirement" direction="top">
              <label for="preRoi" className="pr-5 mt-2">Investment Rate (Pre-Retirement %)</label>
            </ToolTipLite> 
        <input value={calcOptions.preRoi} onChange={event => setCalcOptions({...calcOptions, preRoi: event.target.value})} id="preRoi"></input>
        </Col>


        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content={(
            <div>
              <p>% growth rate of investments after retirement.</p>
              <p>We suggest a lower growth rate in retirement, </p>
              <p>as you may want a more conservative style as you grow older"</p>
            </div>
          )}
            direction="top" className="explanation" html={true}>
          <label for="postRoi" className="pr-5 mt-2">Investment Rate (Post-Retirement %)</label>
          </ToolTipLite> 
          <input value={calcOptions.postRoi} onChange={event => setCalcOptions({...calcOptions, postRoi: event.target.value})} id="postRoi"></input>
        </Col>


        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content={(
            <div>
              <p>% rate of inflation. Consumer Price Index</p>
              <p>has averaged ~4% over the past 50 years or so</p>
            </div>
          )}
            direction="top" html={true} toolTipClassName="explanation">
          <label for="inflation" className="pr-5 mt-2">Inflation (%)</label>
          </ToolTipLite> 
          <input value={calcOptions.inflation} onChange={event => setCalcOptions({...calcOptions, inflation: event.target.value})} id="inflation"></input>
        </Col>


        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content={(
              <div>
                  <p>% of final year's income you will need each year in retirement</p>
                  <p>Common estimate is 80%</p>
              </div>
          )}
          direction="top">
          <label for="withdrawal" className="pr-5 mt-2">Income at Retirement (%)</label>
          </ToolTipLite> 
          <input value={calcOptions.incomeRetirementPercent} onChange={event => setCalcOptions({...calcOptions, incomeRetirementPercent: event.target.value})} id="withdrawal"></input>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <ToolTipLite content={(
              <div>
                  <p>% of salary increase per year.</p>
                  <p>Defaults to 3%</p>
              </div>
          )} 
          direction="top">
            <label for="salaryIncrease" className="pr-5 mt-2">Salary Increase (%)</label>
          </ToolTipLite> 
          <input value={calcOptions.salaryIncrease} onChange={event => setCalcOptions({...calcOptions, salaryIncrease: event.target.value})} id="salaryIncrease"></input>
        </Col>
        </Row>
        
        
        <Row>
        <button className="calcButton" onClick={updateGraph}>Calculate</button>
        </Row>
        </Container>
    )

}

export default Main