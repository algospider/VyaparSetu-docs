import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact";
import { Features } from "./pages/Features";
import { Home } from "./pages/Home";
import { Screens } from "./pages/Screens";
import { Technology } from "./pages/Technology";
import { Workflow } from "./pages/Workflow";

const routes = {
  "/": Home,
  "/features": Features,
  "/screens": Screens,
  "/workflow": Workflow,
  "/technology": Technology,
  "/contact": Contact
} as const;

type Route = keyof typeof routes;

function currentRoute(): Route {
  const route = window.location.hash.replace(/^#/, "") || "/";
  return route in routes ? (route as Route) : "/";
}

export function App() {
  const [route, setRoute] = useState<Route>(currentRoute);
  const Page = routes[route];

  useEffect(() => {
    const onHashChange = () => {
      setRoute(currentRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
