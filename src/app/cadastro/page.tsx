import InputText from "@/components/input-text/InputText";
import Button from "@/components/button/Button";
import Seletor from "@/components/select/Select";
import Title from "@/components/title/Title";
import React from "react";

export default function Cadastro() {

  return (
    <main className="w-full flex flex-col items-center">
      <section className="w-[80%] mt-16 flex flex-col items-center">
      <section className="mt-20">
        <h1 className=" font-poppins text-4xl">Bem vindo!</h1>
      </section>
      <section className="flex flex-col mt-8 gap-4 w-60">
        <InputText placeholder="Usuário:" />
        <InputText placeholder="Senha:" type="password"/>
      </section>
      <div className="mt-10 w-40">
      <Button children="Cadastro"></Button>
      </div>
      </section>
    </main>
  );
}
