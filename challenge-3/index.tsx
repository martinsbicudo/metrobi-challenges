import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="flex flex-v gap-10">
      <header className="header section">
        <h1>Header</h1>
      </header>

      <div className="flex gap-10">
        <div className="flex flex-v flex-1 gap-10 col-4">
          <section className="hero section flex-1">
            <h2>Hero</h2>
          </section>

          <aside className="sidebar section flex-1">
            <h2>Sidebar</h2>
          </aside>
        </div>

        <main className="flex flex-v flex-1 gap-10 col-8">
          <article className="main-content section flex-1">
            <h2>Main Content</h2>
            <p>**If things do not look right...</p>
          </article>

          <section className="extra-content section flex-1">
            <h2>Extra Content</h2>
          </section>
        </main>
      </div>

      <section className="flex gap-10">
        <aside className="related-images section flex-1 col-8">
          <h2>Related Images</h2>
        </aside>

        <aside className="related-posts section flex-1 col-4">
          <h2>Related Posts</h2>
        </aside>
      </section>

      <footer className="footer section">
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
