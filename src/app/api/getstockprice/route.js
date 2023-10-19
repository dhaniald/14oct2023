//Import area

//Defenation area
async function GET(request) {
    //await
    const searchParams = request.nextUrl.searchParams
    const stockName = searchParams.get('stockName')
    var min, max, stockPrice,resData;
    switch (stockName) {
        case 'icici':
            min = 950;
            max = 1250;
            var stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockName:stockName,                
                Price: stockPrice
            }
            break;

        case 'hdfc':
            min = 1530;
            max = 1650;
            var stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockName:stockName,                
                Price: stockPrice
            }
            break;

        case 'axis':
            min = 660;
            max = 750;
            var stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockName:stockName,                
                Price: stockPrice
            }
            break;

        case 'cipla':
            min = 220;
            max = 400;
            var stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockName:stockName,                
                Price: stockPrice
            }
            break;

        case 'bhelltd':
            min = 130;
            max = 260;
            var stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockName:stockName,                
                Price: stockPrice
            }
            break;

        default:
            resData = {
                msg:"Please select correct stock name..!",                
                 
            } 
            break;
    }
    return Response.json(resData);
}

//export area
module.exports = { GET: GET }