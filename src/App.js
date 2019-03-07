import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '@routes';

export default () => (
    <div>
        <Switch>
            {routes.map(route => <Route exact={route.exact} path={route.path} component={route.component} key={route.path} />)}
        </Switch>
    </div>
)
