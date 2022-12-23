function GerarQRcode() {
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
    var conteudoQRcode= GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRcodeImage').src = conteudoQRcode;
}

function SalvarQRcode() {
    var botaoSalvar = document.getElementById('QRcodeImage');
    
    
}