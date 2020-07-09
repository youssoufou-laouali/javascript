var as = document.querySelectorAll('a');
const item = document.getElementById('item');
const money = document.getElementById('money');
var totalitem = 0;
var totalmoney = 0;
var a, target;
var collapse = document.getElementById('collapse');
var moin = false;

for (var i = 0; i < as.length; i++) {
    as[i].addEventListener('click', function(e) {
        e.preventDefault();
        target = e.target;
        a = target.parentElement.parentElement.nextElementSibling.children[1].children[0];
        totalitem++;
        totalmoney += parseInt(a.textContent);
        item.textContent = totalitem;
        money.textContent = totalmoney;

        var imagetarget = target.parentElement.parentElement.previousElementSibling;
        imagetarget.classList.add('img-fluid');

        var cloneimg = imagetarget.cloneNode(true);
        cloneimg.classList.remove('card-img-top');
        cloneimg.classList.remove('zoom');
        cloneimg.classList.add('img-check');
        var titre = a.parentElement.previousElementSibling;
        var clonetitre = titre.cloneNode(true);
        clonetitre = document.createTextNode(clonetitre.textContent)



        var td1 = document.createElement('td');
        var im = document.innerHTML = cloneimg;
        td1.appendChild(im);


        var td2 = document.createElement('td');
        var span = document.createElement('span');
        span.classList.add('recuper');
        span.textContent = a.textContent;
        td2.appendChild(clonetitre);
        var cfa = document.createTextNode('CFA');
        var br = document.createElement('br');
        td2.appendChild(br);
        td2.appendChild(span);
        td2.appendChild(cfa);


        var td3 = document.createElement('td');
        td3.innerHTML = `<button class="delete btn"><i class="fa fa-trash delete fa-2x text-warning pt-3"></i></button>`;


        var tr = document.createElement('tr');
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);


        var tbody = document.getElementById('tbody');
        tbody.appendChild(tr);
    })
}

collapse.addEventListener('mouseover', function() {
    const supprimer = document.querySelectorAll('.delete')

    for (var j = 0; j < supprimer.length; j++) {
        supprimer[j].addEventListener('click', function(ev) {
            ev.preventDefault();
            moin = ev.target;

        })
    }
    if (moin) {
        var h = moin.parentElement.parentElement.parentElement;
        totalmoney -= parseInt(h.children[1].children[1].textContent);
        totalitem--;
        item.textContent = totalitem;
        money.textContent = totalmoney;
        moin = h.parentElement;

        moin.removeChild(h);
        moin = false;
    }
});