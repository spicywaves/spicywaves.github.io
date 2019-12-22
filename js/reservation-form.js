var $form = $('form#reservation_form'),
					url = 'https://script.google.com/macros/s/AKfycbzVmNUm2LhlrIOpIsuaFJcp5nsURksGoJ205RsYA7vyDfoWDXc/exec'

				$('#submit').on('click', function (e) {
					e.preventDefault();
					var serial_data = $form.serialize();
					serial_data = serial_data + '&timestamp=' + new Date().toDateString();
					var jqxhr = $.ajax({
						url: url,
						method: "GET",
						dataType: "json",
						data: serial_data
					}).success(
						console.log(serial_data)
					);
				})