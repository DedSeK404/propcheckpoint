import './App.css';
import Profile from './profile/Profile';


// const handleName= ()=>{
//   return alert({props.fullName});
// }


function App() {
 
  return (
    <div style={{
      height:"800px",
      backgroundImage:"url(https://i.imgur.com/E5gN1eK.gif)",
      backgroundSize: 'cover',
      marginTop:"-10px",
      padding:"50px",
      display:"flex",
    }}>
      <Profile fullName="Marwen BENNACEUR" bio="Veteren graphic designer and video editor/amateur web developper" profession="Graphic_designer/web_developper" />
    </div>
  );
}

export default App;
