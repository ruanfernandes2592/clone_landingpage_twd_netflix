document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('#temporada-select');
   // const temporadas = document.querySelectorAll('.temporadas__shows__list')
    const s1 = document.querySelector('.s1');
    const s2 = document.querySelector('.s2');
    const s3 = document.querySelector('.s3');
    const s4 = document.querySelector('.s4');
    const s5 = document.querySelector('.s5');
    const s6 = document.querySelector('.s6');
    const s7 = document.querySelector('.s7');
    const s8 = document.querySelector('.s8');
    const s9 = document.querySelector('.s9');
    const s10 = document.querySelector('.s10');
    const s11 = document.querySelector('.s11');
    const miniDescricao = document.querySelector('.mini-descricao');
        function atualizouSelect() {

            select.addEventListener('change', () => {
            let optionselected = select.value;

            if (optionselected == 'temp01') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2010</h3><p class="texto--secundario">Em um mundo dominado por zumbis, um grupo de sobreviventes tenta encontrar segurança e respostas dentro do CCD.</p>'
                s1.classList.add('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp02') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2011</h3><p class="texto--secundario">Na segunda temporada deste drama apocalíptico, Rick e seu grupo continuam buscando refúgio contra os zumbis em um mundo devastado e perigoso.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.add('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp03') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2012</h3><p class="texto--secundario">Na terceira temporada, Rick e o grupo de sobreviventes dominam uma prisão abandonada e descobrem uma comunidade liderada por um homem poderoso conhecido como Governador.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.add('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp04') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2013</h3><p class="texto--secundario">Após o massacre, começa a caçada pelo Governador. Rick, Daryl, Michonne e Karen planejam seus próximos passos.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.add('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp05') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2014</h3><p class="texto--secundario">Na 5a. temporada, Rick e seu grupo enfrentam seus sequestradores em Terminus, descobrem o que aconteceu com Beth e devem decidir se os novos sobreviventes são confiáveis.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.add('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp06') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2015</h3><p class="texto--secundario">Após uma grande perda, o grupo de Rick e os outros moradores de Alexandria repensam suas expectativas e traçam novos planos para sobreviver.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.add('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp07') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2016</h3><p class="texto--secundario">O grupo de Rick consegue escapar de um ato brutal de violência, mas todos se preocupam com outros horrores que Negan e os Salvadores ainda possam aprontar.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.add('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp08') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2017</h3><p class="texto--secundario">Negan continua seu reinado de terror. Rick reúne seus aliados no Reino e no Topo da Colina para declarar guerra aos Salvadores.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.add('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp09') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2018</h3><p class="texto--secundario">Com o fim da guerra, Rick espera que os sobreviventes consigam superar as diferenças. Mas o perigo vem de todos os lados e ameaça a paz recém-conquistada.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.add('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp10') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2019</h3><p class="texto--secundario">Os Sussurradores tentam dividir e conquistar os sobreviventes, acabando com os breves momentos de calma e a esperança de reconstruir a civilização.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.add('temporadas__shows__list--is-active');
                s11.classList.remove('temporadas__shows__list--is-active');
            } else if (optionselected == 'temp11') {
                miniDescricao.innerHTML = '<h3>Ano de lançamento: 2021</h3><p class="texto--secundario">Na eletrizante temporada final, os sobreviventes enfrentam a escassez e a desconfiança enquanto encaram perigos letais e a poderosa Commonwealth.</p>'
                s1.classList.remove('temporadas__shows__list--is-active');
                s2.classList.remove('temporadas__shows__list--is-active');
                s3.classList.remove('temporadas__shows__list--is-active');
                s4.classList.remove('temporadas__shows__list--is-active');
                s5.classList.remove('temporadas__shows__list--is-active');
                s6.classList.remove('temporadas__shows__list--is-active');
                s7.classList.remove('temporadas__shows__list--is-active');
                s8.classList.remove('temporadas__shows__list--is-active');
                s9.classList.remove('temporadas__shows__list--is-active');
                s10.classList.remove('temporadas__shows__list--is-active');
                s11.classList.add('temporadas__shows__list--is-active');
            } 
        })
    }
    
    atualizouSelect();
    
})