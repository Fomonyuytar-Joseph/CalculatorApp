import React from "react";
import "./styles.css"
import Button from "./components/Button";

function App() {
  return (
    // grid container
    <div className="container">
      {/* output screen of calculator */}
      <div className="container__screen">
        <div className="container__screen--calculation">23</div>

        <div className="container__screen--result">23</div>
      </div>

      <Button   digit="AC" className=" button--span-two button--white"/>
      <Button digit="DEL" className="button--white"/>
      <Button digit="÷" className="button--cirlcular-border"/>
      <Button digit="1" className="button--white" />
      <Button digit="2" className="button--white" />
      <Button digit="3" className="button--white" />
      <Button digit="×"  className="button--cirlcular-border" />
      <Button digit="4" className="button--white" />
      <Button digit="5" className="button--white"/>
      <Button digit="6" className="button--white" />
      <Button digit="+"  className="button--cirlcular-border "/>
      <Button digit="7"  className="button--white"/>
      <Button digit="8" className="button--white" />
      <Button digit="9" className="button--white"/>
      <Button digit="-"  className="button--cirlcular-border"/>
      <Button digit="." className="button--white"/>
      <Button digit="0" className="button--white"/>
      <Button digit="=" className=" button--span-threeTofour button--cirlcular-border"/>
    </div>
  );
}

export default App;
