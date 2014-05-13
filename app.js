'use strict';

var questions = [
  {'q5770': 'Mitä mieltä olet väitteestä: Tykkään EU:sta.'},
  {'q5771': 'Mitä mieltä olet väitteestä: EU-maista tulevat työntekijät vievät suomalaisten työpaikat.'},
  {'q5772': 'Mitä mieltä olet väitteestä: Elinkeinoelämän ääni kuuluu EU:ssa liian voimakkaana.'},
  {'q5773': 'Mitä mieltä olet väitteestä: Heikko EU on uhka Euroopan turvallisuudelle.'},
  {'q5774': 'Mitä mieltä olet väitteestä: Nato-jäsenyys vahvistaisi Suomen turvallisuutta.'},
  {'q5775': 'Mitä mieltä olet väitteestä: Ukrainalle on avattava tie EU-jäsenyyteen.'},
  {'q5776': 'Mitä mieltä olet väitteestä: EU:n pitää tukea kansalaisjärjestöjen toimintaa Venäjällä demokratian edistämiseksi.'},
  {'q5777': 'Mitä mieltä olet väitteestä: Laitonta maahanmuuttoa EU-alueelle torjutaan parhaiten avaamalla lisää mahdollisuuksia lailliselle maahanmuutolle.'},
  {'q5778': 'Mitä mieltä olet väitteestä: Euroopan unionilla on siirtomaahistorian vuoksi erityinen vastuu Afrikan kehittämisessä.'},
  {'q5779': 'Mitä mieltä olet väitteestä: Turkin paikka on EU:ssa.'},
  {'q5780': 'Mitä mieltä olet väitteestä: EU-jäsenyys maksaa liikaa.'},
  {'q5781': 'Mitä mieltä olet väitteestä: Eurosta on ollut suomalaisille enemmän hyötyä kuin haittaa.'},
  {'q5782': 'Mitä mieltä olet väitteestä: Yhteinen valuutta vaatii euroalueen yhteistä talouspolitiikkaa.'},
  {'q5783': 'Mitä mieltä olet väitteestä: Verokilpailun rajoittamiseksi EU:ssa on päätettävä yritysveron vähimmäistasosta.'},
  {'q5784': 'Mitä mieltä olet väitteestä: EU:n on katkaistava kaikki rahaliikenne veroparatiiseihin.'},
  {'q5785': 'Mitä mieltä olet väitteestä: Pankkeja ei saa enää koskaan tukea veronmaksajien rahoilla.'},
  {'q5786': 'Mitä mieltä olet väitteestä: Suomalaisilta pankeilta kerättyjä varoja voidaan käyttää eurooppalaisten pankkien tukemiseen.'},
  {'q5787': 'Mitä mieltä olet väitteestä: Tavaroiden, palvelujen, pääomien ja työvoiman vapaa liikkuminen EU:n alueella on lisännyt suomalaisten hyvinvointia.'},
  {'q5788': 'Mitä mieltä olet väitteestä: Kansainvälisten yritysten ja sijoittajien kiinnostusta Eurooppaan on voimakkaasti lisättävä karsimalla yritystoimintaan kohdistuvia rajoituksia ja kustannuksia.'},
  {'q5789': 'Mitä mieltä olet väitteestä: EU:n on sidottava kauppasuhteet tiukemmin ihmisoikeuksiin ja työntekijöiden oikeuksien kunnioittamiseen.'},
  {'q5790': 'Mitä mieltä olet väitteestä: Susien suojelu Suomessa ei kuulu EU:lle.'},
  {'q5791': 'Mitä mieltä olet väitteestä: Marihuanaa tulisi käsitellä lainsäädännössä samalla tavalla kuin tupakkaa tai alkoholia.'},
  {'q5792': 'Mitä mieltä olet väitteestä: EU-alueelle on säädettävä minimipalkka.'},
  {'q5793': 'Mitä mieltä olet väitteestä: EU:sta on kehitettävä liittovaltio, jossa Brysselissä yhteisesti päätettävät asiat on tarkasti rajattu ja muista asioista päätetään jäsenmaissa.'},
  {'q5794': 'Mitä mieltä olet väitteestä: EU:ssa hyväksyttyjä säädöksiä (direktiivejä) pitäisi soveltaa suomalaiseen lainsäädäntöön selvästi nykyistä väljemmin.'},
  {'q5795': 'Mitä mieltä olet väitteestä: EU-budjetin monimutkaisesta rahoituksesta pitäisi siirtyä yleiseen EU-veroon.'},
  {'q5796': 'Mitä mieltä olet väitteestä: EU:n kykyä itsenäiseen, sotilaalliseen toimintaan on vahvistettava.'},
  {'q5797': 'Mitä mieltä olet väitteestä: EU-jäsenyys on muuttanut suomalaista maataloutta hyvään suuntaan.'},
  {'q5798': 'Mitä mieltä olet väitteestä: Energia- ja ilmastopolitiikassa etusijalle on asetettava teollisuuden kilpailukyky.'},
  {'q5799': 'Mitä mieltä olet väitteestä: Euroopan siirtymistä uusiutuvan energian käyttämiseen on nopeutettava, vaikka se nostaisi sähkön ja polttoaineiden hintoja.'}];

