var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */

var column = 10;

router.get('/', function (req, res, next) {

    console.log(req.query.column);
    if(req.query.column != undefined){
        
    column = req.query.column;

    }
            
    res.render('index', {
        title: "バーサライタープログラム生成プログラム",
        record: column,
    });
    
 });


router.post('/', function (req, res) {

    console.log(req.body);
    console.log(column);

    var base = '#include<12f675.h>' + '\n' +
        '#fuses INTRC_IO,NOWDT,PUT,NOPROTECT,NOMCLR' + '\n' +
        '#use delay(CLOCK=4000000)' + '\n' +
        'void main(){' + '\n' +
        'while(1){ ' + '\n';
    
    var box = column;

    for (var i = 1; i <= box; i++) {
        if ((typeof (req.body["T" + i])) == 'string') {
            console.log("T" + i);
            base += ('output_low(' + req.body["T" + i] + '); \n');
            base += ('delay_ms(' + req.body.delay + '); \n');
            base += ('output_high(' + req.body["T" + i] + '); \n');
        } else if ((typeof (req.body["T" + i])) == 'object') {
            var length = req.body["T" + i].length
            console.log("T" + i + " : " + length);
            for (var s = 0; s < length; s++)
                base += ('output_low(' + req.body["T" + i][s] + '); \n');
            base += ('delay_ms(' + req.body.delay + '); \n');
            for (var s = 0; s < length; s++)
                base += ('output_high(' + req.body["T" + i][s] + '); \n');
        } else if ((typeof (req.body["T" + i])) == 'undefined') {
            base += ('delay_ms(' + req.body.delay + '); \n');
        }

    }
    
    if(req.body.lightOption == 'reverse'){
        base += ('delay_ms(' + req.body.delay + '); \n');
        for(var i = box; i > 0; i-- ){
            if((typeof (req.body["T" + i])) == 'string'){
                base += ('output_low(' + req.body["T" + i] + '); \n');
                base += ('delay_ms(' + req.body.delay + '); \n');
                base += ('output_high(' + req.body["T" + i] + '); \n');
            } else if ((typeof (req.body["T" + i])) == 'object') {
                var length = req.body["T" + i].length
                console.log("T" + i + " : " + length);
                for (var s = 0; s < length; s++)
                    base += ('output_low(' + req.body["T" + i][s] + '); \n');
                base += ('delay_ms(' + req.body.delay + '); \n');
                for (var s = 0; s < length; s++)
                    base += ('output_high(' + req.body["T" + i][s] + '); \n');
            } else if ((typeof (req.body["T" + i])) == 'undefined') {
                base += ('delay_ms(' + req.body.delay + '); \n');
            }
        }
        base += ('delay_ms(' + req.body.delay + '); \n');
    }
    
    base += ("}\n}\n");

    //res.render('index', { title: 'Express' });
    fs.writeFile('versa-writer.c', base , function (err) {
        if (err) {

        } else {
            res.download('./versa-writer.c', 'versa-writer.c', function (err) {
                if (err) {} else {}
            });
        }
    });
    //res.download('../versa-writer.c');


    //res.render('index', { title: 'Express' });

});


module.exports = router;