import "./documentacao.css";
import { useNavigate } from "react-router-dom";


export default function Topicos() {

  const navigate = useNavigate();

  return (
    <div className="pagina-topicos">

      <div className="menu-lateral">
        <h2>Tópicos</h2>

        <a href="#introducao">O que é o OneDevsOS?</a>
        <a href="#debian">O que é Debian?</a>
        <a href="#diferenca">Qual a Diferença?</a>
        <a href="#ferramentas">Ferramentas Instaladas</a>
        <a href="#instalacao">Como Instalar</a>
        <a href="#construcaoIso">Pré-requisitos para Construção da ISO</a>
        <a href="#instalacaoSistema">Instalação do Sistema </a>
        <a href="#estrutura">Estrutura do Projeto</a>
        <a href="#ajuda">Precisa de Ajuda?</a>
        <a href="#politicas">Políticas e Boas Práticas</a>
        <a href="#conclusao">Conclusão</a>
        
      </div>

      {/* TEXTO */}
      <div className="conteudo-geral">

        <div id="introducao" className="secao">
          <h1>O que é o OneDevsOS?</h1>
          <p>
            O OneDevsOS é uma distribuição Linux personalizada baseada no Debian Trixie,
            desenvolvida para atender desenvolvedores, estudantes de tecnologia,
            profissionais DevOps e especialistas em segurança da informação.
          </p>

          <p>
            O sistema foi projetado para reunir, em um único ambiente, ferramentas de
            desenvolvimento, programação, pentest, automação e segurança digital,
            oferecendo praticidade e produtividade desde a instalação inicial.
          </p>

          <p>
            Seu ambiente utiliza o XFCE, conhecido por ser leve, rápido e altamente
            personalizável, permitindo bom desempenho mesmo em computadores com
            hardware mais simples.
          </p>
        </div>

        <div id="debian" className="secao">
          <h1>O que é Debian?</h1>

          <p>
            O Debian é uma das distribuições Linux mais conhecidas e respeitadas do
            mundo. Ele é um sistema operacional livre e open source mantido por uma
            comunidade global de desenvolvedores.
          </p>

          <p>
            Seu principal objetivo é fornecer estabilidade, segurança e liberdade aos
            usuários. Por ser open source, qualquer pessoa pode estudar, modificar,
            distribuir e contribuir com o código-fonte do sistema.
          </p>

          <p>
            O Debian funciona através de um sistema de gerenciamento de pacotes,
            permitindo instalar, atualizar e remover programas de forma simples e segura.
          </p>
        </div>

        <div id="diferenca" className="secao">
          <h1>Qual a Diferença?</h1>

          <p>
            O OneDevsOS se diferencia das distribuições Linux tradicionais por oferecer
            um ambiente já preparado para desenvolvimento e segurança digital logo após
            a instalação.
          </p>

          <p>
            O sistema busca centralizar tudo em uma única plataforma pronta para uso com
            ferramentas pré-configuradas, unindo Segurança e Desenvolvimento numa única distro.
          </p>

          <br />

          <ul>
            <li>Ambiente otimizado para programação e desenvolvimento;</li>
            <li>Ferramentas de segurança e pentest já integradas;</li>
            <li>Recursos voltados para DevSecOps;</li>
            <li>Sistema leve e personalizável;</li>
            <li>Estrutura preparada para produtividade;</li>
            <li>Integração entre desenvolvimento e segurança digital;</li>
            <li>Facilidade para estudantes e profissionais da área de tecnologia.</li>
          </ul>
        </div>

        <div id="ferramentas" className="secao">
          <h1>Ferramentas Instaladas</h1>

          <p>O OneDevsOS possui diversas ferramentas pré-instaladas para auxiliar no desenvolvimento,
             administração de sistemas, segurança digital, automação e infraestrutura.</p>
          <p>Todas as ferramentas foram integradas para entregar um ambiente pronto para uso logo
             após a instalação do sistema.</p>

          <h2>Linguagens e Desenvolvimento</h2>
          
          <br />

          <ul>
            <li>Python → Utilizado para automação, scripts, inteligência artificial, 
                desenvolvimento web e ferramentas de segurança;</li>

            <li>Java → Utilizado para desenvolvimento de aplicações corporativas, sistemas desktop e
                aplicações Android;</li>

            <li>Go → Linguagem focada em desempenho, concorrência e ferramentas de infraestrutura;</li>

            <li>Node.js → Ambiente utilizado para desenvolvimento backend, APIs e aplicações web em JavaScript;</li>

            <li>Rust → Linguagem moderna focada em segurança de memória e desempenho;</li>

            <li>Ruby → Utilizada para automações, scripts e aplicações web.</li>
          </ul>

          <br />

          <h2>Ferramentas de Pentest e Segurança</h2>

          <br />

          <ul>
            <li>Nmap → Ferramenta de análise de redes e identificação de portas, serviços e hosts ativos;</li>

            <li>Wireshark → Utilizado para captura e análise de tráfego de rede em tempo real;</li>

            <li>Aircrack-ng → Ferramenta voltada para auditoria e análise de redes Wi-Fi;</li>

            <li>John the Ripper → Utilizado para testes de força de senha e auditoria de credenciais.</li>
          </ul>

          <br />

          <h2>Ferramentas DevSecOps e Infraestrutura</h2>

          <br />

          <ul>
            <li>Docker → Plataforma de containers para criação e isolamento de ambientes;</li>

            <li>Podman → Gerenciador de containers focado em segurança e execução sem daemon;</li>

            <li>Ansible → Ferramenta de automação de servidores e infraestrutura;</li>

            <li>AppArmor → Sistema de proteção que aplica restrições de acesso aos programas;</li>

            <li>Fail2ban → Ferramenta de proteção contra ataques de força bruta;</li>

            <li>ClamAV → Antivírus open source utilizado para detecção de malwares.</li>
          </ul>

          <br />

          <h2>Outras Tecnologias</h2>

          <br />

          <ul>
            <li>XFCE Desktop Environment → Ambiente gráfico leve, rápido e personalizável;</li>

            <li>Calamares Installer → Instalador gráfico responsável pela instalação do sistema;</li>

            <li>Nix Package Manager → Gerenciador avançado de pacotes e dependências;</li>

            <li>LightDM → Gerenciador responsável pela tela de login do sistema.</li>
          </ul>
        </div>

        <div id="instalacao" className="secao">
          <h1>Como Instalar o OneDevsOS?</h1>

          <h2>Requisitos mínimos</h2>
          
          <br />

          <ul>
            <li>Processador 64-bit (x86_64);</li>
            <li>2GB de memória RAM (recomendado 4GB ou mais);</li>
            <li>20GB de espaço em disco;</li>
            <li>Suporte UEFI ou BIOS;</li>
            <li>Conexão com internet.</li>
          </ul>

          <br />

          <h2>Clonando o Projeto</h2>

          <br />

          <pre>
{`git clone https://github.com/GabrielSantana1996sp/OneDevsTCC.git

cd OneDevsTCC

chmod +x build.sh

sudo ./build.sh`}
          </pre>

          <br />

          <h2>O que acontece durante a construção?</h2>

          <br />

          <ol>
            <li>O sistema verifica dependências;</li>
            <li>Os pacotes do Debian são baixados;</li>
            <li>A estrutura do sistema é criada;</li>
            <li>As ferramentas do OneDevsOS são instaladas;</li>
            <li>A ISO bootável é gerada.</li>
          </ol>

          <br />

          <h2>Testando a ISO</h2>

          <br />

          <pre>
{`qemu-system-x86_64 -m 4096 -cdrom onedevsos.iso -boot d -enable-kvm`}
          </pre>
        </div>

        <div id="construcaoIso" className="secao">
          <h1>Pré-requisitos para Construção da ISO</h1>

          <p>Todos os comandos devem ser executados no terminal Linux, dentro de um sistema baseado
             no Debian Trixie ou derivado.</p>
          
          <br />

          <p>O script de construção instala automaticamente as dependências necessárias:</p>

          <br />

            <pre>
{`debootstrap

live-build

xorriso

squashfs-tools

syslinux-common

isolinux`}
          </pre>

          <br />

          <h2>O que acontece após instalar essas dependências?</h2>

          <br />

          <ul>
            <li>Debootstrap → Cria a estrutura base do Debian utilizada pelo OneDevsOS;</li>
            <li>Live-build → Gera o ambiente Live da distribuição;</li>
            <li>Xorriso → Responsável pela criação da ISO bootável;</li>
            <li>Squashfs-tools → Compacta os arquivos do sistema;</li>
            <li>Syslinux-common e Isolinux → Configuram o boot e inicialização da ISO.</li>
          </ul>
  
        </div>

        <div id="instalacaoSistema"className="secao">

        <h1>Instalação do Sistema</h1>

        <br />

        <ol>
          <li>Grave a ISO em um pendrive bootável;</li>
          <li>Inicialize o computador pelo pendrive;</li>
          <li>Aguarde o carregamento do modo Live;</li>
          <li>Clique em “Instalar OneDevsOS” na área de trabalho;</li>
          <li>Siga as instruções do instalador Calamares;</li>
          <li>Configure idioma, teclado, usuário e particionamento;</li>
          <li>Aguarde a conclusão da instalação;</li>
          <li>Reinicie o computador;</li>
          <li>Remova a mídia de instalação.</li>
        </ol>
        
        <br />

        <p>Após finalizar a instalação, o sistema estará pronto para uso com todas as ferramentas
           pré-configuradas do OneDevsOS.</p>

        </div>

        <div id="estrutura" className="secao">
          <h1>Estrutura de Pastas do Projeto</h1>

          <pre>
{`.
├── build.sh
├── config/
│ ├── package-lists/
│ ├── hooks/
│ ├── includes.chroot/
│ └── apt/
└── README.md
`}
          </pre>

          <br />

          <p>
            O arquivo build.sh é responsável pela construção da ISO do sistema.
            Já a pasta config contém as listas de pacotes, scripts, arquivos do
            sistema e configurações do APT.
          </p>
        </div>

        <div id="ajuda" className="secao">
          
          <h1>Precisa de Ajuda?</h1>

          <p>Caso precise de ajuda, dúvidas, sugestões ou queira reportar problemas, o OneDevsOS
              possui uma página de contato disponível para envio de mensagens via e-mail na página
              de <a onClick={()=>navigate("/contato")}>contato</a> do projeto.</p>

              <br />

              <p>Email:</p>
              <p>onedevsofficial@gmail.com</p>
        </div>

        <div id="politicas" className="secao">
          <h1>Políticas e Boas Práticas</h1>

          <p>
            O OneDevsOS segue princípios da comunidade Linux e do movimento open source,
            incentivando o uso responsável, ético e colaborativo da tecnologia.
          </p>

          <br />

          <h2>Uso Responsável</h2>

          <br />

          <ul>
            <li>Utilização educacional;</li>
            <li>Ambientes laboratoriais;</li>
            <li>Testes autorizados;</li>
            <li>Uso defensivo das ferramentas.</li>
          </ul>

          <br />

          <h2>Não é permitido</h2>

          <br />
          
          <ul>
            <li>Ataques não autorizados;</li>
            <li>Invasões;</li>
            <li>Distribuição de malware;</li>
            <li>Violação de privacidade;</li>
            <li>Atividades ilegais.</li>
          </ul>
        </div>

        <div id="conclusao" className="secao">
          <h1>Conclusão</h1>

          <p>
            O OneDevsOS foi desenvolvido para oferecer uma plataforma Linux moderna,
            leve e preparada para desenvolvimento, automação e segurança digital.
          </p>

          <p>
            Utilizando a estabilidade do Debian e ferramentas amplamente utilizadas no
            mercado de tecnologia, o projeto busca facilitar o aprendizado, aumentar a
            produtividade e entregar um ambiente completo desde a instalação inicial.
          </p>

          <p>
            O sistema incentiva o uso responsável da tecnologia, colaboração open source
            e o compartilhamento de conhecimento entre estudantes, desenvolvedores e
            profissionais da área.
          </p>
        </div>

      </div>
    </div>
  );
}