import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  // options: {    --Exemplo de options
  //   delay: 100
  // },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Test <queue@queueteste.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de Usuário",
      html: `Ola, ${user.name}, bem vindo ao sistema de filas do João :D`
    });
  }
};
