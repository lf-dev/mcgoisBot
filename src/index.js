'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

const chatbot = new Telegram.Telegram('626714518:AAFVXrEKwjgg1A9T_Vw-1JU_bMa1D9AN1lc')

class EventsController extends TelegramBaseController{
	
	olaAction(scope) {
	    const param = scope._message._text.substring(5)
	    let msg = `bababba -- carara ${param}`
	    console.log(msg)
	    scope.sendMessage(msg)
	}

	get routes() {
		return {
		'ola': 'olaAction'
		}
	}
}

chatbot.router.when( new TextCommand('/ola','ola'), new EventsController() )
