import React from 'react';
import AWS from 'aws-sdk'
import { AppContext } from './ContextProvider';

AWS.config.region = 'us-west-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:b40fb3fc-3d9b-4f46-a875-91faf89008e6',
});

const lambda = new AWS.Lambda({ region: 'us-west-2', apiVersion: '2015-03-31' });

const RenderOptions = ({ options, selectorName }) => {
  const optionElements = []
  optionElements.push(<option key={selectorName} value="">Select {selectorName}</option>)

  if (options && options.length > 0)
    options.forEach(y => optionElements.push(<option key={y.value} value={y.value}>{y.label}</option>))

  return optionElements
}

const Selector = ({ options, onChange, selectorName, selectedValue }) => {
  return (
    <div className="selector">
      <select name={selectorName} onChange={onChange} value={selectedValue} style={{ height: 40 }}>
        <RenderOptions key={selectorName} options={options} selectorName={selectorName} />
      </select>
    </div>)
}

class SelectorComponent extends React.Component {
  static contextType = AppContext;

  onYearChange = (event) => {
    this.context.setYear(event.target.value, this.fetchAutoData)
  }

  onMakeChange = (event) => {
    this.context.setMake(event.target.value, this.fetchAutoData)
  };

  onModelChange = (event) => {
    this.context.setModel(event.target.value, this.fetchAutoData)
  };

  processData = (err, response) => {
    if (err)
      console.log(err)
    else {
      if (response.Payload) {
        const { type, data } = JSON.parse(response.Payload)
        this.context.setYMMOptions(type, data)
      }
    }
  }

  fetchAutoData = () => {
    const { year, make, model } = this.context.state;
    let pullParams = {
      FunctionName: 'VehicleSelectorPageData-modernize',
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({ year, make, model })
    }

    lambda.invoke(pullParams, this.processData);
  }

  componentDidMount = () => {
    this.fetchAutoData()
    this.preselectData()
  }

  preselectData = async () => {

    const { landingName } = this.props
    if(landingName !== 'main') {
      await this.context.setYear("2021", this.fetchAutoData)
      await this.context.setMake(landingName, this.fetchAutoData)
    }
  }

  render() {
    const { state: { year, make, model, options: { years, makes, models } } } = this.context
    const { landingName } = this.props
    const filterMakes = landingName === 'main' ? makes : makes.filter((item) => item.value === landingName)
    
    return (
      <div className="selectorWrapper">
        <Selector options={years} onChange={this.onYearChange} selectorName="Year" selectedValue={year} />
        <Selector options={filterMakes} onChange={this.onMakeChange} selectorName="Make" selectedValue={make} />
        <Selector options={models} onChange={this.onModelChange} selectorName="Model" selectedValue={model} />
      </div>
    );
  }
}

export default SelectorComponent;
