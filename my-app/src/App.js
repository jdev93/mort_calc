function App() {
  return (  
    <div className="container flex justify-center m-auto mt-5">
      <Body/> 
      </div>
      );
}

function Header(){
  return (
    <p className ="text-mycolor text-3xl my-5">Mortgage Calculator</p>
  )
}

function Body(){
  return (
    <div className ="bg-teal-700 font-bold p-6 rounded">
      <Header/>
      <p className ="text-white text-lg">
        ReactJS + TailwindCSS
      </p>
    </div>
  )
}



export default App;