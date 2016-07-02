function atualizaStatus() {
	var status, contadorOffline;
			status = null;
			contadorOffline = sessionStorage.getItem('offline') || 0;
			

	if(navigator.onLine) {
		status = "Online";	
	} else {
		status = "Offline";
		contadorOffline = sessionStorage.getItem('offline') || 0;
		contadorOffline = parseInt(contadorOffline) + 1;
		sessionStorage.setItem('offline', contadorOffline);
	}
	
	$("#onlineStatus .status").text(status);
	$("#onlineStatus .quedas").text(contadorOffline);
	
}

$(window).on("online offline", atualizaStatus);
atualizaStatus();