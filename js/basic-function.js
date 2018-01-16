var ordergrps = document.getElementsByName('ordergrps');
var numberofgrps = document.getElementsByClassName('number-of-grps');
var pplpergrp = document.getElementsByClassName('ppl-per-grp');

pplpergrp[0].style.display = 'none';
numberofgrps[0].style.display = 'none';

function checkradio() {
    if (ordergrps[0].checked == true) {
        numberofgrps[0].style.display = 'block';
        pplpergrp[0].style.display = 'none';
    } else if (ordergrps[1].checked == true) {
        numberofgrps[0].style.display = 'none';
        pplpergrp[0].style.display = 'block';
    }
}