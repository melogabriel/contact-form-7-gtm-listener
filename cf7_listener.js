<script>
document.addEventListener('wpcf7mailsent', function(event) {
var responseArray = event.detail.inputs;
var formattedResponse = {};

responseArray.forEach(function(input) {
formattedResponse[input.name] = input.value;
});

window.dataLayer.push({
"event": "cf7submission",
"formId": event.detail.contactFormId,
"response": formattedResponse
});
});
</script>
