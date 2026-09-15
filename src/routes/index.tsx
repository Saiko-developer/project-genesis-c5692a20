import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home" },
      { name: "description", content: "Welcome" },
      { property: "og:title", content: "Home" },
      { property: "og:description", content: "Welcome" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Your app starts here.</p>
    </main>
  );
}
