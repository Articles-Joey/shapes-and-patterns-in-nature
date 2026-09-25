import { Suspense } from "react";
import Landing from "./components/Landing";

export default function Home() {
    return (
        <main className="landing-page">
            <Suspense fallback={<div>Loading...</div>}>
                <Landing />
            </Suspense>
        </main>
    );
}
