import { useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import { TopBar } from "./components/Layout";
import { AppContext } from "./state/state";
import DisplayButton from "./components/DisplayButton/DisplayButton";
import DisplayArea from "./components/DisplayArea/DisplayArea";
import { useEffect, useRef, useState } from "react";
import { ColumnHeader } from "./components/Layout";
import Card from "./components/Card/Card";
import Column from "./components/Column/Column";

function App() {
  const { dataToRender } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const displayCardRef = useRef(null);
  const handleClickOutside = (e) => {
    if (displayCardRef.current && !displayCardRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const renderedData = useMemo(() => {
    return dataToRender?.map((category) => (
      <Column key={category.name}>
        <>
          <ColumnHeader
            icon={category.icon}
            name={category.name}
            count={category.tickets.length}
            available={category.available}
          />
          <div className="column-cards">
            {category.tickets.map((ticket) => (
              <Card data={ticket} key={ticket.id} />
            ))}
          </div>
        </>
      </Column>
    ));
  }, [dataToRender]);

  return (
    <>
      <TopBar>
        <DisplayButtonWrapper ref={displayCardRef}>
          <DisplayButton onClick={toggleOpen} />
          {isOpen && <DisplayArea />}
        </DisplayButtonWrapper>
      </TopBar>
      <Main>{renderedData}</Main>
    </>
  );
}

const Main = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  gap: 2rem;
  overflow-x: scroll;
  min-height: calc(100vh - 66px);
  .column-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const DisplayButtonWrapper = styled.div`
  width: fit-content;
`;

export default App;
