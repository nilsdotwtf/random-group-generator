var overall = document.getElementsByName('overall-ppl')[0];
var numbergrps = document.getElementsByName('numbergrps')[0];
var pplgrps = document.getElementsByName('pplgrps')[0];

var ordergrps = document.getElementsByName('ordergrps');

var output = document.getElementsByClassName('output')[0];
var outputval;
var outputcheck;

var outputstr = 'Gruppen: ';

function groups() {
    outputcheck = overall.value % numbergrps.value;
    if (ordergrps[0].checked == true && outputcheck == 0) {
        outputval = overall.value / numbergrps.value;
        output.innerHTML = outputstr + outputval;
    } else if (ordergrps[1].checked == true) {
        
    }
}