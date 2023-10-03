import { useState } from "react";
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { Props, SearchedCity } from "./components/SearchedCity"

import './styles/global.scss';
import { MainCitiesTable } from "./components/CitiesTable";

function App() {

  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {

    setIsSearching(true);
  }

  const closeSearch = () => {

    setIsSearching(false)
  }

  return (
    <main>

      <section>
        <Header />

        {isSearching && <SearchedCity closeSearch={closeSearch} />}

        <SearchBar
          search={handleSearch}
        />
      </section>

      <MainCitiesTable />

    </main>
  )
}

export default App
