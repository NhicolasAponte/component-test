import NavButton from "@/components/nav/nav-button";
import NavButtonContainer from "@/components/containers/nav-button-container";
import { MainNavRoutes } from "@/lib/routes";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center items-center">

      <NavButtonContainer>
        {MainNavRoutes.map((route, i) => (
          <NavButton key={i} href={route.href} title={route.title}/>
        ))}
      </NavButtonContainer>
    </main>
  );
}
