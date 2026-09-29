import { Suspense } from "react";
// import Landing from "./components/Landing";
import NewLanding from "./components/NewLanding";

export default function Home() {
    return (
        <main className="landing-page">
            <Suspense fallback={<div>Loading...</div>}>
                {/* <Landing /> */}
                <NewLanding />
            </Suspense>
        </main>
    );
}
