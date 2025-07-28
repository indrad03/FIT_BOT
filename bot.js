function getBotResponse(input) {
    input = input.toLowerCase();

    // Handle detailed fat loss diet
    if (input.includes("detailed diet") || input.includes("meal plan") || input.includes("fat loss diet")) {
        return "Sure! 🥗 Here's a basic fat loss meal plan:\n\n- Breakfast: Oats with berries and nuts\n- Snack: Greek yogurt with chia seeds\n- Lunch: Grilled chicken + brown rice + veggies\n- Snack: Almonds or protein shake\n- Dinner: Baked fish + salad\n\nStay hydrated and avoid junk foods!";
    }

    // General weight loss
    if ((input.includes("lose weight") || input.includes("weight loss") || input.includes("fat loss")) && !input.includes("diet")) {
        return "To lose weight, do regular cardio 🏃‍♂ (running, cycling) and eat in a calorie deficit. Consistency matters!";
    }

    // Asking about building muscle
    if (input.includes("build muscle") || input.includes("gain muscle") || input.includes("muscle gain")) {
        return "To build muscle 💪, focus on strength training, progressive overload, and high-protein diets.";
    }

    // Diet or nutrition (general)
    if (input.includes("diet") || input.includes("nutrition") || input.includes("healthy food")) {
        return "A healthy diet includes protein 🥩, healthy fats 🥑, whole grains 🌾, and lots of veggies 🥦!";
    }

    // Workout/exercise related
    if (input.includes("workout") || input.includes("exercise") || input.includes("training")) {
        return "Consistency is key! 🏋‍♀ Try 3-4 days of strength training + 2 days of cardio per week.";
    }

    // Yoga/stretching
    if (input.includes("yoga") || input.includes("flexibility")) {
        return "Yoga 🧘‍♂ improves flexibility, reduces stress, and strengthens your core. Try 20 minutes daily!";
    }

    // Greetings
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        return "Hey there! 👋 I'm here to help you with fitness tips. Ask me anything!";
    }

    // Cardio questions
    if (input.includes("cardio") || input.includes("running") || input.includes("cycling")) {
        return "Cardio is great for burning calories and improving heart health! Try doing 30 minutes of cardio 3-5 times a week.";
    }

    // How to get abs
    if (input.includes("get abs") || input.includes("abs workout") || input.includes("core exercises")) {
        return "To get abs, focus on core exercises like planks, crunches, and leg raises. Combine this with a calorie deficit and cardio!";
    }

    // Rest and recovery
    if (input.includes("rest") || input.includes("recovery") || input.includes("sleep")) {
        return "Rest and recovery are important for muscle growth! Aim for 7-9 hours of sleep per night and take at least 1-2 rest days per week.";
    }

    // Supplementation
    if (input.includes("supplements") || input.includes("protein") || input.includes("creatine")) {
        return "Supplements can aid your fitness goals, but whole foods should be your priority! Protein powder and creatine are popular choices for muscle gain.";
    }

    // Hydration
    if (input.includes("hydration") || input.includes("water")) {
        return "Staying hydrated is key! Drink at least 8 cups (2 liters) of water per day, especially if you're working out!";
    }

    // Stretching after workouts
    if (input.includes("stretch") || input.includes("post-workout stretching")) {
        return "After a workout, it's important to stretch to improve flexibility and prevent injury. Try a 5-10 minute full-body stretch routine!";
    }

    // Supplements for fat loss
    if (input.includes("fat loss supplements") || input.includes("fat burners")) {
        return "While fat loss supplements may help, the best approach is a combination of diet and exercise. No supplement will replace hard work!";
    }

    // Default fallback
    return "I'm still learning 🤔! Try asking about weight loss, muscle gain, diets, or workouts.";
}

function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    let chatbox = document.getElementById("chatbox");

    // Show user message
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userInput;
    chatbox.appendChild(userMessage);

    // Bot response
    let botResponse = getBotResponse(userInput);
    let botMessage = document.createElement("div");
    botMessage.className =  "bot-message";
    botMessage.innerText = botResponse;
    chatbox.appendChild(botMessage);

    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}
