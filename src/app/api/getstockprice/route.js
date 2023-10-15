//Import area

//Defenation area
async function GET() {
    //await
    const min = 100;
    const max = 1300;
    const formattedvalue = parseFloat((Math.random() * (max - min) + min).toFixed(2))

    return Response.json({                   //each function returns something
        Price: formattedvalue
    });
}

//export area
module.exports = { GET: GET }