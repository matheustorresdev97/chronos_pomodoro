import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { AboutPomodoro } from "../pages/AboutPomodoro";
import { NotFound } from "../pages/NotFound";
import History from "../pages/History";

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/history/' element={<History />} />
                <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}