var answers = [
  { id: 0,
    name:'Täysin samaa mieltä' },
  { id: 1,
    name: 'Samaa mieltä' },
  { id: 2,
    name: 'Ohita'},
  { id: 3,
    name: 'Eri mieltä' },
  { id: 4,
    name: 'Täysin eri mieltä' }
];

var parties = [
  { id: 170,
    name: 'Itsenäisyyspuolue' },
  { id:171,
    name: 'KD' },
  { id: 172,
    name: 'Suomen Keskusta' },
  { id: 173,
    name: 'Kansallinen Kokoomus' },
  { id: 174,
    name: 'Köyhien Asialla' },
  { id: 176,
    name: 'Muutos 2011' },
  { id: 177,
    name: 'Perussuomalaiset' },
  { id: 178,
     name: 'Piraattipuolue' },
  { id: 179,
    name: 'Suomen Sosialidemokraattinen Puolue' },
  { id: 180,
    name: 'Ruotsalainen kansanpuolue' },
  { id: 181,
    name: 'Suomen Kommunistinen Puolue' },
  { id: 183,
    name: 'Vasemmistoliitto' },
  { id: 184,
    name: 'Vihreä liitto'},
  { id: 185,
    name: 'Sinivalkoinen Rintama'},
  { id: 186,
    name: 'Kristiina Ilmarinen valitsijayhdistys'}
];

var l = legend();
d3.select('#parties').datum(parties).call(l.prefixer('party-'));

d3.select('#answers').datum(answers).call(l.prefixer('answer-'));

// Age distribution
var b = bars().parties(parties);

//d3.tsv('candidates.tsv', function (data) {

  //d3.select('svg#age').datum(data).call(b);

//});

// Heatmap
var h = heatmap().questions(questions);

// filter
var self = this;

var f = function (a, b) {
  self.b.filterByAge(a, b);
  self.h.filterByAge(a, b);
}

// Load and parse data for heatmap
d3.tsv('candidates.tsv', function (res) {
  /**
   * returns
   *
   * { answers: Array[0,1,3,4,3,2..]
   *   party: 185
   *   person: "Kai  Aalto",
   *   id: 31 }
   */
  var _ = {
    id: parseInt(res['Id']),
    party: parseInt(res['Puolue']),
    age: parseInt(res['Ikä']),
    person: res['Etunimi'] + ' ' + res['Sukunimi'],
    answers: [],
    comments: []
  };

  for (var i = 0; i < questions.length; i++) {
    var key = Object.keys(questions[i])[0];
    _.answers.push(res[key]);
    _.comments.push(res[key.replace('q', 'c')]);
  }
  return _;

}, function (data) {
  data.sort(
    firstBy(function (a, b) {
      return a.party - b.party;
    })
    .thenBy(function (a, b) {
      return a.age - b.age;
    })
  );

  d3.select('svg#candidates').datum(data).call(h);
  d3.select('svg#age').datum(data).call(b);
});


var filtered;

$('body').on('click', 'svg#candidates rect', function (e) {
  var id = parseInt($(e.currentTarget).attr('data-p-id'));
  console.log(id);
  if (filtered != id) {
    self.b.filterById(id);
    self.h.filterById(id);
    filtered = id;
  } else {
    self.b.filterById();
    self.h.filterById();
    filtered = undefined;
  }
});

$('body').on('change', 'select#a', function (e) {
  var v = $(e.target).val().split('..').map(function (v) { return parseInt(v); });
  self.h.filterByAge(v[0], v[1]);
  self.b.filterByAge(v[0], v[1]);
});