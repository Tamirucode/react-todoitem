import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ToDoListCreateForm from "./pages/todolists/ToDoListCeateForm";
import ToDoListPage from "./pages/todolists/ToDoListPage";
import ToDoItemCreateForm from "./pages/todoitems/ToDoItemCreateForm";
import ToDoItemPage from "./pages/todoitems/ToDoItemPage";
import ToDoListsPage from "./pages/todolists/ToDoListsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ToDoListEditForm from "./pages/todolists/ToDoListEditForm";
import ToDoItemEditForm from "./pages/todoitems/ToDoItemEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ToDoItemsPage from  "./pages/todoitems/ToDoItemsPage";
import NotFound from "./components/NotFound";
function App() {
const currentUser = useCurrentUser();
const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <ToDoListsPage message="No results found. Adjust the search keyword." />
            )}
          />
          
          <Route
            exact
            path="/"
            render={() => (
              <ToDoListsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`owner__profile=${profile_id}&ordering=-created_at&`}
              />
            )}
          />
          <Route
            exact
            path="/mytodoitem"
            render={() => (
              <ToDoItemsPage message="No results found. Adjust the search keyword."
             
              />
            )}
          />
          
          
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/todolists/" render={() => <ToDoListCreateForm />} />
          <Route exact path="/todolists/:id" render={() => <ToDoListPage />} />
          <Route exact path="/todoitems/" render={() => <ToDoItemCreateForm />} />
          <Route exact path="/todoitems/:id" render={() => <ToDoItemPage />} />
          <Route exact path="/todolists/:id/edit" render={() => <ToDoListEditForm />} />
          <Route exact path="/todoitems/:id/edit" render={() => <ToDoItemEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;