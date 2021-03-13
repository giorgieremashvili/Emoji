import logo from './logo.svg';
import './App.css';
import emojiList from'./emojiList.json';


function App() {
  const compareValue = (value) => {

  }

  return (
    
    <div className="App">
      <header classname="title-header">
  Emoji Search
</header>
<div className="emoji-search"><input placeholder="search" onChange={(e) => compareValue(e.target.value)}></input></div>
{ emojiList.map(item => {
  return(
    <div className="emoji">
      <span class="info">Click To Copy Emoji</span>
  <ul>
    <li>{item.symbol} {item.title}</li>
  </ul>
</div>
  )
  
})}

</div>
      
  );
  
}

export default App;
