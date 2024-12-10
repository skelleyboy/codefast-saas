
import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Danny";

  return (
    <main>
      <section className="bg-base-200">
        <div className=" flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">
            Gandalf App
          </div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>

          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="max-w-3xl text-center py-32 px-8 mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Collect customer feedback</h1>
        <div className="opacity-90 mb-10">create feedback board</div>



        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

    </main>


  );
}
