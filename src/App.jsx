import Loading from "./components/Loading";
import Tours from "./components/Tours";
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    try {
      const fetchTours = async () => {
        setIsLoading(true);
        const response = await fetch(url);
        const tours = await response.json();
        // console.log(tours);
        setTours(tours);
      };
      fetchTours();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
