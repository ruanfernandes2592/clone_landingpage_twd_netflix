document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('#temporada-select');
    const temporadas = document.querySelectorAll('.temporadas__shows__list')
    const miniDescricao = document.querySelector('.mini-descricao');
    console.log(select.length);

    function atualizouSelect() {
        select.addEventListener('change', () => {

            for(let i = 0; i < temporadas.length; i++) {
                temporadas[i].classList.remove('temporadas__shows__list--is-active');
            }

            if (select.value == 'temp01') {
                temporadas[0].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2010</h3><p class="texto--secundario">Em um mundo dominado por zumbis, um grupo de sobreviventes tenta encontrar segurança e respostas dentro do CCD.</p>'
            }
            if (select.value == 'temp02') {
                temporadas[1].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2011</h3><p class="texto--secundario">Na segunda temporada deste drama apocalíptico, Rick e seu grupo continuam buscando refúgio contra os zumbis em um mundo devastado e perigoso.</p>'
            }
            if (select.value == 'temp03') {
                temporadas[2].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2012</h3><p class="texto--secundario">Na terceira temporada, Rick e o grupo de sobreviventes dominam uma prisão abandonada e descobrem uma comunidade liderada por um homem poderoso conhecido como Governador.</p>'
            }
            if (select.value == 'temp04') {
                temporadas[3].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2013</h3><p class="texto--secundario">Após o massacre, começa a caçada pelo Governador. Rick, Daryl, Michonne e Karen planejam seus próximos passos.</p>'
            }
            if (select.value == 'temp05') {
                temporadas[4].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2014</h3><p class="texto--secundario">Na 5a. temporada, Rick e seu grupo enfrentam seus sequestradores em Terminus, descobrem o que aconteceu com Beth e devem decidir se os novos sobreviventes são confiáveis.</p>'
            }
            if (select.value == 'temp06') {
                temporadas[5].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2015</h3><p class="texto--secundario">Após uma grande perda, o grupo de Rick e os outros moradores de Alexandria repensam suas expectativas e traçam novos planos para sobreviver.</p>'
            }
            if (select.value == 'temp07') {
                temporadas[6].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2016</h3><p class="texto--secundario">O grupo de Rick consegue escapar de um ato brutal de violência, mas todos se preocupam com outros horrores que Negan e os Salvadores ainda possam aprontar.</p>'
            }
            if (select.value == 'temp08') {
                temporadas[7].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2017</h3><p class="texto--secundario">Negan continua seu reinado de terror. Rick reúne seus aliados no Reino e no Topo da Colina para declarar guerra aos Salvadores.</p>'
            }
            if (select.value == 'temp09') {
                temporadas[8].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2018</h3><p class="texto--secundario">Com o fim da guerra, Rick espera que os sobreviventes consigam superar as diferenças. Mas o perigo vem de todos os lados e ameaça a paz recém-conquistada.</p>'
            }
            if (select.value == 'temp10') {
                temporadas[9].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2019</h3><p class="texto--secundario">Os Sussurradores tentam dividir e conquistar os sobreviventes, acabando com os breves momentos de calma e a esperança de reconstruir a civilização.</p>'
            }
            if (select.value == 'temp11') {
                temporadas[10].classList.add('temporadas__shows__list--is-active');
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2021</h3><p class="texto--secundario">Na eletrizante temporada final, os sobreviventes enfrentam a escassez e a desconfiança enquanto encaram perigos letais e a poderosa Commonwealth.</p>'
            }
        })
    }

    atualizouSelect();

})