/************************
 * Típos de dados utilizados
 * em componentes com props.
*************************/

type TLinhaBotoes =
{
  alpha: string,
  beta: string,
  gama: string,
  delta?: string,
};

type TCabecalho =
{
  tituloPrincipal: string
};

type TBotao =
{
  titulo: string
};

export { TLinhaBotoes, TCabecalho, TBotao };

