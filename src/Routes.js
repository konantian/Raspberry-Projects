import React from "react"
import { Route, Switch } from "react-router"
import Main from './main';
import TempAndHumi from './temperature';
import Camera from './camera';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/temperature-humidity" component={TempAndHumi} />
            <Route exact path='/camera' component={Camera} />
        </Switch>
        )
    }
      
export default Routes