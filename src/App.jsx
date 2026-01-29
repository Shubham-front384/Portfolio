import { useState } from "react"
import Preloader from "./Components/Preloader/Preloader";
import Home from "./Pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {
        loading ? (<Preloader onComplete={() => setLoading(false)} />) : (<Home />)
      }
    </>
  )
}

export default App
