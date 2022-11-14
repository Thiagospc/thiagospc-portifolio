import React, { Component } from 'react';
import './app.css';
import { FaWhatsapp, FaDiscord, FaMailBulk, FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';

class App extends Component {


    render() {
        return (
            <div className='geral'>

                {/*iniciando header*/}
                <header id="header" className="flex">

                    <a 
                    href="https://www.linkedin.com/in/thiago-santos-9465091a1/" 
                    target={'blank'} 
                    className="logo">Thiagospc</a>

                    <nav className="header-nav flex">
                        <a href="#about" className="header-nav_link">Sobre mim</a>
                        <a href="#skills" className="header-nav_link">Skills</a>
                        <a href="#port" className="header-nav_link">Projetos</a>
                        <a href="#contact" className="header-nav_link">Contato</a>
                    </nav>

                    <a href="https://github.com/Thiagospc" className="github-link" target={"_blank"}>
                        <FaGithub/> Github
                    </a>

                </header>

                {/*Iniciando o main*/}
                <main id="main">

                    {/* section sobre minha pessoa :)*/}
                    <section className="main-sobremim">
                        <div className="main-sobremim_primary flex">
                            <div className="main-sobremim_primary--division animate__animated animate__backInLeft">
                                
                                {/* primary*/}
                                {/*meu conteúdo*/}
                                <h2 className="main-sobremim_primary--title">
                                    Olá, sou o Thiago Santos :)
                                </h2>

                                <p className="main-sobremim_primary--paragraph">
                                - Sou Desenvolvedor Web Frontend.<br />
                                - Atualmente estou estudando e trabalhando 
                                com programação, utilizando as tecnologias React.js e Node.js. <br />
                                - Como desenvolvedor, me interesso muito pela área de software e
                                estou sempre pronto para aprender novos tópicos, tendências e como se 
                                manter atualizado sobre as funções na profissão. <br />
                                - Tenho o cuidado de trabalhar com as melhores práticas de 
                                desenvolvimento web e manter sempre comigo uma atitude de
                                 aprendizagem ao longo da vida! <br /><br />
                                Sinta-se livre para me contatar 🙂 <br /> <br />
                                GitHub: https://github.com/Thiagospc
                                </p>
                                
                               

                            </div>

                            {/*secundary*/}
                            <div className="main-sobremim_secondary">
                                <img src="https://avatars.githubusercontent.com/u/64646796?v=4" alt="Foto Perfil" width="350" height="350"
                                    id="main-sobremim_primary--perfil" />
                            </div>
                        </div>
                        <div id="buttons">
                            <div className="main-sobremim_button">
                                <a href="#contact" className="main-sobremim_button--btn__link animate__animated animate__zoomInDown">
                                    Contato
                                </a>
                            </div>
                            <div className="main-sobremim_button">
                                <a href="https://drive.google.com/file/d/1JtEod6VV2LdNacCUqwsxxLT9wsYPjHxJ/view?usp=share_link" target={'_blank'}
                                    className="main-sobremim_button--btn__link-second animate__animated animate__zoomInDown">
                                    <FaCloudDownloadAlt/> Curriculo 
                                </a>
                            </div>
                        </div>
                    </section>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#4F22F2" fill-opacity="1" d="M0,32L34.3,26.7C68.6,21,137,11,206,26.7C274.3,43,343,85,411,101.3C480,117,549,107,617,85.3C685.7,64,754,32,823,53.3C891.4,75,960,149,1029,160C1097.1,171,1166,117,1234,101.3C1302.9,85,1371,107,1406,117.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                    </svg>

                    {/* section de skills*/}
                    <section class="skill" id="skills">

                        <h1 class="skill-title">Minhas Skills</h1>
                        <div class="skill-all">
                            
                            
                            <div class="skill-first">

                                <img src="https://mxtheuz.com.br/View/wwwroot/images/skills.png" alt="Skills Image" width="800" height="600" id="skills-image" />

                                <div className='divisao'>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">ReactJS</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description">TypeScript</p>
                                    </div>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">NodeJS</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description"></p>
                                    </div>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">JavaScript</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description">TypeScript, MySQL, Desenvolvimento Desktop com ElectronJS, 
                                        Verificações Aprofundadas, AJAX, NodeJS, React.js, JQuery, Discord.js, MongoDB</p>
                                    </div>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">Python</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description">PysimpleGUI, conexão com banco de dados, API</p>
                                    </div>

                                </div>

                                <div className='divisao2'>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">MySQL/SQL</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description">PhpMyAdmin, workbench</p>
                                    </div>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">HTML</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description"></p>
                                    </div>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">CSS</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description">Sass (a CSS extension)</p>
                                    </div>

                                    <div class="skill-first_block">
                                        <h2 class="skill-first_block--title">PHP</h2>
                                        <span class="skill-first_block--level">Nível: Avançado</span>
                                        <p class="skill-first_block--description">Desenvolvimento WEB, Banco de Dados MySQL, Consulta e criação de
                                        APIs diversas, JWT (Json Web Token) e Envio de E-mails</p>
                                    </div>
                                    
                                </div>                                

                                

                                                               
                            </div>

                        </div>

                    </section>

                    {/* section de projetos*/}
                    <section class="projects" id="port">
                        <h1 class="project-title">
                            Projetos Recentes
                        </h1>
                        <div class="projetos">

                            <div class="projetos-project">
                                <span class="projetos-project_title">
                                    Prime Flix
                                </span>
                                <img src="https://user-images.githubusercontent.com/64646796/199868332-de5b0f0d-a598-4e41-8440-7f5688cfd348.png" alt="" width="200" height="100"
                                    class="projetos-project_image" />
                                <span class="projetos-project_type">
                                    WebApp
                                </span>
                                <a href="https://primeflixthiagospc.netlify.app/" target={"_blank"}>
                                    <button id="linkk" class="projetos-project_button">
                                    https://primeflixthiagospc.netlify.app/
                                    </button>
                                </a>
                                <span class="projetos-project_date">
                                    Desenvolvido em 2022
                                </span>
                            </div>

                            <div class="projetos-project">
                                <span class="projetos-project_title">
                                    Site Nutri
                                </span>
                                <img src="https://user-images.githubusercontent.com/64646796/199868612-9336d2d4-f557-49b5-b10a-3049d7ee8df9.png" alt="" width="200" height="100"
                                    class="projetos-project_image" />
                                <span class="projetos-project_type">
                                    WebApp
                                </span>
                                <a href="https://site-nutri.netlify.app/" target={"_blank"}>
                                    <button class="projetos-project_button">
                                    https://site-nutri.netlify.app/
                                    </button>
                                </a>
                                <span class="projetos-project_date">
                                    Desenvolvido em 2022
                                </span>
                            </div>
                            

                        </div>
                    </section>

                    {/*contatos*/}
                    <section class="suporte" id="contact">
                        <h1 class="suporte-title">
                            Gostou do meu trabalho?
                        </h1>
                        <p class="suporte-subtitle">
                            Nossa equipe de atendimento estará disponível para ajudar quem for preciso!
                        </p>

                        <div class="suporte-social">

                            <img src="https://mxtheuz.com.br/View/wwwroot/images/suporte.png" alt="Suporte" width="700" height="350" id="image-suport" />

                            <div class="suporte-social_infos">

                                <div class="suporte-social_infos--div">
                                    <a href="https://wa.me/+5591980659587" class="suporte-social_infos--div__link">
                                        <FaWhatsapp/>
                                        <span> Whatsapp</span>
                                    </a>
                                </div>

                                <div class="suporte-social_infos--div">
                                    <a href="https://discord.com/users/502963002182729749" class="suporte-social_infos--div__link">
                                        <FaDiscord/>
                                        <span> Discord</span>
                                    </a>
                                </div>


                                <div class="suporte-social_infos--div">
                                    <a href="mailto:thiago.spc1029@gmail.com" class="suporte-social_infos--div__link">
                                        <FaMailBulk/>
                                        <span> E-mail</span>
                                    </a>
                                </div>

                                <div class="suporte-social_infos--div">
                                    <a href="https://github.com/Thiagospc" class="suporte-social_infos--div__link">
                                        <FaGithub/>
                                        <span> Github</span>
                                    </a>
                                </div>

                            </div>
                        </div>

                       

                    </section>

                </main>

                {/*Iniciando footer*/}
                <footer className="footer">
                    <a href="https://pt.wikipedia.org/wiki/Direito_autoral">Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022
                        Thiagospc</a>
                </footer>

            </div>
        );
    }
}

export default App;
