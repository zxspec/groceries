~~0. update README~~

1. use [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) to optimise build performance
2. ~~copy `.env` file to `./dist` folder~~
3. ~~move `.env` files to `./settings` folder~~
4. ~~handle 404~~
5. handle 5xx errors
6. ~~optimize router [peformance](https://router5.js.org/advanced/universal-routing#performance)~~
7. ~~move filtering to `server/api` folder~~
8. ~~move type definitions out of `server` folder~~
9. add `eslint`
10. add tests verifying that content router reneders App wrapped in RouterProvider
11. add test for `server/index.ts`
12. ~~[client] add start page with search~~
13. [client] add `enzyme` for testing components
14. ~~[client] search results component~~
15. ~~[client] add details page~~
16. ~~[client] add option to render images on details page~~
17. ~~[client] add separate webpack configuration for client-side code~~
18. ~~configure prod build~~
19. ~~add `webpackNodeExternals` to webpack server config~~
20. remove `combineReducers` if not required
21. ~~check if same createStore() helper can be used on client- and server- sides => YES~~
22. ~~add redux-dev-tools support~~
23. ~~extract `store` and `axiosInstance` from `contentRenderer()`~~
24. ~~read search phrase from url~~
25. add types to Product state
26. ~~remove [search] button and add search icon to input -> NO~~
27. ~~check option 1: browser url with search parameter -> YES~~
28. ~~check option 2: store search parameter in local storage -> NO~~
29. sanitize search input
30. ~~sanitize search results~~
31. ~~wrap input in <form> and allow to search without JS~~
32. add `Helmet`
33. ~~preload data on server-side~~
34. ~~use `window.INITIAL_STATE` on client side~~
35. ~~use `router.replaceHistoryState(name, params)`~~
36. ~~fix 404 favicon issue~~
37. inject router state into a page during SSR
38. ~~inject redux store initial state into a page during SSR~~
39. ~~preload product details data on server-side~~
40. optimize front-end bundle
41. ~~mock non-JS assets for Jest~~
42. ~~fix `contentRenderer` tests~~
43. add E2E-test, `cypress` or `playwright`
