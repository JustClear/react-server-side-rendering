import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';

import App from '@src/App';
import routes from '@routes';

const app = new koa();
const route = new Router();

route.get('*', async (ctx) => {
    try {
        const currentRoute = routes.find(route => matchPath(ctx.url, route)) || {};
        const promise = currentRoute.component && currentRoute.component.fetchData ? currentRoute.component.fetchData() : Promise.resolve(null);

        const data = await promise;
        const context = {
            data,
        };
        console.log('data', data);
        
        const renderedString = renderToString(
            <StaticRouter context={ context } location={ ctx.url } >
                <App></App>
            </StaticRouter>
        );

        ctx.body = template();
        
        function template() {
            return `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>React Server Side Rendering</title>
                </head>
                <body>
                    <div id="app">${renderedString}</div>
                    <script>window.__STORE__ = ${JSON.stringify(data)}</script>
                    <script src="/js/app.js"></script>
                </body>
                </html>

            `;
        }
    } catch (error) {
        console.log('server.catch', error);
    }
});

app.use(serve('dist'));
app.use(route.routes());

app.listen(3000);