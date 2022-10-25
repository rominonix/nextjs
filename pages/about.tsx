import Link from "next/link";

import DarkLayout from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";

export default function AboutPage({ data }) {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>

      {/* {JSON.stringify(data)} */}
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

// export const getStaticProps = async (context) => {
//   const response = await fetch("http://localhost:3000/api/users");
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//     // revalidate: 1,
//   };
// };
