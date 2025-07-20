
import { createBrowserRouter } from "react-router"
import App from "./App"
import Body from "./components/Body"
import View from "./components/View"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Body/>,
            },
            {
                path: "view",
                element: <View/>,
            }
        ]
    }
])