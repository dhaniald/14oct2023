//Import area

//Defenation area
async function GET(request) {
    //await
    const searchParams = request.nextUrl.searchParams
    const stockname = searchParams.get('stockname')
    var min, max, formattedvalue,resData;
    switch (stockname) {
        case 'icici':
            min = 950;
            max = 1250;
            var formattedvalue = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockname:stockname,                
                Price: formattedvalue
            }
            break;

        case 'hdfc':
            min = 1530;
            max = 1650;
            var formattedvalue = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockname:stockname,                
                Price: formattedvalue
            }
            break;

        case 'axis':
            min = 660;
            max = 750;
            var formattedvalue = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockname:stockname,                
                Price: formattedvalue
            }
            break;

        case 'cipla':
            min = 220;
            max = 400;
            var formattedvalue = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockname:stockname,                
                Price: formattedvalue
            }
            break;

        case 'bhelltd':
            min = 130;
            max = 260;
            var formattedvalue = parseFloat((Math.random() * (max - min) + min).toFixed(2))
            resData = {
                stockname:stockname,                
                Price: formattedvalue
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