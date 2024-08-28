# Contact Form 7 Listener for Google Tag Manager

This JavaScript code enhances the default behavior of Contact Form 7's form submission event. It listens for the form submission event, processes the form data, and pushes it to the Google Tag Manager data layer as a structured object. This allows for easier tracking and analysis of form submissions.

## Features

- **Enhanced Data Layer Push**: Converts form submission data from a simple array to a structured object, making it easier to work with in Google Tag Manager.
- **Form Field Mapping**: Automatically maps form field names to their corresponding values, providing a more readable and manageable data structure.
- **Compatibility**: Designed to work with Contact Form 7 and Google Tag Manager.

## Installation

1. **Add the Script**: Copy the following code and add it to your website's script file or directly into the HTML.

    ```html
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
    ```

2. **Configure Google Tag Manager**: Ensure that you have Google Tag Manager set up on your website. The script will push the form submission data to the data layer, where it can be used to trigger tags or track form submissions.

3. **Create Triggers and Tags**: In Google Tag Manager, create triggers and tags based on the `cf7submission` event and the structured data provided by the script.

## How It Works

- The script listens for the `wpcf7mailsent` event, which is fired when a Contact Form 7 form is successfully submitted.
- It processes the form data, converting it from an array of input objects to a key-value object where the keys are the form field names.
- This structured data is then pushed to the `dataLayer`, where it can be accessed by Google Tag Manager for further processing.

## Example

If a form is submitted with the following fields:

- **Name**: John Doe
- **Email**: john.doe@example.com
- **Message**: Hello!

The data pushed to the `dataLayer` will look like this:

```javascript
{
    "event": "cf7submission",
    "formId": "1234",
    "response": {
        "your-name": "John Doe",
        "your-email": "john.doe@example.com",
        "your-message": "Hello!"
    }
}
```
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to submit issues or pull requests if you have any improvements or bug fixes.

## Acknowledgments
- Contact Form 7: For providing a flexible and powerful form plugin for WordPress.
- Google Tag Manager: For enabling easy and effective tag management.

