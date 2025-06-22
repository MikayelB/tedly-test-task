import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

export default function Home() {
  return (
    <Layout>
      <div className="text-gray-800">
        <ProjectList />
      </div>
    </Layout>
  );
}
