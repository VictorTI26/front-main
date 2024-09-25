import InputText from "@/components/input-text/InputText";

export default function Cadastro() {

    return (
      <main className="w-full flex flex-col items-center">
        <section className="mt-20">
          <h1 className=" font-poppins text-2xl">Bem vindo!</h1>
        </section>
        <section className="flex flex-col mt-8 gap-4 w-80">
          <InputText placeholder="Usuário:" />
          <InputText placeholder="Senha:" type="password"/>
        </section>
      </main>
    );
  }