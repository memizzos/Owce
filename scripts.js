function toTHTML( owca ){
                    return `<tr>
                    <td>${owca.name}</td>
                    <td>${owca.colors}</td>
                    <td>${owca.age}</td>
                    <td>${owca.canSweam}</td>
                    <td>${owca.isHappy}</td>
                    <td>${owca.maxSpeed}</td>
                    <td>${owca.numberOfLegs}</td>

                </tr>`;}
const tabela = document.querySelector("#owce");
const imię = document.querySelector("#sheep-name");
function check( owca ){
    const wpisaneImię = imię.value.trim()
    if(wpisaneImię == "") return true;
    return owca.name.startsWith( wpisaneImię );
}
function refresh(){
    const przefiltrowane_owce = randomSheeps.filter(check);
    const html_owce = przefiltrowane_owce.map(toTHTML);
    tabela.innerHTML = `<tr>
    <th scope="col">Name</th>
    <th scope="col">Colors</th>
    <th scope="col">Age</th>
    <th scope="col">Can Sweam?</th>
    <th scope="col">Is Happy?</th>
    <th scope="col">Max Speed</th>
    <th scope="col"># of Legs</th>
    </tr>` + html_owce.join(" ");
tabela.innerHTML = `<tr>
<th scope="col">Name</th>
<th scope="col">Colors</th>
<th scope="col">Age</th>
<th scope="col">Can Sweam?</th>
<th scope="col">Is Happy?</th>
<th scope="col">Max Speed</th>
<th scope="col"># of Legs</th>
</tr>` + randomSheeps.map(toTHTML).join(" ");
}
refresh();

const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);