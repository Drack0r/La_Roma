import { Layout } from "./components/layout/Layout";
import { Router } from "./Router/Router";

export function App() {
  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}
