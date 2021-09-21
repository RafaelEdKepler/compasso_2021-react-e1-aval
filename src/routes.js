import { Route, Switch } from "react-router"
import SingleSelect from "./components/SingleSelect"
import MyReadsPage from "./pages/MyReadsPage"
import ReadPage from "./pages/ReadPage"
import SearchPage from "./pages/SearchPage"
import WantToReadPage from "./pages/WantToReadPage"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true} component={MyReadsPage}/>
      <Route path="/currently_reading" component={MyReadsPage}/>
      <Route path="/read" component={ReadPage}/>
      <Route path="/want_to_read" component={WantToReadPage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/test" component={SingleSelect}/>
    </Switch>
  )
}