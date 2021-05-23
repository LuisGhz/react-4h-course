import './index.css';

export const Button = props => {
  return (
    <button className="single-button" style={{ backgroundColor: props.backgroundColor }}>{ props.textContent }</button>
  );
}