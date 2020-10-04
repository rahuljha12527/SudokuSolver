import React, { Component } from "react";
import generator from "sudoku";
import "./App.css";
import SudokuBoard from './componenets/SudokuBoard';

window.generator = generator;

function generateSudoku() {
  const raw = generator.makepuzzle();
  console.log(raw);
  const result = { rows: [] };

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = row[i*9+j];
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
}

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sudoku:generateSudoku()
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku Solver</h1>
        </header>

        <SudokuBoard sudoku={this.state.sudoku} />
      </div>
    );
  }
}

export default App;
