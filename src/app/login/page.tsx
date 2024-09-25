'use client'
import InputText from "@/components/input-text/InputText";
import Button from "@/components/button/Button";
import { useRouter } from 'next/navigation';
import { api } from "@/api/api";

export default function Cadastro() {

    const router = useRouter();
    const logar = (form: FormData) => {
    let dto = {
      nome: form.get('nome'),
      senha: form.get('senha')
    }

    console.log(dto)
    api.post('/usuario/login', dto)
      .then((response) => {
        localStorage.setItem('usuario', JSON.stringify(response.data.id));
        router.push('/feed');
      })
      .catch(() => {
        alert('Erro ao logar usuário!');
      });
  }

    return (
        <form action={logar} className="w-full flex flex-col items-center">
        <section className="w-[80%] mt-16 flex flex-col items-center">
        <section className="mt-20">
          <h1 className=" font-poppins text-4xl">Bem vindo!</h1>
        </section>
        <section  className="flex flex-col mt-8 gap-4 w-60">
          <InputText id="nome" name="nome" placeholder="Usuário:" />
          <InputText id="senha" name="senha" placeholder="Senha:" type="password"/>
        </section>
        <div className="mt-10 w-40">
        <Button type="submit" children="Logar"></Button>
        </div>
        <div className="mt-4 w-40">
        <Button type="button" children="Cadastro"></Button>
        </div>
        </section>
      </form>
    );
  }