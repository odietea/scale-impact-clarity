import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    const title = "Page Not Found (404) - Anita Odiete";
    const description =
      "This page doesn't exist. Return to Anita Odiete's portfolio to explore her product leadership work across fintech, climate tech, and civic tech.";

    const previousTitle = document.title;
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, value: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`
      );
      const previous = tag?.getAttribute("content") ?? null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
      return () => {
        if (previous === null) tag?.remove();
        else tag?.setAttribute("content", previous);
      };
    };

    const restores = [
      setMeta("name", "description", description),
      setMeta("name", "robots", "noindex, follow"),
      setMeta("property", "og:title", title),
      setMeta("property", "og:description", description),
      setMeta("name", "twitter:title", title),
      setMeta("name", "twitter:description", description),
    ];

    return () => {
      document.title = previousTitle;
      restores.forEach((restore) => restore());
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <main className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Oops! This page doesn't exist.
        </p>
        <a href="/" className="text-accent hover:underline">
          Return to Home
        </a>
      </main>
    </div>
  );
};

export default NotFound;
