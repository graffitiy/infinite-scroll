import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/cardList");
  }, []);
  return <div> </div>;
};

export default Index;
