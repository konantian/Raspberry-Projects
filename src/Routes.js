import React from "react"
import { Route, Switch } from "react-router"
import Main from './main';
import TempAndHumi from './temperature';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/temperature-humidity" component={TempAndHumi} />
        </Switch>
        )
    }
      
export default Routes