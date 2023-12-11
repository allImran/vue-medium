// worker.js
const methods = {}

onmessage = async function (event) {
    const { registerMethod, unregisterMethod, methodName, methodFunction, data } = event.data;

    if (registerMethod) {
        // Register the method dynamically
        registerMethodFunction(methodName, methodFunction);
    } else if (unregisterMethod) {
        // Unregister the method dynamically
        unregisterMethodFunction(methodName);
    } else {
        // Check if the method is registered
        if (methods[methodName]){
            // Invoke the registered method
            const result = await  methods[methodName](data);
            // Send the result back to the main thread
            postMessage(result);
        } else {
            console.error('Unknown method:', methodName);
        }
    }
};

// Register method dynamically
function registerMethodFunction(methodName, methodFunction) {
    eval(`methods.${methodName} = ${methodFunction}`);
}

// Function to unregister a method (optional)
function unregisterMethodFunction(methodName) {
    delete methods[methodName];
}
