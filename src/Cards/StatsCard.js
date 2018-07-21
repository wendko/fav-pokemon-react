import React from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import BasicCard from './BasicCard.js';

class StatsCard extends React.Component {

  render() {

    return <BasicCard
      buttonTitle="Statistics"
      buttonColor="blue"
      content={<Card
        image={this.props.image}
        header={this.props.header}
        meta={this.props.meta}
        description={this.props.description}
        extra={this.props.table}
        />
      }/>
  }
}

export default StatsCard;
