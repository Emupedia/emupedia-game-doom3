// noinspection ThisExpressionReferencesGlobalObjectJS,JSUnusedLocalSymbols,DuplicatedCode
(function(global) {
	global['DROPBOX_TOKEN'] = atob('c2wuQXF2MUh5T0xTbjFlNmZYTG8wWG5Qb09hb0dzNGNJSDkxX3pmV21vMnVtMlk0WDBXSWtobm5UMXBmTTZvNFBKT0h2cFpsTlVJUk1xejRyeXljSDE2QTlIcnBzODNGYk9uSFpCZnlnMlhZc2dCbV9WMVFEbzVCbUgwU3VfRklYYU5tcEcxZUNr');

	var externallyFramed;

	try {
		externallyFramed = global.top.location.host !== global.location.host;
	} catch (e) {
		externallyFramed = true;
	}

	if (externallyFramed) {
		try {
			global.top.location = global.location;
		} catch (e) {}
	}
}(this));