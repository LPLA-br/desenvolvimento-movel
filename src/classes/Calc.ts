
export default class Calc
{
  
  public converterMatrizCharParaString( matriz: string[] ): string
  {
    let str: string = '';
    for( let i = 0; i < matriz.length; i++)
    {
      str = str.concat( matriz[i] );
    }
    return str;
  }

  public avaliarTextualmenteExpressaoMatematicaEmString( str: string ): string
  {
    return eval( str ).toString();
  }

}
