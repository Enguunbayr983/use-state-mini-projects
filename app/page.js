// import { Header } from "./components/Header";
// import { Hero } from "./components/Hero";

// import { Footer } from "./components/Footer";
// import { ContentSection } from "./components/ContentSection";

// export default function Home() {
//   const person = {
//     firstName: "Inf",
//     schoolName: "Pinecone",
//     major: "Software Engineer",
//     hobbies: [
//       {
//         title: "Anime",
//         icon: "",
//       },
//       {
//         title: "Games",
//         icon: "",
//       },
//       {
//         title: "IDK",
//         icon: "",
//       },
//     ],
//   };
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <Header firstName={person.firstName} />
//       <Hero
//         firstName={person.firstName}
//         schoolName={person.schoolName}
//         major={person.major}
//       />
//       <ContentSection hobbies={person.hobbies} />
//       <Footer firstName={person.firstName} schoolName={person.schoolName} />
//     </div>
//   );
// }
// import { EachItems } from "./components/EachItems";

// export default function Home() {
//   let color = "";
//   if (EachItems.rarity === "common") {
//     color = "bg-gray-800";
//   } else if (EachItems.rarity === "rare") {
//     color = "bg-blue-900";
//   } else if (EachItems.rarity === "epic") {
//     color = "bg-purple-900";
//   } else {
//     color = "bg-yellow-700";
//   }
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <EachItems />
//     </div>
//   );
// }
"use client";

import { LightSwitch } from "./components/LightSwitch";
import { Pizzaria } from "./components/Pizzaria";
import { ScoreBoard } from "./components/ScoreBoard";
import { SecretMessage } from "./components/SecretMessage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-600  p-6">
      <div className="flex gap-[50px]">
        <LightSwitch />
        <ScoreBoard />
        <SecretMessage />
        {/* <Pizzaria /> */}
      </div>
    </div>
  );
}
