import { ImgProject, ImgProjectDescription } from "./style";
import Bcoomp from "@/public/static/img/projects/bcoomp.svg";
import LapisLazuli from "@/public/static/img/projects/lapis-lazuli.svg";
import PontoEletronico from "@/public/static/img/projects/pontoEletronico.svg";
import NinjaFlix from "@/public/static/img/projects/ninjaFlix.svg";

export const ProjectImg = (): JSX.Element => {
  return (
    <>
      <ImgProject css={{ "--background-image": `url(${Bcoomp})` }} href="https://www.boomp.com.br/" target="_blank">
        <ImgProjectDescription>Pagina de venda</ImgProjectDescription>
      </ImgProject>
      <ImgProject css={{ "--background-image": `url(${LapisLazuli})` }} href="https://www.lapislazulijoias.com.br/" target="_blank" >
        <ImgProjectDescription>E-commerce</ImgProjectDescription>
      </ImgProject>
      <ImgProject css={{ "--background-image": `url(${PontoEletronico})` }} href="https://ponto-eletronico.vercel.app/" target="_blank" >
        <ImgProjectDescription>Plataforma de Ponto Online</ImgProjectDescription>
      </ImgProject>
      <ImgProject css={{ "--background-image": `url(${NinjaFlix})` }} href="https://animesvlvlueue.vercel.app/" target="_blank" >
        <ImgProjectDescription>Projeto Pessoal</ImgProjectDescription>
      </ImgProject>
    </>
  );
};
