import React from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import BasicCard from './BasicCard.js';

class BiologyCard extends React.Component {

  render() {
    return <BasicCard
      buttonTitle="Biology"
      buttonColor='violet'
      content={<Card
        header={this.props.header}
        image={this.props.image}
        meta={this.props.meta}
        description={this.props.table}
        extra={this.props.evolution}
        />
      }/>
  }
}

export default BiologyCard;
