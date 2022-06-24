import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { Navigate, useParams } from "react-router-dom";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <Navigate to="lesson/abertura-do-evento-ignite-lab" replace />
        )}
        <Sidebar />
      </main>
    </div>
  );
}
