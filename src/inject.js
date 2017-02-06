inject();

function getRepoSize(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function inject() {
		var currentUrl = window.location.href;
		var repoName = currentUrl.substring((currentUrl.indexOf('.com/') + 5));
		var requestUrl = 'https://api.github.com/repos/' + repoName;
		getRepoSize(
			requestUrl,
			function(data) {
				var span = document.getElementById('size_span');
				var link = document.getElementById('dl_link');
				link.href = window.location.href + '/archive/master.zip';

        var size = data.size;
        var measurement = ' kB';

        if (data.size > 1000) {
          size = (size/1000).toFixed(2);
          measurement = ' MB';
        }

        link.append(measurement);
				span.innerHTML = ' ' + size;
			},
			function(xhr) { console.log(xhr); }
		)
}
