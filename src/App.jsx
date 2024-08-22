import { useState } from "react";
import Banner from "./Components/Banner"
import Header from "./Components/Header"



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header  setSearchQuery={setSearchQuery}></Header>
      <Banner searchQuery={searchQuery}></Banner>
    </>
  )
}

export default App
