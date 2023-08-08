function App() {
  return (  
    <div className="grid h-screen place-content-center">
      <Body/> 
      </div>
      );
}

function Header(){
  return (
    <p className ="text-mycolor text-3xl my-5 font-sans">Mortgage Calculator</p>
  )
}

function Body(){
  return (
    <div className ="w-96 bg-gradient-to-r from-gray-400 to-gray-500 font-bold p-6 rounded">
      <Header/>      
    </div>
  )
}



export default App;