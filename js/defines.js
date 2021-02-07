// noinspection ThisExpressionReferencesGlobalObjectJS,JSUnusedLocalSymbols,DuplicatedCode
(function(global) {
	global['DROPBOX_TOKEN'] = atob('TFlvejIwTHQ3RndBQUFBQUFBQUFBZmkwNnNaNnlWYjBHeHozLWI0U2FWYTl3VUp5QXN3cGNLTGJFSk8wOGwwcw==');

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