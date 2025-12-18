import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { BackgroundScene } from "@/components/background-scene";
import { Layout } from "@/components/layout";
import { ThemeProvider } from "@/hooks/use-theme";
import { SoundProvider } from "@/hooks/use-sound";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Experience from "@/pages/experience";
import About from "@/pages/about";
import Contact from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <QueryClientProvider client={queryClient}>
          <div className="relative min-h-screen">
            <BackgroundScene />
            <div className="relative z-10">
              <Layout>
                <Router />
              </Layout>
            </div>
          </div>
          <Toaster />
        </QueryClientProvider>
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;
