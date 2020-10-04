import React, { Component } from "react";
import SudokuField from "../componenets/SudokuField";

export default class SudokuBoard extends Component {
  render() {
    const { sudoku,onChange } = this.props;
    return (    
      <div>
        {sudoku.rows.map(row => (
          <div className="row" key={row.index}>     
            {row.cols.map( field => (
              <SudokuField field={field} key={field.col} onChange={onChange}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
