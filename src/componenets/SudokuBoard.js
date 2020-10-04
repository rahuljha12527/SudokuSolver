import React, { Component } from "react";


export default class SudokuBoard extends Component{
    render(){
        const {sudoku}=this.props
        return <div>
           {sudoku.rows.map((row)=>{
               <div className="row" key={row.index}>
                   {row.cols((field)=><SudokuField field={col}  key={field.col} />)}
                </div>
           })}
        </div>
    }
}