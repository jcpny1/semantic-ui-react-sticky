import React from "react";
import { render } from "react-dom";
import { Container, Divider, Table } from "semantic-ui-react";

const columnTitles = () => {
  return (
    <Table.Row>
      <Table.HeaderCell sorted="descending">Title</Table.HeaderCell>
      <Table.HeaderCell sorted={null}>Artist</Table.HeaderCell>
    </Table.Row>
  );
};

const listTracks = () => {
  const items = [
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" },
    { name: "Hello Sunshine", artist: "Goodbye Rain" }
  ];

  return items.map((track, index) => {
    return (
      <React.Fragment>
        <Table.Row key={index} draggable="true">
          <Table.Cell>{track.name}</Table.Cell>
          <Table.Cell>{track.artist}</Table.Cell>
        </Table.Row>
      </React.Fragment>
    );
  });
};

const App = () => (
  <Container>
    <Divider hidden />
    <style>
      {`
        table.fixed-header thead tr:nth-child(1) th {
          background: white;
          position: sticky;
          top: 0;
          z-index: 10;
        }
      `}
    </style>
    <Table
      compact="very"
      selectable
      className="sortable fixed-header"
      striped
      style={{ marginTop: 0 }}
    >
      <Table.Header>{columnTitles()}</Table.Header>
      <Table.Body>
        {listTracks()}
        {listTracks()}
        {listTracks()}
        {listTracks()}
      </Table.Body>
      <Table.Footer></Table.Footer>
    </Table>
  </Container>
);

render(<App />, document.getElementById("root"));
