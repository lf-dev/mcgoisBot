'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

const chatbot = new Telegram.Telegram('626714518:AAFVXrEKwjgg1A9T_Vw-1JU_bMa1D9AN1lc')

class EventsController extends TelegramBaseController{
	
	callStravaWrap(param, scope){
	    var url = "https://stravawrap.herokuapp.com/messages/5b9badc1e90db000161ab975"; 

	    const axios = require('axios');

	    axios.get(url)
	         .then(response => {
		   let msg = 'voce solicitou a mensagem '+param+', que tem o valor: '+ (response.data.title)
		   scope.sendMessage(msg)
		 })
		 .catch(error => {
		   console.log(error);
		 });

	}


	olaAction(scope) {
	    const param = scope._message._text.substring(5)
	    let msg = `bababba -- carara ${param}`
	    console.log(msg)
	    scope.sendMessage(msg)
	}

	msgAction(scope){
	    const param = scope._message._text.substring(5)
	    let msg = this.callStravaWrap(param, scope)
	    console.log(msg)
	    scope.sendMessage(msg)

	}
	get routes() {
		return {
		'ola': 'olaAction',
		'oi' : 'olaAction',
		'msg': 'msgAction'
		}
	}
}

class OtherwiseController extends TelegramBaseController {
    handle(scope){
        console.log('otherwise')
	const msg = scope._message._text
	console.log(msg)
	scope.sendMessage(`enfia seu ${msg} no teu cu! FDP!`)
    }
}

chatbot.router.when( new TextCommand('/ola','ola'), new EventsController() )
		.when( new TextCommand('oi','oi'), new EventsController())
		.when( new TextCommand('/msg','msg'), new EventsController())
		.otherwise(new OtherwiseController())
