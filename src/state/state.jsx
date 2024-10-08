import { createContext, useState, useEffect } from "react";
import filter from "../utils/filter";
import Loader from "../components/Loader/Loader";

const initialDisplayState = {
  grouping: "status",
  ordering: "priority",
};

export const AppContext = createContext({
  data: null,
  setData: () => null,
  dataToRender: null,
  setDataToRender: () => null,
  displayState: initialDisplayState,
  setDisplayState: () => null,
});

const LOCAL_STORAGE_KEY = "displayState";

const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [dataToRender, setDataToRender] = useState(null);
  const [displayState, setDisplayState] = useState(() => {
    const storedDisplayState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedDisplayState
      ? JSON.parse(storedDisplayState)
      : initialDisplayState;
  });
  const [loading, setLoading] = useState(true);

  const value = {
    data,
    setData,
    dataToRender,
    setDataToRender,
    displayState,
    setDisplayState,
  };

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setTimeout(() => setLoading(false), 600);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(displayState));
    console.log("Display State:", displayState);
  }, [displayState]);

  useEffect(() => {
    const filteredData = data && filter(data, displayState);
    setDataToRender(filteredData);
    console.log("Data:", data);
    console.log("Data to Render:", filteredData);
  }, [data, displayState]);

  return (
    <AppContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </AppContext.Provider>
  );
};

export default AppProvider;
