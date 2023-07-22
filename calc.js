document.querySelector("#calcular-mola").addEventListener("click", function () {
    let peso = document.querySelector("#peso").value;

    let distPesoDianteira = document.querySelector("#dist-peso-dianteira").value;
    let distPesoTraseira = document.querySelector("#dist-peso-traseira").value;

    let bitolaDianteira = document.querySelector("#bitola-dianteira").value;
    let bitolaTraseira = document.querySelector("#bitola-traseira").value;

    let posMolaDianteira = document.querySelector("#pos-mola-dianteira").value;
    let posMolaTraseira = document.querySelector("#pos-mola-traseira").value;

    let pesoDianteira = (peso * (distPesoDianteira / 100)) / 2;
    let pesoTraseira = (peso * (distPesoTraseira / 100)) / 2;

    let dMaiorDianteira = bitolaDianteira / 2;
    let dMaiorTraseira = bitolaTraseira / 2;

    let dMenorDianteira = dMaiorDianteira - posMolaDianteira;
    let dMenorTraseira = dMaiorTraseira - posMolaTraseira;

    let kMolaDianteira = ((pesoDianteira * dMaiorDianteira) / dMenorDianteira) * 10 * 1000;
    let kMolaTraseira = ((pesoTraseira * dMaiorTraseira) / dMenorTraseira) * 10 * 1000;

    if (!Number.isNaN(kMolaDianteira) && !Number.isNaN(kMolaTraseira)) {
        let resultadoDianteira = kMolaDianteira.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
        document.querySelector("#k-mola-dianteira").innerHTML = `Mola dianteira: <strong>${resultadoDianteira} N/m</strong>`;

        let resultadoTraseira = kMolaTraseira.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
        document.querySelector("#k-mola-traseira").innerHTML = `Mola traseira: <strong>${resultadoTraseira} N/m</strong>`;

        criarHistoricoMola(pesoDianteira, bitolaDianteira, posMolaDianteira, resultadoDianteira, pesoTraseira, bitolaTraseira, posMolaTraseira, resultadoTraseira);
    }
});

function criarHistoricoMola(pesoDianteira, bitolaDianteira, posMolaDianteira, resultadoDianteira, pesoTraseira, bitolaTraseira, posMolaTraseira, resultadoTraseira) {
    let table = document.createElement('table');
    table.innerHTML = `
        <thead>
          <th></th>
          <th>Dianteira</th>
          <th>Traseira</th>
        </thead>
        <tbody>
          <tr>
            <th>Peso</th>
            <td>${pesoDianteira}</td>
            <td>${pesoTraseira}</td>
          </tr>
          <tr>
            <th>Bitola</th>
            <td>${bitolaDianteira}</td>
            <td>${bitolaTraseira}</td>
          </tr>
          <tr>
            <th>Posição</th>
            <td>${posMolaDianteira}</td>
            <td>${posMolaTraseira}</td>
          </tr>
          <tr>
            <th>Resultado</th>
            <td>${resultadoDianteira}</td>
            <td>${resultadoTraseira}</td>
          </tr>
        </tbody>`;
    let divisor = document.createElement('hr');
    document.querySelector("#hist-mola").prepend(table, divisor);
}

document.querySelector("#calcular-angulo").addEventListener("click", function () {
    let alturaDianteira = document.querySelector("#altura-dianteira").value;
    let alturaTraseira = document.querySelector("#altura-traseira").value;

    let suspDianteira = document.querySelector("#braco-susp-dianteira").value;
    let suspTraseira = document.querySelector("#braco-susp-traseira").value;

    let coDianteira = alturaDianteira / 2;
    let coTraseira = alturaTraseira / 2;

    let senoDianteira = coDianteira / suspDianteira;
    let senoTraseira = coTraseira / suspTraseira;

    let arcsenDianteira = Math.asin(senoDianteira);
    let arcsenTraseira = Math.asin(senoTraseira);

    let anguloDianteiro = arcsenDianteira * (180 / Math.PI);
    let anguloTraseiro = arcsenTraseira * (180 / Math.PI);

    let cursoAngularDianteiro = anguloDianteiro * 2;
    let cursoAngularTraseiro = anguloTraseiro * 2;

    if (!Number.isNaN(cursoAngularDianteiro) && !Number.isNaN(cursoAngularTraseiro)) {
        let resultadoDianteira = cursoAngularDianteiro.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
        document.querySelector("#susp-dianteira").innerHTML = `Suspensão dianteira: <strong>${resultadoDianteira} º</strong>`;

        let resultadoTraseira = cursoAngularTraseiro.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
        document.querySelector("#susp-traseira").innerHTML = `Suspensão traseira: <strong>${resultadoTraseira} º</strong>`;

        criarHistoricoAngulo(alturaDianteira, suspDianteira, resultadoDianteira, alturaTraseira, suspTraseira, resultadoTraseira);
    }
});

function criarHistoricoAngulo(alturaDianteira, suspDianteira, resultadoDianteira, alturaTraseira, suspTraseira, resultadoTraseira) {
    let table = document.createElement('table');
    table.innerHTML = `
        <thead>
          <th></th>
          <th>Dianteira</th>
          <th>Traseira</th>
        </thead>
        <tbody>
          <tr>
            <th>Altura</th>
            <td>${alturaDianteira}</td>
            <td>${alturaTraseira}</td>
          </tr>
          <tr>
            <th>Suspensão</th>
            <td>${suspDianteira}</td>
            <td>${suspTraseira}</td>
          </tr>
          <tr>
            <th>Resultado</th>
            <td>${resultadoDianteira}</td>
            <td>${resultadoTraseira}</td>
          </tr>
        </tbody>`;
    let divisor = document.createElement('hr');
    document.querySelector("#hist-angulo").prepend(table, divisor);
}
