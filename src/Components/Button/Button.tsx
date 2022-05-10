import "./Button.css";




const Button = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("The link was clicked");
  }
  return (
  <div>  
    <button className = {"custom-btn"} onClick={handleClick}>Enter</button>
  </div>)
}
export default Button;