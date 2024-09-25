'use client'
import InputText from "@/components/input-text/InputText";
import Button from "@/components/button/Button";
import Seletor from "@/components/select/Select";
import Title from "@/components/title/Title";
import React from "react";
import { api } from "@/api/api";


export default function Cadastro() {

  const cadastrar = (form: FormData) => {
    let dto = {
      nome: form.get('nome'),
      senha: form.get('senha')
    }

    console.log(dto)
    api.post('/usuario', dto)
      .then(() => {
        
      })
      .catch(() => {
        alert('Erro ao cadastrar usuário!');
      });
  }

  return (
    <form action={cadastrar} className="w-full flex flex-col items-center">
      <section className="w-[80%] mt-16 flex flex-col items-center">
      <section className="mt-20">
        <h1 className=" font-poppins text-4xl">Crie sua conta!</h1>
      </section>
      <section  className="flex flex-col mt-8 gap-4 w-60">
        <InputText id="nome" name="nome" placeholder="Usuário:" />
        <InputText id="senha" name="senha" placeholder="Senha:" type="password"/>
      </section>
      <div className="mt-10 w-40">
      <Button type="submit" children="Cadastro"></Button>
      </div>
      </section>
    </form>
  );
}
