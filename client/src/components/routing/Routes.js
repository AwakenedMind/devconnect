import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profileforms/CreateProfile";
import EditProfile from "../profileforms/EditProfile";
import AddExperience from "../profileforms/AddExperience";
import AddEducation from "../profileforms/AddEducation";
// import Profiles from "../profiles/Profiles";
// import Profile from "../profile/Profile";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        {/* <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} /> */}
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
      </Switch>
    </section>
  );
};

export default Routes;
