import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { MouseEvent, useState } from "react";

function App() {
  const ITEMS = [
    "Palestine",
    "Jordan",
    "Qatar",
    "Belgium",
    "Spain",
    "Netherland",
  ];

  const handleSelectItem = (item: string, index: number, event: MouseEvent) => {
    console.log(item, index, event);
  };

  const [alertVisibile, setAlertVisisbility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        title={"Countries"}
        items={ITEMS}
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        <h1>Hello World</h1>
      </Alert
      > */}
      {alertVisibile && (
        <Alert onClose={() => setAlertVisisbility(false)}>My Alert</Alert>
      )}
      <Button
        title="Submit"
        color="secondary"
        onClose={() => setAlertVisisbility(true)}
      />
    </div>
  );
}

export default App;
