import ListGroup2 from "./components/ListGroup2";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import Icons from "./components/Icons/Icons";
import Like from "./components/Like/Like";
import LikeFeature from "./components/Like/LikeFeature";
import Message from "./components/ImpureComponent/Message";
import Player from "./exercises/updating_state/Player";
import Pizza from "./exercises/updating_state/Pizza";
import ExpandableText from "./exercises/expandable_text/ExpandableText";
import ExpandableFeature from "./exercises/expandable_text/ExpandableFeature";
import Form from "./components/Forms/Form";
import FormReactHook from "./components/Forms/FormReactHook";
import FormZod from "./components/Forms/FormZod";
import ExpenseTracker from "./exercises/expense_tracker/ExpenseTracker";

// function App() {
//   const items = [
//     "New York",
//     "San Francisco",
//     "Los Angeles",
//     "Chicago",
//     "Tokyo",
//     "London",
//   ];

//   const handleItemSelected = (item: string) => {
//     console.log("Item selected  " + item);
//   };

//   return <Icons />;
// }

// function App() {
//   return (
//     <div>
//       <Button
//         onClick={() => {
//           console.log("Button clicked");
//         }}
//         color="secondary"
//       >
//         Submit
//       </Button>
//     </div>
//   );
// }

function App() {
  return <ExpenseTracker />;
}

export default App;
