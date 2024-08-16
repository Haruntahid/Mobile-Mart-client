import LatestPhones from "../components/LatestPhones";
import MediaPartner from "../components/MediaPartner";
import Slider from "../components/Slider";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { loading } = useAuth();

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#28231D]"></div>
      </div>
    );
  return (
    <>
      <Slider />
      <LatestPhones />
      <MediaPartner />
    </>
  );
}

export default HomePage;
