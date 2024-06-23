import {useState,useEffect} from React;


const App = () => {
  const url = "https://api.kanye.rest"
  const quote=[quote,setQuoute]=useState("Výchozí text")
  const [loading,setLoading]=useState(true);

  const getQuote = async ()=>{
    try{
  const response=await fetch(url)
  const data=await response.json()
  const quote=data.quote;
  setQuote(data.quote);
  setLoading(false);}

  catch(err){
    console.log(err);
    setQuote("Nepodařilo se načíst citát.")
  }

  useEffect(()=>{
    getQuote()
  },[])
  
if (loading)
  return <h1>Načítání dat...<h1/>


  }

  return (
    <div>
      
    </div>
  )
}

export default App
