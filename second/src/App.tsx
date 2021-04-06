import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cell, CellPropsType } from './components/Cell';
import { Board } from './components/Board';
import { useDispatch, useSelector } from 'react-redux';
import { addCellsAC, changeStatusAC, clearAC } from './state/cellsReducer';
import { RootReducerType } from './state/store';
import { Route } from './components/Route';
import { v1 } from 'uuid';
import { ArrowPropsType } from './components/Arrow';
import { addArrowsAC, clearArrowsAC } from './state/arrowsReducer';

function App() {

  let [inputValue, setInputValue] = useState<string>('')

  const dispatch = useDispatch()
  const renderState = useSelector<RootReducerType, Array<CellPropsType>>((state) => state.cells)
  const renderRoute = useSelector<RootReducerType, Array<ArrowPropsType>>((state) => state.arrows)

  function buttonCLickHandler() {
    if (inputValue.trim() !== '' && Number(inputValue)) {
      dispatch(clearAC())
      dispatch(clearArrowsAC())
      dispatch(addCellsAC(inputValue))
      dispatch(changeStatusAC())
      setInputValue('')
    }
  }
  function inputOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.currentTarget.value)
  }
  function onKeyPressHandler(event: KeyboardEvent<HTMLInputElement>) {
    if (inputValue.trim() !== '' && Number(inputValue) && event.key === 'Enter') {
      dispatch(clearAC())
      dispatch(clearArrowsAC())
      dispatch(addCellsAC(inputValue))
      dispatch(changeStatusAC())
      setInputValue('')
    }
  }
  function startRouteHandler() {
    dispatch(clearArrowsAC())
    dispatch(addArrowsAC())
  }

  let specialCell = renderState.find((oneCell) => oneCell.selected === true)

  return (
    <div className="App">
      <h3>Please enter board size</h3>
      <input
        type="text"
        placeholder={'Single number'}
        onChange={inputOnChangeHandler}
        value={inputValue}
        onKeyPress={onKeyPressHandler}
      />
      <button onClick={buttonCLickHandler}>Build</button>
      <Board cells={renderState} />
      <hr />
      <button onClick={startRouteHandler}>Start route</button>
      <hr/>
      <Route finalRoute={renderRoute} />
    </div>
  );
}

export default App;
