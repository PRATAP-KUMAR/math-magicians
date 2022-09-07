import './Calculator.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (<button className="button" type="button">{name}</button>);
};
Button.propTypes = { name: PropTypes.string.isRequired };

const Calculator = () => (
  <>
    <div className="calc-result">0</div>
    <div className="buttons-grid">
      <Button name="AC" />
      <Button name="&plusmn;" />
      <Button name="%" />
      <Button name="&divide;" />
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
      <Button name="" />
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </>
);

export default Calculator;
