function getQuestoes() {

  var questoes = [
    {
      disciplina: 'PORTUGUÊS',
      numero: 1,
      especifica: false,
      imagem: '',
      questao: [
        '01. Considerando-se a divisão das palavras em sílabas, analisar os itens abaixo:',
        'I - P-neu-má-ti-co.',
        'II - Sub-ju-gar.',
        'III - Sa-gu-ão.',
        'IV - Er-rô-ne-o.',
        'Estão CORRETOS:'
      ],
      opcoes: [
        'a) Somente os itens I e III.',
        'b) Somente os itens I, II e IV',
        'c) Somente os itens III e IV',
        'd) Somente os itens II e IV'
      ],
      correta: 3
    },
    {
      disciplina: 'PORTUGUÊS',
      numero: 2,
      especifica: false,
      imagem: '',
      questao: [
        '02. O diretor, na ____________ de garantir a ______________ dos documentos, apôs sua _____________a cada página.',
      ],
      opcoes: [
        'a) intensão, veracidade, rubrica.',
        'b) Intensão, verascidade, rúbrica.',
        'c) Intenção, verascidade, rúbrica.',
        'd) Intenção, veracidade, rubrica.'
      ],
      correta: 3
    },
    {
      disciplina: 'PORTUGUÊS',
      numero: 3,
      especifica: false,
      imagem: '',
      questao: [
        '03. De acordo com as regras de concordância, assinale a opção em que a forma verbal está correta:'
      ],
      opcoes: [
        'a)	Para tornar mais claro as regras do programa de participação nos resultados, os diretores convidaram economistas que pudesse deixar os conteúdos mais compreensíveis para a maioria dos funcionários.',
        'b)	Muitos jovens não consegue concluírem o ensino médio e, sem formação, acaba entrando no mundo do crime.',
        'c)	Os objetivos desse plano pode ser resumido na seguinte frase: clareza na comunicação e envolvimento dos empregados na definição de metas.',
        'd)	Um dos problemas é a incerteza em relação ao eixo determinante dos conflitos internacionais, que, na guerra-fria era, sem dúvida, a questão ideológica.',
      ],
      correta: 3
    },
    {
      disciplina: 'PORTUGUÊS',
      numero: 4,
      especifica: false,
      imagem: '',
      questao: [
        '04. Dentre as alternativas abaixo, em qual delas as palavras não são sinônimas:'
      ],
      opcoes: [
        'a)	Soar – Transpirar',
        'b)	Absolver – Inocentar',
        'c)	Deferir – Conceder',
        'd)	Discriminar – Diferenciar'
      ],
      correta: 0
    },
    {
      disciplina: 'RACIOCÍNIO LÓGICO',
      numero: 5,
      especifica: false,
      imagem: 'img05.png',
      questao: [
        '05. Observe as duas figuras abaixo: Dado que a figura 1 possui 3 triângulos, quantos triângulos possui a figura 2?',
      ],
      opcoes: [
        'a) 6',
        'b) 7',
        'c) 8',
        'd) 10'
      ],
      correta: 2
    },
    {
      disciplina: 'RACIOCÍNIO LÓGICO',
      numero: 6,
      especifica: false,
      imagem: '',
      questao: [
        '06. Juliana é irmã da prima do irmão de Guilherme. Sabe-se que Guilherme tem um único irmão e Juliana uma única irmã. Portanto, pode-se afirmar que:'
      ],
      opcoes: [
        'a) Juliana não é prima de Guilherme',
        'b) Guilherme é irmão de Juliana',
        'c) Guilherme tem apenas uma prima',
        'd) Guilherme tem pelo menos duas primas'
      ],
      correta: 3
    },
    {
      disciplina: 'RACIOCÍNIO LÓGICO',
      numero: 7,
      especifica: false,
      imagem: '',
      questao: [
        '07. Qual das quatros opções abaixo representa a melhor comparação?',
        '"Água está para o gelo assim como leite está para..."'
      ],
      opcoes: [
        'a)  Biscoito',
        'b)  Mingau',
        'c)  Café',
        'd)  Queijo'
      ],
      correta: 3
    },
    {
      disciplina: 'RACIOCÍNIO LÓGICO',
      numero: 8,
      especifica: false,
      imagem: 'img08.png',
      questao: [
        '08. Entre as horas nos relógios há um padrão. Observe os relógios abaixo e identifique aquele que não pertence ao grupo?'
      ],
      opcoes: [
        'a)  Relógio A',
        'b)  Relógio B',
        'c)  Relógio C',
        'd)  Relógio D'
      ],
      correta: 3
    },
    {
      disciplina: 'MATEMÁTICA',
      numero: 9,
      especifica: false,
      imagem: '',
      questao: [
        '09. PM Pará - No PAN 2011, o Brasil terminou a competição a frente de Cuba no que refere-se ao total de medalhas. A diferença de medalhas entre Brasil e Cuba foi de 5 e o total de medalhas ganhas por eles foi de 277. O número de medalhas ganhas pelo Brasil foi de:'
      ],
      opcoes: [
        'a) 136',
        'b) 139',
        'c) 141',
        'd) 145'
      ],
      correta: 2
    },
    {
      disciplina: 'MATEMÁTICA',
      numero: 10,
      especifica: false,
      imagem: '',
      questao: [
        '10. Um estudante resolveu uma prova em 2 horas, fazendo 5 questões a cada 15 minutos. Se ele resolvesse apenas 4 questões a cada 15 minutos, em quanto tempo resolveria a prova?'
      ],
      opcoes: [
        'a) 1h e 60 min',
        'b) 1h e 36 min',
        'c) 2h e 25 min',
        'd) 2h e 30 min'
      ],
      correta: 3
    },
    {
      disciplina: 'MATEMÁTICA',
      numero: 11,
      especifica: false,
      imagem: '',
      questao: [
        '11. Um estudante ao comprar um livro de Matemática que custava R$ 72,50, obteve um desconto de 16%. Qual foi o valor pago pelo estudante?'
      ],
      opcoes: [
        'a) R$ 60,90',
        'b) R$ 11,60',
        'c) R$ 84,10',
        'd) R$ 61,80'
      ],
      correta: 0
    },
    {
      disciplina: 'MATEMÁTICA',
      numero: 12,
      especifica: false,
      imagem: '',
      questao: [
        '12. Se dois números reais têm soma 12 e o produto entre os dois é o maior possível, então esses números são:'
      ],
      opcoes: [
        'a) 5 e 7',
        'b) 4 e 8',
        'c) 2 e 10',
        'd) 6 e 6'
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 13,
      especifica: true,
      imagem: '',
      questao: [
        '13. No que se refere às estratégias para backup em ambientes de rede é correto afirmar que:'
      ],
      opcoes: [
        'a)	geralmente são uma combinação de métodos, desde o backup completo, passando por um ou mais níveis de backup incrementais, até o backup de arquivos dos usuários.',
        'b)	em redes Windows, é aconselhável desenvolver e implementar um plano de testes de prevenção de desastres para garantir a integridade de seus dados de backup.',
        'c)	um plano de prevenção de desastres prepara uma organização para se recuperar de desastres e de faltas de energia que não podem ser evitados.',
        'd)	não é prática recomendável para ambientes Windows, efetuar backup do estado do sistema de cada servidor e assegurar que o serviço de diretório Microsoft Active Directory esteja incluído em cada controlador de domínio.'
      ],
      correta: 0
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 14,
      especifica: true,
      imagem: '',
      questao: [
        '14. Desde a última reformulação da política de backups, realizada pela empresa JáVai, há alguns meses, a rotina baseia-se em backups normais e incrementais. Se dados forem perdidos, o processo de recuperação necessitará:'
      ],
      opcoes: [
        'a)	apenas do último backup incremental.',
        'b)	pelo menos do último backup normal.',
        'c)	do primeiro backup normal realizado após a reformulação.',
        'd)	do último backup normal e do último backup incremental.',
      ],
      correta: 1
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 15,
      especifica: true,
      imagem: '',
      questao: [
        '15. Considere o enunciado abaixo e as três propostas para completá-lo. Uma das principais razões que motivam o uso de SGBDs é o controle centralizado dos dados. A pessoa responsável por este controle numa organização é chamada administrador de dados ou administrador de banco de dados (DBA). As seguintes afirmações dizem respeito às funções principais de um DBA:',
        '1. definição da estrutura de dados e método de acesso.',
        '2. fornecimento de autorização de acesso ao sistema.',
        '3. especificação de regras de integridade:'
      ],
      opcoes: [
        'a)	Apenas 1 e 2',
        'b)	Apenas 1 e 3',
        'c)	Apenas 2 e 3',
        'd)	1, 2 e 3'
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 16,
      especifica: true,
      imagem: '',
      questao: [
        '16. Quando um administrador de banco de dados decide dividir um banco de dados centralizado em três fragmentos, mas nenhum usuário do sistema gerenciador de banco de dados percebe essa mudança, temos um exemplo da ocorrência do seguinte tipo de independência de dados:'
      ],
      opcoes: [
        'a)	lógica de comunidade',
        'b)	física',
        'c)	externa',
        'd)	conceitual'
      ],
      correta: 1
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 17,
      especifica: true,
      imagem: '',
      questao: [
        '17. Em tempo de instalação dos serviços de domínio do Active Diretory do Windows Server 2008 R2, a "Funcionalidade" expressa na tela direciona ações para o posicionamento e seleção de:'
      ],
      opcoes: [
        'a)	Domain Controller Options',
        'b)	Domain Functional Level',
        'c)	Name the Forest Root Domain',
        'd)	Forest Functional Level'
      ],
      correta: 1
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 18,
      especifica: true,
      imagem: '',
      questao: [
        '18. Considere as seguintes afirmativas sobre vírus de macro:',
        'I - Para que o vírus possa ser executado, o arquivo que o contém precisa ser necessariamente aberto.',
        'II - Arquivos nos formatos gerados por programas da Microsoft, como o Word, Excel, Powerpoint e Ac- cess, são os mais suscetíveis a esse tipo de vírus.',
        'III - Arquivos nos formatos RTF, PDF e PostScript são menos suscetíveis, mas isso não significa que não possam conter vírus.',
        'Estão corretas as afirmações'
      ],
      opcoes: [
        'a) II, apenas',
        'b) I e II, apenas',
        'c) I, e III, apenas',
        'd) I, II e III'
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 19,
      especifica: true,
      imagem: '',
      questao: [
        '19. O Sistema de Nomes de Domínio (DNS) – Domain Name System – é uma parte fundamental da Internet. Este sistema é responsável pelos seguintes serviços, EXCETO:'
      ],
      opcoes: [
        'a) Tradução dos nomes dos hospedeiros para endereços IP',
        'b) Apelidos de servidor de correio',
        'c) Apelidos de hospedeiros',
        'd) Resolução ARP (Protocolo de Resolução de Endereços)'
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 20,
      especifica: true,
      imagem: '',
      questao: [
        '20. O acesso à Internet nos dias atuais é realizado, em grande parte, por meio da rede sem fio Wi-Fi (Wireless Fidelity). Nessas redes, mesmo que esteja sendo utilizado o WPA-2, os dados transmitidos podem ser rastreados e roubados no Access Point ou em outro equipamento de rede. Uma forma de proteção para evitar esse tipo de roubo é pelo uso de:'
      ],
      opcoes: [
        'a) VLAN',
        'b) VPN',
        'c) WEP',
        'd) WAN'
      ],
      correta: 1
    }
  ];
  return questoes;
}