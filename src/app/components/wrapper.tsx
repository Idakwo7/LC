import Header from "./header";
import Footer from "./footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
