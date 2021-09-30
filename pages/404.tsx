import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  // [] Agar dipanggil hanya 1 kali
  return (
    <div>
      <h1 className="title-not-found">Ooopppss......</h1>
      <h1 className="title-not-found">Halaman Tidak Ditemukan</h1>
    </div>
  );
};

export default Custom404;
