import Loading from "./components/Loading";
import Tours from "./components/Tours";
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    try {
      const fetchTours = async () => {
        setIsLoading(true);
        const response = await fetch(url);
        const tours = await response.json();
        console.log(tours);
      };
      fetchTours();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <Tours />
    </main>
  );
};
export default App;
