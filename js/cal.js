var cal = function(potionPrice,item,ability,farm,phantom,unionbuff,mesoPerMin){
    var totalbuff = Number( 100 + item + ability + farm + phantom + unionbuff);
    var totalbuffWithPotion = totalbuff * 1.2;
    var mesoPerMin_N = mesoPerMin * totalbuff / 100;
    var mesoPerMin_P = mesoPerMin * totalbuffWithPotion / 100;

    var deviation = Number(mesoPerMin_P-mesoPerMin_N);
    var count = 0;
    var devationCal = 0;
    while(devationCal < potionPrice){
        count++;
        devationCal += deviation;
    }
    return count;
}
module.exports = cal;