import React, { Component } from 'react';
import { Card, Grid, Image, Header, Divider, Table } from 'semantic-ui-react'
 import './App.css';
import BasicCard from './Cards/BasicCard.js';
import StatsCard from './Cards/StatsCard.js';
import BiologyCard from './Cards/BiologyCard.js';
import pikachu from './Cards/pikachu.png';
import charizard8bit from "./Cards/charizard-8bit.gif";
import evolutionPic from "./Cards/evolution.jpg";


class App extends Component {
  render() {
    const basicCard = (
      <BasicCard
      buttonTitle="Basic"
      buttonColor="teal"
      content={<Card
        image={charizard8bit}
        header='Charizard'
        />}/>
    )
    const statsTable = (
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Stats</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>HP</Table.Cell>
          <Table.Cell>78</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Attack</Table.Cell>
          <Table.Cell>104</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Defense</Table.Cell>
          <Table.Cell>78</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sp.Atk</Table.Cell>
          <Table.Cell>159</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sp.Defense</Table.Cell>
          <Table.Cell>115</Table.Cell>
        </Table.Row><Table.Row>
          <Table.Cell>Speed</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>
      </Table>
  )

  const sizeTable = (
    <Table celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Weight</Table.Cell>
        <Table.Cell>90.5 kg</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Height</Table.Cell>
        <Table.Cell>1.7 m</Table.Cell>
      </Table.Row>
    </Table.Body>
    </Table>
  )

    const statsCard = (
      <StatsCard
      image={charizard8bit}
      header='Charizard'
      meta='Fire/Flying'
      description='Charizard is a draconic, bipedal Pokémon from Generation I.'
      table={statsTable}/>
    )

    const biologyCard = (
      <BiologyCard
      image={charizard8bit}
      header='Charizard'
      table={<div><h2>Biometrics</h2>{sizeTable}</div>}
      evolution={<div><h2>Evolution</h2><Image src={evolutionPic}/></div>}
      />
    )

    return (
      <div className="App"> <center>
        <Header as='h1' icon textAlign='center'> 
          <Image src={pikachu}/>
          <Header.Content>
            MY FAVOURITE POKEMON  
          </Header.Content> 
        </Header>
        <Divider />
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              {basicCard}
            </Grid.Column>
            <Grid.Column>
              {statsCard}
            </Grid.Column>
            <Grid.Column>
              {biologyCard}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </center></div>
    );
  }
}

export default App;
