/**
 * Prova para cargo de técnico de enfermagem
 */

function getQuestoes() {

  var questoes = [
    {
      disciplina: 'PORTUGUÊS',
      numero: 1,
      especifica: false,
      imagem: '',
      questao: [
        '01. A expressão, “mas”, na norma culta da Língua Portuguesa indica:',
      ],
      opcoes: [
        'a) adição',
        'b) oposição',
        'c) alternativa',
        'd) explicação',
        'e) causa',
      ],
      correta: 1
    },
    {
      disciplina: 'PORTUGUÊS',
      numero: 2,
      especifica: false,
      imagem: '',
      questao: [
        '02. Assinale a alternativa que está de acordo com as regras de concordância da língua padrão.',
      ],
      opcoes: [
        'a) Para tornar mais claro as regras do programa de participação nos resultados, os diretores convidaram economistas que pudesse deixar os conteúdos mais compreensíveis para a maioria dos funcionários.',
        'b) Muitos jovens não consegue concluírem o ensino médio e, sem formação, acaba entrando no mundo do  crime.',
        'c) Os objetivos desse plano pode ser resumido na seguinte frase: clareza na comunicação e envolvimento dos empregados na definição de metas.',
        'd) Um dos problemas é a incerteza em relação ao eixo determinante dos conflitos internacionais, que, na guerra- fria era, sem dúvida, a questão ideológica.',
        'e) As ações governamentais, em sua maioria, não visa o bem público, mas valorizar a imagem do governo.'
      ],
      correta: 3
    },
    {
      disciplina: 'PORTUGUÊS',
      numero: 3,
      especifica: false,
      imagem: '',
      questao: [
        '03. Para que se respeite a norma padrão da Língua Portuguesa, será preciso corrigir a frase:'
      ],
      opcoes: [
        'a)	Os diretores estão satisfeitos, porque a atitude do gestor veio ao encontro do que desejavam.',
        'b)	Onde coloquei minhas chaves?',
        'c)	Atuo no setor de controladoria a 15 anos.',
        'd)	Nesta empresa, precisa-se de estagiários.',
        'e)	Não há nada entre mim e você, só amizade.',
      ],
      correta: 2
    },
    {
      disciplina: 'MATEMÁTICA',
      numero: 4,
      especifica: false,
      imagem: '',
      questao: [
        '04. Um título com valor de face de R$ 1.000,00, faltando 3 meses para seu vencimento, é descontado em um banco que utiliza taxa de desconto bancário, ou seja, taxa de desconto   simples “por fora”, de 5% ao mês. O valor presente do título, em reais, é:'
      ],
      opcoes: [
        'a)	860,00',
        'b)	850,00',
        'c)	840,00',
        'd)	830,00',
        'e) 820,00',
      ],
      correta: 1
    },
    {
      disciplina: 'MATEMÁTICA',
      numero: 5,
      especifica: false,
      imagem: '',
      questao: [
        '05. Um restaurante “por quilo” apresenta seus preços da seguinte forma: “De segunda à sexta-feira: 250g por R$ 12,50”. Rodolfo almoçou nesse restaurante na última sexta-feira. Se a quantidade de alimentos que consumiu nesse almoço custou R$ 21,00, então está correto afirmar que essa quantidade, em gramas, igual a:',
      ],
      opcoes: [
        'a) 375',
        'b) 380',
        'c) 420',
        'd) 425',
        'e) 450',
      ],
      correta: 2
    },
    {
      disciplina: 'RACIOCÍNIO LÓGICO',
      numero: 6,
      especifica: false,
      imagem: '',
      questao: [
        '06. Uma quarta palavra que daria continuidade lógica à sequência poderia ser: Pá - Xale – Japeri'
      ],
      opcoes: [
        'a) Casa',
        'b) Anseio',
        'c) Urubu',
        'd) Café',
        'e) Sua',
      ],
      correta: 1
    },
    {
      disciplina: 'RACIOCÍNIO LÓGICO',
      numero: 7,
      especifica: false,
      imagem: '',
      questao: [
        '07. Juliana é irmã da prima do irmão de Guilherme. Sabe-se que Guilherme tem um único irmão e Juliana uma única irmã. Portanto, pode-se afirmar que:',
      ],
      opcoes: [
        'a)  Juliana não é prima de Guilherme',
        'b)  Guilherme é irmão de Juliana',
        'c)  Guilherme tem apenas uma prima',
        'd)  Guilherme tem pelo menos duas primas',
        'e)  Juliana tem apenas um primo'
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 8,
      especifica: true,
      imagem: '',
      questao: [
        '08. Na suspeita de fraturas expostas, a conduta de emergência prioritária é:',
      ],
      opcoes: [
        'a)  recolocar a articulação em seu local correto e imobilizar com tala.',
        'b)  realizar analgesia, aplicar frio local para diminuir a dor e remover o paciente para um setor de RX.',
        'c)  manter a parte afetada elevada e em repouso, aplicar bolsa de gelo e imobilizar.',
        'd)  proteger o ferimento com gaze e imobilizar o membro mantendo-o na posição em que se encontrava.',
        'e)  apoiar o membro fraturado na tala e fixar com bandagem compressiva'
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 9,
      especifica: true,
      imagem: '',
      questao: [
        '09. Dentre as manifestações clínicas do paciente com quadro de Insuficiência respiratória aguda, a que representa maior sinal de risco de parada respiratória iminente é(são):',
      ],
      opcoes: [
        'a) alteração motora',
        'b) oscilação dos sinais vitais',
        'c) alteração do nível de consciência',
        'd) tremores e sudorese',
        'e) estertores e sibilos',
      ],
      correta: 2
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 10,
      especifica: true,
      imagem: '',
      questao: [
        '10. Uma criança de 6 anos apresenta crise convulsiva na hora da saída da escola. Enquanto o atendimento especializado não chega ao local, está contra-indicado o seguinte procedimento:',
      ],
      opcoes: [
        'a) remover saliva em excesso',
        'b) manter a criança no chão',
        'c) segurar a criança firmemente, evitando que ela se debata',
        'd) afrouxar as vestes e permanecer ao lado da criança',
        'e) afastar qualquer objeto que cause risco físico à criança',
      ],
      correta: 2
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 11,
      especifica: true,
      imagem: '',
      questao: [
        '11. Uma pessoa, vítima de atropelamento em via pública, está com perda de sensibilidade nos braços e pernas, podendo estar com fratura na região cervical. Neste caso devemos:',
      ],
      opcoes: [
        'a) transportá-la mantendo a coluna cervical imobilizada.',
        'b) deixar a cabeça mais alta que o corpo.',
        'c) realizar massagens nos braços e pernas ativando a circulação.',
        'd) dar-lhe algum analgésico.',
        'e) transportar em decúbito lateral, para evitar broncoaspiração.'
      ],
      correta: 0
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 12,
      especifica: true,
      imagem: '',
      questao: [
        '12. Uma mulher de 54 anos passa mal na rua e a ambulância é chamada. A equipe de socorro, ao examiná-la, constata: tremores; sudorese intensa; palpitação; palidez e sensação de fome. O mais provável é que se trata de um caso de:',
      ],
      opcoes: [
        'a) hiperglicemia e deve-se aplicar insulina regular subcutânea.',
        'b) cetoacidose diabética e deve-se remover imediatamente para um atendimento hospitalar.',
        'c) hipoglicemia e deve-se oferecer líquidos que contenham glicose como laranjada ou água com açúcar.',
        'd) acidente vascular cerebral e deve-se remover para uma UTI',
        'e) hipertireoidismo e deve-se remover para uma unidade cirúrgica.'
      ],
      correta: 2
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 13,
      especifica: true,
      imagem: 'question12.png',
      questao: [
        '13. IBFC - 2013 - EBSERH - Técnico em Enfermagem- O reconhecimento dos riscos ambientais é uma etapa fundamental do processo que servirá de base para decisões quanto às ações de prevenção, eliminação ou controle desses riscos. Reconhecer o risco significa identificar, no ambiente de trabalho, fatores ou situações com potencial de danos à saúde do trabalhador ou, em outras palavras, se existe a possibilidade deste dano. Assinale a alternativa que representa o significado do seguinte símbolo:'
      ],
      opcoes: [
        'a) Risco biológico',
        'b) Risco de radiação',
        'c) Risco de queimadura',
        'd) Risco químico',
        'e) Risco de infecção',
      ],
      correta: 0
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 14,
      especifica: true,
      imagem: '',
      questao: [
        '14. Assinale a alternativa que NÃO apresenta fatores que podem gerar danos à saúde do trabalhador.'
      ],
      opcoes: [
        'a)	Aspectos mecânicos, como máquinas, ferramentas e equipamentos que não oferecem manuseio e segurança adequada, causando acidentes de trabalho.',
        'b)	Aspectos químicos, físicos e biológicos, como o contato com substâncias químicas prejudiciais à saúde sem a devida proteção.',
        'c)	Aspectos ligados ao planejamento e execução de tarefas, como uma pressão muito grande do chefe, ritmo de trabalho muito acelerado, exigências irreais de produtividade.',
        'd)	Aspectos ligados à dimensão corporal, isto é, locais, espaços e instrumentos de trabalho que são adequados e respeitam as necessidades físicas do trabalhador.',
        'e) Aspectos ligados aos movimentos do corpo, principalmente em trabalhos que exigem força ou movimentos repetitivos.',
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 15,
      especifica: true,
      imagem: '',
      questao: [
        '15. Assinale a alternativa que apresenta as principais causas de Lesão por Esforço Repetitivo (LER).'
      ],
      opcoes: [
        'a)	Posto de trabalho adequado, bem projetado ou ergonomicamente correto.',
        'b)	Atividades no trabalho que não exijam força excessiva com as mãos.',
        'c)	Posturas adequadas e favoráveis às articulações.',
        'd)	Ritmo normal de trabalho.',
        'e) Repetição sistemática de um mesmo padrão de movimento; falta de orientação e desconhecimento sobre os riscos de LER.',
      ],
      correta: 4
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 16,
      especifica: true,
      imagem: '',
      questao: [
        '16. Transtornos mentais e de comportamento relacionados ao trabalho têm sido cada vez mais frequentes e responsáveis por afastamentos de trabalhadores por incapacidade temporária ou aposentadoria por invalidez. Quadro psicopatológico específico, caracterizado por exaustão emocional, despersonalização e autodepreciação, pode ser indicativo de que o trabalhador esteja apresentando:',
      ],
      opcoes: [
        'a)	síndrome de burnout',
        'b)	síndrome pós-traumática',
        'c)	síndrome da descompensação no trabalho',
        'd)	transtorno obsessivo compulsivo',
        'e) distúrbio neurovegetativo',
      ],
      correta: 0
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 17,
      especifica: true,
      imagem: '',
      questao: [
        '17. Após atendimento a um trabalhador acidentado, o técnico de enfermagem registrará a assistência prestada. Essa atividade deve:'
      ],
      opcoes: [
        'a)	ser revisada pelo supervisor médico.',
        'b)	elatar os fatos em ordem cronológica.',
        'c)	excluir a terapêutica medicamentosa.',
        'd)	valorizar a coordenação da assistência à urgência.',
        'e) empregar, se necessário, corretor de texto.'
      ],
      correta: 1
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 18,
      especifica: true,
      imagem: '',
      questao: [
        '18. Nos pacientes que se encontram em estado de inconsciência, alguns cuidados de enfermagem podem ser realizados, EXCETO:'
      ],
      opcoes: [
        'a)	puncionar veia calibrosa.',
        'b)	fazer tricotomia.',
        'c)	realizar mudança de decúbito de 2 em 2 horas.',
        'd)	administrar 2.000 a 2.500 ml de líquido por via oral.',
        'e) aplicar proteção de gaze umedecida em soro fisiológico nos olhos.'
      ],
      correta: 3
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 19,
      especifica: true,
      imagem: '',
      questao: [
        '19. O posicionamento do profissional de saúde que socorre uma vítima que necessita de ressuscitação cardiorrespiratória é:',
      ],
      opcoes: [
        'a) ajoelhar-se atrás do acidentado, de modo que seus ombros fiquem diretamente sobre o esterno do acidentado.',
        'b) ajoelhar-se ao lado do acidentado, de modo que seus ombros fiquem diretamente sobre o esterno do acidentado.',
        'c) ajoelhar-se ao lado do acidentado, de modo que seus ombros fiquem diretamente sobre o abdômen do acidentado.',
        'd) debruçar-se na frente do acidentado, de modo que suas mãos fiquem diretamente sobre o abdômen do acidentado.',
        'e) debruçar-se atrás do acidentado, de modo que suas mãos fiquem diretamente sobre a cabeça do acidentado.',
      ],
      correta: 1
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 20,
      especifica: true,
      imagem: '',
      questao: [
        '20. Considerando a Norma Regulamentadora 32, de Segurança e Saúde no Trabalho em Serviços de Saúde, assinale a alternativa incorreta.'
      ],
      opcoes: [
        'a) São vedados o reencape e a desconexão manual de agulhas.',
        'b) É vedado o procedimento de reutilização das embalagens de produtos químicos.',
        'c) Os trabalhadores que utilizarem objetos perfurocortantes não devem ser os responsáveis pelo seu descarte.',
        'd) Deve ser mantida a rotulagem do fabricante na embalagem original dos produtos químicos utilizados em serviços de saúde.',
        'e) Antes da utilização de qualquer equipamento, os operadores devem ser capacitados quanto ao modo de operação e seus riscos.'
      ],
      correta: 2
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 21,
      especifica: true,
      imagem: '',
      questao: [
        '21. Em relação aos procedimentos para curativo de feridas abertas ou infectadas em um ambulatório de atendimento ao trabalhador é correto afirmar que:',
      ],
      opcoes: [
        'a) quando se faz a troca de vários curativos em um mesmo paciente, devem-se iniciar pelas colostomias e fístulas, seguindo-se as feridas abertas infectadas, depois as não infectadas e por último as de incisão limpa e fechada.',
        'b) deve-se lavar as mãos para evitar infecção somente após a conclusão do curativo.',
        'c) deve-se utilizar somente o avental como EPI.',
        'd) deve-se utilizar somente luvas como EPI.',
        'e) independente do aspecto, serão sempre realizados conforme a técnica de curativo ou seja, sempre da área menos contaminada para a mais contaminada.'
      ],
      correta: 4
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 22,
      especifica: true,
      imagem: '',
      questao: [
        '22. Que instrumento pode ser identificado como de proteção coletiva?',
      ],
      opcoes: [
        'a) Gorro',
        'b) Capote',
        'c) Corrimão',
        'd) Luva',
        'e) Braçadeira'
      ],
      correta: 2
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 23,
      especifica: true,
      imagem: '',
      questao: [
        '23. Numa empresa, os trabalhadores estão expostos a diversos riscos, sendo um deles o risco ergonômico. Um exemplo desse tipo de risco é o seguinte:',
      ],
      opcoes: [
        'a) eletricidade',
        'b) animal peçonhento',
        'c) esforço físico intenso',
        'd) radiações ionizantes',
        'e) arranjo físico inadequado'
      ],
      correta: 2
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 24,
      especifica: true,
      imagem: '',
      questao: [
        '24. Uma notificação compulsória imediata deve ocorrer num prazo que se inicia no momento do primeiro atendimento ao paciente e termina.',
      ],
      opcoes: [
        'a) 24 horas após esse primeiro atendimento.',
        'b) 50 minutos após a chegada de uma ambulância.',
        'c) 12 horas após o atendimento prestado por um médico.',
        'd) 30 minutos após esse primeiro atendimento.',
        'e) 36 horas após o atendimento prestado por um médico.'
      ],
      correta: 0
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 25,
      especifica: true,
      imagem: '',
      questao: [
        '25. Um homem de 30 anos aguarda consulta médica no serviço de saúde do trabalhador, onde há um técnico de enfermagem responsável pela triagem e orientações. Ao ser atendido pela equipe, refere história de cansaço, dores no corpo e manchas na pele. O médico que está de serviço suspeita de varicela e solicita que o técnico instale a precaução recomendada. O tipo de precaução a ser adotada deve ser a:',
      ],
      opcoes: [
        'a) precaução padrão',
        'b) precaução respiratória',
        'c) precaução comum',
        'd) precaução para gotículas',
        'e) precaução para aerossóis'
      ],
      correta: 4
    },
    {
      disciplina: 'CONHECIMENTOS ESPECÍFICOS',
      numero: 26,
      especifica: true,
      imagem: '',
      questao: [
        '26. LER E DORT são doenças do trabalho mais comumente devido a qual atividade:',
      ],
      opcoes: [
        'a) Ambientes de trabalho com umidade.',
        'b) Ambientes que configuram espaço confinado.',
        'c) Ambientes de trabalho em altura.',
        'd) Ambientes de escritórios e/ou atividades repetitivas.',
        'e) Ambientes de trabalho com temperaturas de -5°C.'
      ],
      correta: 3
    }
  ];
  return questoes;
}

function getTotalQuestoes() {
  
  const total = getQuestoes();
  return total.length;

}

function getTotalQuestoesEspecificas() {

  const total = getQuestoes();
  let cont = 0;

  total.forEach(element => {
    if (element.especifica)
      cont++;
  });
  return cont;
}