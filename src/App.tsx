import React from "react";
import "./styles.css";
import Button from "./components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { addDigit, clearDigit } from "./store/features/digitSlice";
import DeleteButton from "./components/DeleteButton";

function App() {
  // const [pressedDigit, setPressedDigit] = useState<string>('')

  const digits = useSelector((state: RootState) => state.digits.currentOperand);

  const dispatch = useDispatch();

  const handleAddDigits = (pressedDigit: string) => {
    dispatch(addDigit(pressedDigit));

    console.log("hi");
  };

  const handleClearDigit = () => {
    dispatch(clearDigit());
  };

  return (
    // grid container
    <div className="container">
      {/* output screen of calculator */}
      <div className="container__screen">
        <div className="container__screen--calculation">23</div>

        <div className="container__screen--result">{digits}</div>
      </div>

      <Button digit="AC" className=" btn--span-two btn--white" />
      <DeleteButton
        digit="DEL"
        className="btn--white"
        handleClearDigit={handleClearDigit}
      />
      <Button digit="÷" className="btn--cirlcular-border" />
      <Button
        digit="1"
        className="btn--white"
        handleAddDigits={handleAddDigits}
      />
      <Button
        digit="2"
        className="btn--white"
        handleAddDigits={handleAddDigits}
      />
      <Button
        digit="3"
        className="btn--white"
        handleAddDigits={handleAddDigits}
      />
      <Button digit="×" className="btn--cirlcular-border" />
      <Button
        digit="4"
        className="btn--white"
        handleAddDigits={handleAddDigits}
      />
      <Button
        digit="5"
        className="btn--white"
        handleAddDigits={handleAddDigits}
      />
      <Button
        digit="6"
        className="btn--white"
        handleAddDigits={handleAddDigits}
      />
      <Button digit="+" className="btn--cirlcular-border " />
      <Button digit="7" className="btn--white" />
      <Button digit="8" className="btn--white" />
      <Button digit="9" className="btn--white" />
      <Button digit="-" className="btn--cirlcular-border" />
      <Button digit="." className="btn--white" />
      <Button digit="0" className="btn--white" />
      <Button
        digit="="
        className=" btn--span-threeTofour btn--cirlcular-border"
      />
    </div>
  );
}

export default App;
