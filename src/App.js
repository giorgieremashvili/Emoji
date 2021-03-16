import logo from './logo.svg';
import './App.css';
import emojiList from'./emojiList.json';
import copy from 'copy-to-clipboard';

function App() {
  const copyToClipBoard = (value) => {
    console.log(value);
    copy(value);
  }
 const SearchEmoji = (searchvalue) => {
   
 }
  return (
    
    <div className="App">
      <header classname="title-header">
  Emoji Search
</header>
<div className="emoji-search"><input placeholder="search" onKeyPress={(e) => SearchEmoji(e.target.value)} ></input></div>
{ emojiList.map(item => {
  return(
    <div   className="emoji">
      
      <span  onClick={() => copyToClipBoard(item.symbol)} class="info">Click To Copy Emoji</span>
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
