import React from 'react';
import Post from './Post';
import menino from "../assets/menino.jpg";

const PostList = () => {
    return (
        <div className="post-list">
            <Post
                image={menino}
                title="Para ser muito bom amanhã é preciso começar a praticar hoje"
                author="Prof. Cleiton"
                date="24 Fev 25"
                time="16:40"
                content={`São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :( 
        \n\nAqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nos primeiros anos escolares e buscará aperfeiçoar seu conhecimento nas operações básicas.`}
            />
            <Post
                title="Matemática: O Alicerce para o Sucesso Escolar!"
                author="Prof. Cleiton"
                date="24 Fev 25"
                time="16:40"
                content={`Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico e aprendem as quatro operações essenciais: adição, subtração, multiplicação e divisão.
        \n\nDificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada!
        \n\nAqui, você encontra exercícios divertidos e educativos para ajudar seu filho a dominar as operações básicas e desenvolver confiança na matemática.`}
                hashtags="#MatematicaParaCriancas #EducacaoMatematica #OperacoesBasicas #AprendizadoDivertido #FundamentosEscolares #MatematicaFacil #ConfiancaNosNumeros"
            />
        </div>
    );
};

export default PostList;
