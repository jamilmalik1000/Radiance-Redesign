import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
const Home = lazy(() => import("../pages/Home"));
const page = <K extends keyof typeof import("../pages/GenericPages")>(
  name: K,
) =>
  lazy(() =>
    import("../pages/GenericPages").then((m) => ({ default: m[name] })),
  );
const Solutions = page("Solutions"),
  SolutionDetail = page("SolutionDetail"),
  Services = page("Services"),
  ServiceDetail = page("ServiceDetail"),
  Products = page("Products"),
  Projects = page("Projects"),
  About = page("About"),
  Blogs = page("Blogs"),
  BlogDetail = page("BlogDetail"),
  Contact = page("Contact"),
  RequestQuote = page("RequestQuote"),
  Privacy = page("Privacy"),
  NotFound = page("NotFound");
export default function App() {
  return (
    <Suspense
      fallback={<div className="route-loader">Loading experience…</div>}
    >
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/:slug" element={<SolutionDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="request-quote" element={<RequestQuote />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
