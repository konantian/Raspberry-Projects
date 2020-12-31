import React from "react"
import { Route, Switch } from "react-router"
import Main from './main';
import Camera from './camera';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path='/camera' component={Camera} />
        </Switch>
        )
    }
      
export default Routes