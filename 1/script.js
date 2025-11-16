const financialData = [
  12059,
  -3551,
  25940,
  -8150,
  15009,
  -1210,
  30940,
  -5065,
  10715,
  18680,
  -6100,
  22600
];

let totalProfit = 0;
let totalLoss = 0;

financialData.forEach(result => {
    if (result > 0) {
        totalProfit += result;
    } else if (result < 0) {
        totalLoss += result;
    }
}
);

document.getElementById(info)

info.innerHTML += ("Financial results<br>");

financialData.forEach((result, index) => {
    info.innerHTML += (`Month ${index + 1}: ${result}<br>`);
}
);

info.innerHTML += (`Total loss: ${totalLoss}<br>`);
info.innerHTML += (`Total profit: ${totalProfit}<br>`);
info.innerHTML += (`Total: ${totalProfit + totalLoss}<br>`);