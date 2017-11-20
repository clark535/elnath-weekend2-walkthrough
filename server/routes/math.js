var express = require('express');
var router = express.Router();

var mathResult = 0;

var mathOper;

var historyArray = [];

var mathHistory = {};

router.post('/', function(req, res) {
    console.log('router.post hit');
    var firstNum = parseInt(req.body.firstNum);
    var secondNum = parseInt(req.body.secondNum);
    console.log('req.body', req.body);

    switch(req.body.operator){
        case "add":
            mathOper = '+';
            mathResult = firstNum + secondNum;
            break;
        case "subtract":
            mathOper = '-';        
            mathResult = firstNum - secondNum;
            break;
        case "multiply":
            mathOper = '*';        
            mathResult = firstNum * secondNum;
            break;
        case "divide":
            mathOper = '/';        
            mathResult = firstNum / secondNum;
            break;
    }

    //add value to mathHistory
    mathHistory = {
        first: firstNum,
        second: secondNum,
        oper: mathOper,
        result: mathResult
    };

    historyArray.push(mathHistory);

    res.sendStatus(200);

});

router.get('/', function(req, res) {
    res.send({result: mathResult, history: historyArray});
});

module.exports = router;

//dont put a .use in router.