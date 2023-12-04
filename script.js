$(document).ready(function () {
  $("form[name='hire-us']")
    .submit(function (e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: true,
        },
        surname: {
          required: true,
        },
        number: {
          required: true,
        },
        email: {
          required: true,
        },
      },

      messages: {
        name: "This field is required",
        surname: "This field is required",
        number: "This field is required",
        email: "This field is required",
      },

      submitHandler: function () {
        if ($("form[name='hire-us']").valid()) {
          var formsubmit = document.getElementById("hire-us");
          var formData = new FormData(formsubmit);
          formData.append("service_id", "service_5ba4aia");
          formData.append("template_id", "template_samlyye");
          formData.append("user_id", "adWgoGRqRhEquvY3o");

          $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
            type: "POST",
            data: formData,
            contentType: false, // auto-detection
            processData: false, // no need to parse formData to string
          })
            .done(function () {
              alert("Your mail is sent!");
            })
            .fail(function (error) {
              alert("Oops... " + JSON.stringify(error));
            });
        }
      },
    });

  //Contact us
  $("form[name='contact-us']")
    .submit(function (e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: true,
        },
        message: {
          required: true,
        },
        number: {
          required: true,
        },
        email: {
          required: true,
        },
      },

      messages: {
        name: "This field is required",
        surname: "This field is required",
        number: "This field is required",
        email: "This field is required",
      },

      submitHandler: function () {
        if ($("form[name='contact-us']").valid()) {
          var formsubmit = document.getElementById("contact-us");
          var formData = new FormData(formsubmit);
          formData.append("service_id", "service_5ba4aia");
          formData.append("template_id", "template_bzcq7vu");
          formData.append("user_id", "adWgoGRqRhEquvY3o");

          $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
            type: "POST",
            data: formData,
            contentType: false, // auto-detection
            processData: false, // no need to parse formData to string
          })
            .done(function () {
              alert("Your mail is sent!");
            })
            .fail(function (error) {
              alert("Oops... " + JSON.stringify(error));
            });
        }
      },
    });
});
